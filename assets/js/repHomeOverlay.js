
// Image route:  "/REPSuite/static/images/home/"
// Content for new REPs LOA < 7
const avFreshConfig = [
    
    {
        link:'/REPSuite/interfaz.page',
        img: 'overlayBienvenida.jpg',
        title: 'Tu nuevo catalgo'
    },
    {
        link: '/REPSuite/Aprende.page',
        img: 'overlayBienvenida2.jpg',
        title: 'Tu opinión vale'
    },
];

// Only one working at the moment
// Content for older REPs LOA >= 7
const avOlderConfig = [
    {
        link:'/REPSuite/vendorLinksOne.page?linkid=42',
        img: 'overlayBienvenida.jpg',
        title: 'Tu nuevo catálogo'
    },
    {
        link: 'https://c5afw467.caspio.com/dp/c022600001822daaa18543e3a224',
        img: 'overlayBienvenida2.jpg',
        title: 'Tu opinión nos interesa'
    },
];

// NCM PUSH
avNCMunshift(AvonAnalyticsObjex.Profile.repAcct);


var avPrinter,avConfig,loaCheck,avdownload;
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
            '<div class="av-modal-background avClose" onclick="avClose()"></div>'+
            '<div style="z-index: 9999;">'+
            '<div class="av-modal-content">'+
            '<div class="av-modal-close avClose" onclick="avClose()">&#10005;</div>'+
            '<div class="av-modal-hcontainer"><div class="av-modal-hside">'+
            '<div class="av-wrapper modalFade"><img src="/REPSuite/static/images/home/brand.jpg" alt="AVON">'+
            '<h2 class="av-title my-2">Bienvenida</h2><h2 class="av-title" id="avName"></h2></div>'+
            '<div class="av-wrapper av-modal-hbuttons"><p class="av-text">Tenemos noticias para ti:</p>'+ avPrinter +
            '<a class="av-button-secondary" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a></div></div>'+
            '<div class="av-modal-himage"><a id="avLinkModal" target="_blank" href="'+ avConfig[0].link +'" >'+
            '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a>'+
            '</div></div></div></div></div>';
                
if (sessionStorage.getItem("homeModalClosed") != "true") {
    $('body').append(avModalhtml);
};

$(document).ready(function(){
    let avName = $('#avNameGet').text();
    $('#avName').text(avName);
    $('.avModalButton').eq(0).addClass('active');
    $(".avModalButton").click(function () {
        let avData = $(this).attr('av-data');
        $(this).addClass('active').siblings().removeClass('active');
        $('#avImageModal').attr('style', 'background-image:url(\'/REPSuite/static/images/home/'+ avConfig[avData].img+'\');')
        $('#avLinkModal').attr('href', avConfig[avData].link)
        if (avdownload) {
            if (avData == 0 || avData == 1){
                $('#avLinkModal').attr('download', 'Notificación de Cambio AVON')
            }
        } else {
            $('#avLinkModal').removeAttr('download');
        }
    });
    if (avdownload) {
        $('#avLinkModal').attr('download', 'Notificación de Cambio AVON')
    }
    $(".avClose").click(function () {
        $('#avOverlay').hide();
        sessionStorage.setItem("homeModalClosed", "true");
    });
    
});
