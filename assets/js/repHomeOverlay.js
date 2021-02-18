
let link1 = '/REPSuite/circulo_estelar.page';
let modalImg1 = '/REPSuite/static/images/home/avModalTest1.jpg';
let titulo1 = 'Nueva interfaz';

let link2 = '/REPSuite/circulo_estelar2.page';
let modalImg2 = '/REPSuite/static/images/home/avModalTest2.jpg';
let titulo2 = 'Danos tu opinión';

var avModalhtml = '<div id="avOverlay" class="av-modal">'+
            '<div class="av-modal-background avClose" onclick="avClose()"></div>'+
            '<div style="z-index: 9999;">'+
            '<div class="av-modal-content">'+
            '<div class="av-modal-close avClose" onclick="avClose()">&#10005;</div>'+
            '<div class="av-modal-hcontainer"><div class="av-modal-hside">'+
            '<div class="av-wrapper modalFade"><svg width="110px" height="32px"><use xlink:href="#avon"></use></svg>'+
            '<h2 class="av-title">Bienvenida</h2><h2 class="av-title" id="avModalName"></h2></div>'+
            '<div class="av-wrapper av-modal-hbuttons"><p class="av-text">Tenemos noticias para ti:</p>'+
            '<div class="avModalButton active" av-data="1">'+ titulo1 +'</div><div class="avModalButton" av-data="2">'+ titulo2 +'</div>'+
            '<a class="av-button-secondary" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a></div></div>'+
            '<div class="av-modal-himage"><a id="avLinkModal" target="_top" href="'+ link1 +'" >'+
            '<div id="avImageModal" style="background-image:url(\''+ modalImg1 +'\');" class="av-modal-himg"></div></a>'+
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
        switch (avData) {
            case '1':
            $('#avImageModal').attr('style', 'background-image:url(\''+ modalImg1+'\');')
            $('#avLinkModal').attr('href', link1)
                break;
            case '2':
            $('#avImageModal').attr('style', 'background-image:url(\''+ modalImg2+'\');');
            $('#avLinkModal').attr('href', link2);
                break;
                default:
                $('#avImageModal').attr('src', modalImg1)
                $('#avLinkModal').attr('href', link1)
        }
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
