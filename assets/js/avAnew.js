$(document).ready(function(){
    var screenWidth;
    let x = 360
    let once = true;
    $('.av-move-right').click(function(){
        screenWidth = window.innerWidth;
        if (screenWidth > '600') {
            $('.av-anew-marker').css('transform','translateX(-'+ ('950' - screenWidth) +'px)');
            $(this).hide().next().show();
        } else {
            if (once){
                $('.av-anew-marker').css('transform','translateX(-250px)');
                once = false;
            } else {
                $('.av-anew-marker').css('transform','translateX(-'+ ('950' - screenWidth) +'px)');
                $(this).hide().next().show();
                once = true;
            }
            
        }
    });
    $('.av-move-left').click(function(){
        screenWidth = window.innerWidth;
        if (screenWidth > '600') {
            $('.av-anew-marker').css('transform','translateX(0px)')
            $(this).hide().prev().show();
        } else {
            if (once){
                $('.av-anew-marker').css('transform','translateX(-250px)');
                once = false;
            } else {
                $('.av-anew-marker').css('transform','translateX(0px)');
                $(this).hide().prev().show();
                once = true;
            }
            
        }
    });

    $(window).resize(function(){
        screenWidth = window.innerWidth;
        var itemsContentWidth = $('.av-anew-items').width();
        if (itemsContentWidth > '900'){
            $('.av-move-right,.av-move-left').hide();
        } else {
            $('.av-move-right,.av-move-left').show();
        }
        $('.av-anew-marker').css('transform','translateX(0px)')
        $('.av-move-left').hide();
    });
    $('body').append(avFooterInsert);

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
    $('.avMenuAnew').children().click(function(){
        let avvalue = $(this).attr('value');
        let selector = $('section').eq(avvalue)

        selector.siblings('section').hide();
        $(window).scrollTop(0);
        selector.show();
        $(this).addClass('active').siblings().removeClass('active');

        $('.avMenu').removeClass('active');
        
        
    });
    $('.avMoreSection').click(function(){
        $('.av-anew-more').hide('slow');
        $('.avMoreSection').css("opacity","1");
        $(this).css("opacity","0");
        $(this).parent().parent().next('.av-anew-more').show('slow');
    });
});
const avFooterInsert = '<footer class="av-footer">'+
                                '<div class="row">'+
                                    '<div class="col-auto mx-auto"><svg width="154.2px" height="30px" fill="#fff"><use xlink:href="#brand"></use></svg></div>'+
                                    '<div class="av-spacer"></div><div class="w-100"></div>'+
                                    '<div class="col">'+
                                        '<div class="d-flex flex-column flex-sm-row justify-content-around w-100 flex-wrap">'+
                                            '<a target="_self" href="./conoceavon.html" >Nuestros productos</a>'+
                                            '<a target="_self" href="./conoceavon-unete.html">Únete a Avon</a>'+
                                            '<a target="_self" href="./conoceavon-empresarias.html">Sé una empresaria</a>'+
                                            '<a target="_self" href="https://www.avon.mx/avon-mx/">Inicio</a>'+
                                            '<a target="_self" href="https://tienda.mercadolibre.com.mx/avon">Tienda en línea</a>'+
                                        '</div>'+
                                        '<div class="av-spacer"></div>'+
                                        '<div class="w-100">'+
                                            '<h4 style="text-align: center;">2021, Avon Products Inc</h4>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</footer>';
