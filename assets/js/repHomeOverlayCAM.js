
const avModalSwitch = true;

const avFreshConfig = [
    
    {
        link:'/REPSuite/interfaz.page',
        img: 'avModalTest1.jpg',
        title: 'Nueva interfaz'
    },
    {
        link: '/REPSuite/Aprende.page',
        img: 'avModalTest2.jpg',
        title: 'Aprende Tu espacio Avon'
    },
];
const avOlderConfig = [
    {
        link: '/REPSuite/interfaz.page',
        img: 'avModalTest1.jpg',
        title: 'Nueva interfaz'
    },
    {
        link: '/REPSuite/Encuesta.page',
        img: 'avModalTest2.jpg',
        title: 'Encuesta'
    },
];






if (avModalSwitch){
    var avPrinter,avConfig,loaCheck;
    avPrinter = ['']
    //var loaCheck = AvonAnalyticsObjex.Profile.loa;
    var loaCheck = 9;
    if (loaCheck < 7){
        avConfig = avFreshConfig;
    } else {
        avConfig = avOlderConfig;  
    }
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
                '<div class="av-wrapper av-modal-hbuttons"><p class="sub_heading">Tenemos noticias para ti:</p>'+ avPrinter +
                '<a class="av-button-secondary" id="#modalPnO" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a></div></div>'+
                '<div class="av-modal-himage"><a id="avLinkModal" target="_top" href="'+ avConfig[0].link +'" >'+
                '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a>'+
                '</div></div></div></div></div>';
                
                
    if (sessionStorage.getItem("homeModalClosed") != "true") {
        var avContainer = document.createElement('div');
        avContainer.innerHTML = avModalhtml;
        var avTarget = parent.document.querySelector('body');
        avTarget.parentNode.insertBefore(avContainer,avTarget.nextSibling);
    };
}


$(document).ready(function(){
    if (avModalSwitch){
        
        let avModalNameGet = $('#avModalNameGet').text();
        parent.document.querySelector('#avModalName').textContent = avModalNameGet;
        $(".avClose, #modalPnO",parent.document).click(function(){
            $("#avOverlay",parent.document).hide();
            sessionStorage.setItem("homeModalClosed", "true");
        });
        $(".avModalButton",parent.document).click(function () {
            let avData = $(this).attr('av-data');
            $(this).addClass('active').siblings().removeClass('active');
            $('#avImageModal',parent.document).attr('style', 'background-image:url(\'/REPSuite/static/images/home/'+ avConfig[avData].img+'\');')
            $('#avLinkModal',parent.document).attr('href', avConfig[avData].link)
        });    
    
    }
});