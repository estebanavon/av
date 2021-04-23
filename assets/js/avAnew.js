$(document).ready(function(){
    var screenWidth;
    let once = true;
    $('.av-anew-items .avMove').click(function(){
        screenWidth = window.innerWidth;
        let avDirection = $(this).attr('av-value');
        if (screenWidth > '600') {
            if (avDirection == "right"){
                $('.av-anew-marker').css('transform','translateX(-'+ ('900' - screenWidth) +'px)');
                $(this).hide().next().show();
            } else {
                $('.av-anew-marker').css('transform','translateX(0px)')
                $(this).hide().prev().show();
            }
            
        } else {
            if (once){
                $('.av-anew-marker').css('transform','translateX(-250px)');
                once = false;
            } else {
                if (avDirection == "right"){
                    $('.av-anew-marker').css('transform','translateX(-'+ ('900' - screenWidth) +'px)');
                    $(this).hide().next().show();
                } else {
                    $('.av-anew-marker').css('transform','translateX(0px)')
                    $(this).hide().prev().show();
                }
                once = true;
            }
        }
    });
    
    $('.av-anew-trio .avMove').click(function(){
        screenWidth = window.innerWidth;
        let avDirection = $(this).attr('av-value');
        if (avDirection == "right"){
            if (screenWidth < '500') {
                if (once){
                    $(this).parent().children('.av-col').css('transform','translateX(-250px)');
                    $(this).next().show();
                    once = false;
                } else {
                    $(this).parent().children('.av-col').css('transform','translateX(-'+ ('850' - screenWidth) +'px)');
                    $(this).hide()
                    once = true;
                }
            } else {
                $(this).parent().children('.av-col').css('transform','translateX(-'+ ('850' - screenWidth) +'px)');
                $(this).hide().next().show();
            }
            
            
        } else {
            $(this).parent().children('.av-col').css('transform','translateX(0px)');
            $(this).hide().prev().show();
            once = true;
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
        $('.av-anew-trio').children('.av-col').css('transform','translateX(0px)')
        $('.av-move-left').hide();
        once = true;
    });
    $('body').append(avFooterInsert);

    $('#avMenuButton').click(function(){
        $('.avMenu').addClass('active');
        $('#avMenuClose').addClass('active');
        $(this).removeClass('active');
    });
    $('#avMenuClose').click(function(){
        $('.avMenu').removeClass('active');
        $('#avMenuButton').addClass('active');
        $(this).removeClass('active');
    });

    $('.avMenuAnew').children().click(function(){
        let avvalue = $(this).attr('value');
        let selector = $('section').eq(avvalue)
        $('.av-anew-transition').css({
            'height':'100%',
            'opacity':'1',
        });
        
        setTimeout( function() {
            selector.siblings('section').hide();
            selector.show();
            $(window).scrollTop(0);
       }, 1000);
        setTimeout( function() {
            $('.av-anew-transition').css('opacity','0');
       }, 1800);
        setTimeout( function() {
            $('.av-anew-transition').removeAttr('style');
       }, 2800);
        
        $(this).addClass('active').siblings().removeClass('active');
        $('.avMenu').removeClass('active');
        $('#avMenuClose').removeClass('active').prev().addClass('active');
        
        
    });
    $('.avMoreSection').click(function(){
        $('.av-anew-more').hide('slow');
        $('.avMoreSection').css("opacity","1");
        $(this).css("opacity","0");
        $(this).parent().parent().next('.av-anew-more').show('slow');
    });
    $('.avMoreSectionSmall').click(function(){
        $(this).hide().prev().show('slow');
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
