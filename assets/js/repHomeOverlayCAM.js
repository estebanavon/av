

const avFreshConfig = [
    
    {
        link:'/REPSuite/interfaz.page',
        img: 'avModalTest1.jpg',
        title: 'Fresh'
    },
];
const avOlderConfig = [
    {
        link: '/REPSuite/interfaz.page',
        img: 'avModalTest2.jpg',
        title: 'Older'
    },
];

var avConfig,loaCheck;
//var loaCheck = AvonAnalyticsObjex.Profile.loa;
var loaCheck = 9;
if (loaCheck < 7){
    avConfig = avFreshConfig;
} else {
    avConfig = avOlderConfig;  
}

var avModalhtml = '<div id="avOverlay" class="av-modal">'+
            '<div class="av-modal-background avClose" onclick="avClose()"></div>'+
            '<div style="z-index: 9999;">'+
            '<div class="av-modal-content">'+
            '<div class="av-modal-close avClose" onclick="avClose()">&#10005;</div>'+
            '<div class="av-modal-hcontainer"><div class="av-modal-hside">'+
            '<div class="av-wrapper modalFade"><img src="/REPSuite/static/images/home/brand.jpg" alt="AVON">'+
            '<h2 class="tbl_header_big">Bienvenida</h2><h2 class="av-title" id="avModalName"></h2></div>'+
            '<div class="av-wrapper av-modal-hbuttons"><p class="av-text">Tenemos noticias para ti:</p>'+ avConfig[0].title  +
            '<a class="av-button-secondary" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a></div></div>'+
            '<div class="av-modal-himage"><a id="avLinkModal" target="_top" href="'+ avConfig[0].link +'" >'+
            '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a>'+
            '</div></div></div></div></div>';
                
if (sessionStorage.getItem("homeModalClosed") != "true") {
    var avModalNameGet = document.querySelector('#avModalNameGet').textContent;
    console.log(avModalNameGet);
    document.querySelector('#avModalNameGet').textContent = avModalNameGet;
    
    var avContainer = document.createElement('div');
    avContainer.innerHTML = avModalhtml;
    var avTarget = parent.document.querySelector('body');
    avTarget.parentNode.insertBefore(avContainer,avTarget.nextSibling);
};

$(document).ready(function(){

    $('#avModalName').text(avModalNameGet);
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