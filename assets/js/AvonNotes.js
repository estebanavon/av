$(document).ready(function(){
    //true para activarlo, false para desactivarlo
    const avModalSwitch = true;

    //Las imagenes se colocan en esta carpeta /REPSuite/static/images/home/

    const avOlderConfig = [
        {
            link: '/REPSuite/vendorLinksOne.page?linkid=4',
            img: 'overlay_tablero_de_control.jpg',
            title: 'Tablero de Control - Catálogos',
            target: '_blank'
        },
    ];
    var c = AvonAnalyticsObjex.Profile.campaignInfo;
    var z = AvonAnalyticsObjex.Profile.zone;

    var zones = [
        //Image 0
        ['108','109'],
        //Image 1
        ['111','110'],
        //Image 2
        ['102','101'],
    ]
    let i;
    const currentCampaign = parseInt(c.slice(6), 10);
    for (i=0;zones.length > i;i++){
        if (zones[i].includes(z)) {
            avOlderConfig.unshift(
                {
                    link: '/REPSuite/home.page',
                    img: 'overlay_zona_'+ i +'.jpg',
                    title: 'Bienvenida a tu nueva zona',
                    target: '_self'
                }
            )
        }
    }
    

    if (avModalSwitch){
        var avPrinter,avConfig,loaCheck;
        avPrinter = ['']
        
        avConfig = avOlderConfig;
        for (i=0;i < avConfig.length;i++) {
            avPrinter += '<div class="avModalButton" av-data="'+ i +'">'+ avConfig[i].title +'</div>'
        };
        
        var avModalhtml = '<div id="avOverlay" class="av-modal">'+
                    '<div class="av-modal-background avClose"></div>'+
                    '<div style="z-index: 9999;">'+
                    '<div class="av-modal-content">'+
                    '<div class="av-modal-close avClose">&#10005;</div>'+
                    '<div class="av-modal-hcontainer"><div class="av-modal-hside">'+
                    '<div class="av-wrapper modalFade"><img src="/REPSuite/static/images/home/brand.jpg" alt="AVON">'+
                    '<h2 class="tbl_header_big">Bienvenida</h2><h2 class="tbl_header_big" id="avModalName"></h2></div>'+
                    '<div class="av-wrapper av-modal-hbuttons"><p class="sub_heading" style="margin-bottom:14px;">Tenemos noticias para ti:</p>' + avPrinter +
                    '<a class="av-button-secondary" id="#modalPnO" href="/REPSuite/PlaceAnOrder.page" target="_top">Coloca tu orden</a>'+
                    '</div></div>'+
                    '<div class="av-modal-himage"><a id="avLinkModal" target="'+ avConfig[0].target +'" href="'+ avConfig[0].link +'" >'+
                    '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a></div>'+
                    '</div></div></div></div>';
                    
                    
        if (sessionStorage.getItem("homeModalClosed") != "true") {
            var avContainer = document.createElement('div');
            avContainer.innerHTML = avModalhtml;
            var avTarget = parent.document.querySelector('body');
            avTarget.parentNode.insertBefore(avContainer,avTarget.nextSibling);
        };
    }

    if (avModalSwitch){

        let avModalNameGet = $('#avModalNameGet').text();
        console.log(avModalNameGet);
        parent.document.querySelector('#avModalName').textContent = avModalNameGet;
        $(".avClose, #modalPnO",parent.document).click(function(){
            $("#avOverlay",parent.document).hide();
            sessionStorage.setItem("homeModalClosed", "true");
        });
        $(".avModalButton",parent.document).eq(0).addClass('active')
        $(".avModalButton",parent.document).click(function () {
            let avData = $(this).attr('av-data');
            $(this).addClass('active').siblings().removeClass('active');
            $('#avImageModal',parent.document).attr('style', 'background-image:url(\'/REPSuite/static/images/home/'+ avConfig[avData].img+'\');')
            $('#avLinkModal',parent.document).attr('href', avConfig[avData].link).attr('target',avConfig[avData].target);
        });    
    
    }
});