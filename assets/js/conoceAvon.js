$(document).ready(function(){
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
        $("#brandHeader").children().eq(0).attr("xlink:href","#brand");
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
            $("#brandHeader").children().eq(0).attr("xlink:href","#brand");
        } else {
            $(".av-header").removeClass("av-header-white");
            $("#brandHeader").children().eq(0).attr("xlink:href","#brandWhite");
        }
    });

    const avLoader = '<div class="av-loader">'+
            '<svg width="154.2px" height="35px">'+
                '<use xlink:href="#brandWhite"></use>'+
            '</svg>'+
            '<div class="w-25">'+
                '<div class="avLoader">'+
                '<div class="avLoaderBar"></div>'+
            '</div></div></div>';

    const avFooterInsert = '<footer class="av-footer">'+
                                '<div class="row">'+
                                    '<div class="col-auto mx-auto"><svg width="154.2px" height="35px" fill="#fff"><use xlink:href="#brandWhite"></use></svg></div>'+
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
    if (sessionStorage.getItem("loaderOnce") != 'true') {
        $('body').append(avLoader).css('overflow-y','hidden');
    }
    setTimeout(function(){ 
        $('.av-loader').addClass('loaderFadeOut');
        sessionStorage.setItem('loaderOnce', 'true');
     }, 5000);
    setTimeout(function(){ 
        $('body').css('overflow-y','auto');
        $('.av-loader').remove();
     }, 5900);
    $('header').css('opacity','0');

});