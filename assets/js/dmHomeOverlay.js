
const avModalSwitch = true;

const avFreshConfig = [
    
    {
        link:'/REPSuite/interfaz.page',
        img: 'avModalTest1.jpg',
        title: 'Nueva interfaz'
    },
];







if (avModalSwitch){
    var avPrinter,avConfig,loaCheck;
    avPrinter = ['']
    avConfig = avFreshConfig;
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
                '<h2 class="tbl_header_big">Bienvenida(o)</h2></h2></div>'+
                '<div class="av-wrapper av-modal-hbuttons"><p class="sub_heading">Tenemos noticias para ti:</p><br />'+ avPrinter +
                '<a class="av-button-secondary" id="#modalPnO" href="/REPSuite/PlaceAnOrder.page" target="_top">Colocar una orden</a></div></div>'+
                '<div class="av-modal-himage"><a id="avLinkModal" target="_top" href="'+ avConfig[0].link +'" >'+
                '<div id="avImageModal" style="background-image:url(\'/REPSuite/static/images/home/'+ avConfig[0].img +'\');" class="av-modal-himg"></div></a>'+
                '</div></div></div></div></div>';
                
                
                if (sessionStorage.getItem("homeModalClosed") != "true") {
                    $('body').append(avModalhtml);
                };
}


$(document).ready(function(){
    if (avModalSwitch){
        
        $(".avClose, #modalPnO").click(function(){
            $("#avOverlay").hide();
            sessionStorage.setItem("homeModalClosed", "true");
        });
        $(".avModalButton").eq(0).addClass('active')
        $(".avModalButton").click(function () {
            let avData = $(this).attr('av-data');
            $(this).addClass('active').siblings().removeClass('active');
            $('#avImageModal').attr('style', 'background-image:url(\'/REPSuite/static/images/home/'+ avConfig[avData].img+'\');')
            $('#avLinkModal').attr('href', avConfig[avData].link)
        });    
    
    }
});