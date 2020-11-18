$(document).ready(function(){

    var slideIndex = 2;
    var timeOut;

    avShowSlide(2,0,true);
    

    function avShowSlide(initial,initialSupport,forwardOrBackward){ 
        if (slideIndex == initial){
            slideIndex = initialSupport;
        } else {
            if(forwardOrBackward){
                slideIndex++;
            } else {
                slideIndex--;
            };
        }
        
        $('.avData').each(function(){
            $(this).children().eq(slideIndex).addClass("active").siblings().removeClass("active");
            $(this).children().eq(slideIndex - 1).addClass("lastOne").siblings().removeClass('lastOne');
        })
        
        timeOut = setTimeout(function(){avShowSlide(2,0,true);},5500);
    }

    $("#avDataFw").click(function(){
        clearTimeout(timeOut);
        avShowSlide(2,0,true);
    });
    $("#avDataBk").click(function(){
        clearTimeout(timeOut);
        avShowSlide(0,2,false);
    });
   

    bookFunction()
    function bookFunction(){
        $('.book-wrapper').find('.animationbook').removeClass('animationbook').siblings().addClass('animationbook');
        setTimeout(function(){
            $('.animationbook').css("zIndex","1").siblings().css("zIndex","0");
        },500);
        setTimeout(function(){bookFunction();},4000);
    }

    //  CONOCE AVON

    $('#avMenuButton').click(function(){
        $('.avMenu').addClass('active');
        $('.av-header').addClass("av-header-white");
        $('#avMenuClose').show();
        $(this).hide();
    });
    $('#avMenuClose').click(function(){
        $('.avMenu').removeClass('active');
        $('#avMenuButton').show();
        $(this).hide();
    });
    
    $(window).scroll(function(){
        let documentScroll = $(document).scrollTop();
        if (documentScroll > 500){
            $(".av-header").addClass("av-header-white");
        } else {
            $(".av-header").removeClass("av-header-white");
        }
    });
    
    const avFooterInsert = '<footer class="av-footer">'+
                                '<div class="row">'+
                                    '<div class="col-auto mx-auto"><svg width="154.2px" height="30px" fill="#fff"><use xlink:href="#brand"></use></svg></div>'+
                                    '<div class="av-spacer"></div><div class="w-100"></div>'+
                                    '<div class="col-12 col-md">'+
                                        '<ul class="av-list av-footer-list">'+
                                            '<li class="av-list-title">Acerca de AVON</li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/nuestra-compania.html">Nuestra Compañía</a></li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/venta-de-vehiculos-falsa.html">Avisos Importantes</a></li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/empleos.html">Empleos</a></li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/responsabilidad-social.html">Nuestras causas</a></li>'+
                                            '<li><a target="_self" href="http://www.amvd.org.mx/">Asociación Mexicana de Venta Directa</a></li>'+
                                            '<li><a target="_self" href="http://www.canipec.org.mx/woo/">Cámara Nacional de la Industria de Productos Cosméticos (CANIPEC)</a></li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/belleza-por-un-proposito.html">Belleza por un Propósito Avon, una compañía global</a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="col-12 col-md">'+
                                        '<ul class="av-list av-footer-list">'+
                                            '<li class="av-list-title">Cómo comprar</li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/findARep.html">Encuentra a tu representante</a></li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/catalogo-avon-movil.html">Catálogo AVON Móvil</a></li>'+
                                            '<li><a target="_self" href="https://tienda.mercadolibre.com.mx/avon">Tienda en línea</a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="col-12 col-md">'+
                                        '<ul class="av-list av-footer-list">'+
                                            '<li class="av-list-title">Políticas</li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/privacidad-y-seguridad.html">Aviso de Privacidad y Seguridad</a></li>'+
                                            '<li><a target="_self" href="https://www.avon.mx/avon-mx/terminos-y-condiciones.html">Términos y Condiciones</a></li>'+
                                            '<li><a target="_self" href="Código de Conducta">Código de Conducta</a></li>'+
                                            '<li><a target="_self" href="Cómo Pagar">Cómo Pagar</a></li>'+
                                            '<li><a target="_self" href="Contrato de Suministro Integral">Contrato de Suministro Integral</a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                    '<div class="w-100"></div><div class="av-spacer"></div>'+
                                    '<div class="col">'+
                                        '<div class="d-flex flex-column flex-sm-row justify-content-around w-100 flex-wrap">'+
                                            '<a target="_self" href="./conoceavon.html" >Nuestros productos</a>'+
                                            '<a target="_self" href="./conoceavon-unete.html">Únete a Avon</a>'+
                                            '<a target="_self" href="./conoceavon-empresarias.html">Sé una empresaria</a>'+
                                            '<a target="_self" href="https://www.avon.mx/avon-mx/">Inicio</a>'+
                                            '<a target="_self" href="https://tienda.mercadolibre.com.mx/avon">Tienda en línea</a>'+
                                            '<a target="_self" href="https://www.avon.mx/avon-mx/becomeARep.html" class="av-button-tertiary negative">Regístrate con nostros</a>'+
                                        '</div>'+
                                        '<div class="av-spacer"></div>'+
                                        '<div class="w-100">'+
                                            '<h4 style="text-align: center;">2020, Avon Products Inc</h4>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</footer>';
    $('body').append(avFooterInsert);
    $('header').css('opacity','0');
});


