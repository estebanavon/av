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
            '<div class="av-modal-background avClose" onclick="avClose()"></div>'+
            '<div style="z-index: 9999;">'+
            '<div class="av-modal-content">'+
            '<div class="av-modal-close avClose" onclick="avClose()">&#10005;</div>'+
            '<div class="av-modal-hcontainer"><div class="av-modal-hside">'+
            '<div class="av-wrapper modalFade"><img src="/REPSuite/static/images/home/brand.jpg" alt="AVON">'+
            '<h2 class="av-title">Bienvenida</h2><h2 class="av-title" id="avModalName"></h2></div>'+
            '<div class="av-wrapper av-modal-hbuttons"><p class="av-text">Tenemos noticias para ti:</p>'+ avPrinter +
            '<a class="av-button-secondary" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a></div></div>'+
            '<div class="av-modal-himage"><a id="avLinkModal" target="_top" href="'+ avConfig[0].link +'" >'+
            '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a>'+
            '</div></div></div></div></div>';
                
if (sessionStorage.getItem("homeModalClosed") != "true") {
    $('body').append(avModalhtml);
};

$(document).ready(function(){
    let avModalNameGet = $('#avModalNameGet').text();
    $('#avModalName').text(avModalNameGet);
    $(".avModalButton").click(function () {
        let avData = $(this).attr('av-data');
        $(this).addClass('active').siblings().removeClass('active');
        $('#avImageModal').attr('style', 'background-image:url(\'/REPSuite/static/images/home/'+ avConfig[avData].img+'\');')
        $('#avLinkModal').attr('href', avConfig[avData].link)
    });
    $(".avClose").click(function () {
        $('#avOverlay').hide();
        sessionStorage.setItem("homeModalClosed", "true");
    });
    $(".avClose").click(function () {
        $('#avOverlay').hide();
        sessionStorage.setItem("homeModalClosed", "true");
    });
    let avMoreTitle,avMore;
    $('.avMore-open').click(function(){
        avMoreTitle = $(this).attr('av-data');
        avMore = $(this).attr('av-more');
        $('#avMoreId').addClass('active');
        $('#avMore-title').text(avMoreTitle);
        $('.avMore-'+ avMore).show(function(){
            $(this).siblings().hide();
        });
    });
    
    $('.avMore-close').click(function(){
        $('#avMoreId').removeClass('active');
    });
});
