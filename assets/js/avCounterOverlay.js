
$(document).ready(function(){


    const avModalSwitch = true;
    const avMarket = AvonAnalyticsObjex.Visitor.market;
    
    const avFreshConfig = [
        {
            link: '/REPSuite/interfaz.page',
            img: 'avModalTest1.jpg',
            title: 'Nueva interfaz'
        },
    ];
    const avOlderConfig = [
        {
            link: '/REPSuite/interfaz.page',
            img: 'avModalTest1.jpg',
            title: 'Nueva interfaz'
        },
    ];
    
    
    function market(avMarket) {
        var role;
        if (avMarket == 'PA'){
            role = 'consejera';
        } else {
            role = 'representante'
        }
        return role;
    }


    if (avModalSwitch) {
        var avPrinter, avConfig, loaCheck;
        avPrinter = ['']
        //var loaCheck = AvonAnalyticsObjex.Profile.loa;
        var loaCheck = 9;
        if (loaCheck < 7) {
            avConfig = avFreshConfig;
        } else {
            avConfig = avOlderConfig;
        }
        for (i = 0; i < avConfig.length; i++) {
            avPrinter += '<div class="avModalButton" av-data="' + i + '">' + avConfig[i].title + '</div>'
        };

        var avModalhtml = '<div id="avOverlay" class="av-modal">' +
            '<div class="av-modal-background avClose"></div>' +
            '<div style="z-index: 9999;">' +
            '<div class="av-modal-content">' +
            '<div class="av-modal-close avClose">&#10005;</div>' +
            '<div class="av-modal-hcontainer"><div class="av-modal-hside">' +
            '<div class="av-wrapper modalFade"><img src="/REPSuite/static/images/home/brand.jpg" alt="AVON">' +
            '<h2 class="tbl_header_big">Bienvenida</h2><h2 class="tbl_header_big" id="avModalName"></h2></div>' +
            '<div class="av-wrapper av-modal-hbuttons">' +
            //+ avPrinter +
            //'<a class="av-button-secondary" id="#modalPnO" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a>'
            '</div></div>' +
            // '<div class="av-modal-himage"><a id="avLinkModal" target="_top" href="'+ avConfig[0].link +'" >'+
            // '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a></div>'+
            '</div></div></div></div>';


        if (sessionStorage.getItem("homeModalClosed") != "true") {
            var avContainer = document.createElement('div');
            avContainer.innerHTML = avModalhtml;
            var avTarget = parent.document.querySelector('body');
            avTarget.parentNode.insertBefore(avContainer, avTarget.nextSibling);
        };
    }


    $(document).ready(function () {
        if (avModalSwitch) {

            let avModalNameGet = $('#avModalNameGet').text();
            parent.document.querySelector('#avModalName').textContent = avModalNameGet;
            $(".avClose, #modalPnO", parent.document).click(function () {
                $("#avOverlay", parent.document).hide();
                sessionStorage.setItem("homeModalClosed", "true");
            });
            $(".avModalButton", parent.document).click(function () {
                let avData = $(this).attr('av-data');
                $(this).addClass('active').siblings().removeClass('active');
                $('#avImageModal', parent.document).attr('style', 'background-image:url(\'/REPSuite/static/images/home/' + avConfig[avData].img + '\');')
                $('#avLinkModal', parent.document).attr('href', avConfig[avData].link)
            });

        }
    });




    var avModalCountdowm = '<div id="avCounter" style="width: 470px;padding: 20px;background-image: linear-gradient(to right, #9113B0, #C1047E, #E23679);text-align: center;">' +
        '<div style="background-color: #fff; border-radius: 0px 0px 100px 0px;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">' +
        '<img src="https://www.mx.avon.com/REPSuite/static/images/home/toda_latino.jpg" /><h1 style="font-weight: 900;font-family: Zona Pro;color: #1a8282;font-size: 18px;text-align: center;letter-spacing: 0.125rem;text-transform: uppercase;" id="headline">Faltan solo:</h1>' +
        '<div id="countdown" style="width: 100%; padding:0px 30px;box-sizing: border-box;">' +
        '<div style="display: flex; justify-content: space-between;text-transform: uppercase;margin-top:40px;font-family:montserrat-bold,\'Arial Black\',Gadget,sans-serif;">' +
        '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="avdays"></p><p>Days</p></div>' +
        '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="avhours"></p><p>Hours</p></div>' +
        '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="avminutes"></p><p>Minutes</p></div>' +
        '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="avseconds"></p><p>Seconds</p></div>' +
        '</div></div>' +
        '<div id="content" style="display: none; font-size: 4rem;">' +
        '<p style="font-weight: 900;font-family: Zona Pro;color: #1a8282;font-size: 18px;text-align: center;letter-spacing: 0.125rem;text-transform: uppercase;">' +
        'Disfruta de las increíbles sorpresas que tenemos para tí. Porque te mereces todo esto y mucho más.</p>' +
        '<span>🥳</span><span>🎉</span><span>🎂</span>' +
        '</div><img style="margin-top:10px;" src="https://www.mx.avon.com/REPSuite/static/images/home/encuentro_virtual.jpg" /></div></div>';

    if (sessionStorage.getItem("homeModalClosed") != "true") {
        $('.av-modal-hcontainer', parent.document).append(avModalCountdowm);
        $('.av-modal-hbuttons', parent.document).prepend(
            '<p style="margin-bottom:10px; font-family:montserrat-regular, Arial,Gadget,sans-serif;" class="av-text">'+
            'Tenemos noticias para ti:</p><div class="avModalButton active" av-data="10">Día de la '+ market(avMarket) +'</div>');

    };
    if (avModalSwitch) {
        (function () {
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
        
            let theday = "Jun 04, 2021 17:00:00",
                countDown = new Date(theday).getTime(),
                x = setInterval(function () {
        
                    let now = new Date().getTime(),
                        distance = countDown - now;
        
                    parent.document.querySelector("#avdays").innerText = Math.floor(distance / (day)),
                        parent.document.querySelector("#avhours").innerText = Math.floor((distance % (day)) / (hour)),
                        parent.document.querySelector("#avminutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        parent.document.querySelector("#avseconds").innerText = Math.floor((distance % (minute)) / second);
        
                    //do something later when date is reached
                    if (distance < 0) {
                        let headline = parent.document.querySelector("#headline"),
                            countdown = parent.document.querySelector("#countdown"),
                            content = parent.document.querySelector("#content");
        
                        headline.innerText = "¡El día de la representante está aquí!";
                        countdown.style.display = "none";
                        content.style.display = "block";
        
                        clearInterval(x);
                    }
                    //seconds
                }, 0)
        }());
    }
});