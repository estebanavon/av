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
    var screenWidth;
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
    $('.avMoveMask').click(function(){
        
        $(this).parent().parent().children().eq(2).css({
            "visibility":"hidden",
            "opacity":"0",
        });
        setTimeout( function() {
            $('.avMoveMask').parent().parent().children().eq(5).css({
                "position":"static",
                "opacity":"1",
            });
            $('.avMoveMask').parent().parent().children().eq(2).css({
                "position":"absolute",
            });
       }, 500);
        $(this).hide();
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


    function avAnewTransition(avvalue){
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
    }



    $('.scrollTo').click(function(){
        let avvalue = $(this).attr('value');
        var elmnt = document.getElementById(avvalue);
        elmnt.scrollIntoView();

    });




    
    $('.avMenuAnew').children().click(function(){

        let avvalue = $(this).attr('value');
        avAnewTransition(avvalue);

        $(this).addClass('active').siblings().removeClass('active');
        $('.avMenu').removeClass('active');
        $('#avMenuClose').removeClass('active').prev().addClass('active');
    });
    




    $('.avAnewAgeAllLink').click(function(){
        avAnewTransition(3);
        $('.avMenuAnew').children().eq(3).addClass('active').siblings().removeClass('active');
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


    var showSlide = 3;
    var timeOut;

    avShowSlide(3,0,true);
    

    function avShowSlide(end,start,forwardOrBackward){ 
        let avSlide,showSlide2;
        if (showSlide == end){
            showSlide = start;
            showSlide2 = end
        } else {
            showSlide2 = showSlide;
            if(forwardOrBackward){
                showSlide++;
            } else {
                showSlide--;
            };
        }
        if(forwardOrBackward){
            avSlide = 'active'
        } else {
            avSlide = 'active back'
        }
        $('.avData').each(function(){
            $(this).children().eq(showSlide).addClass(avSlide).siblings().removeClass('active back');
            $(this).children().eq(showSlide2).addClass("lastOne").siblings().removeClass('lastOne');
        })
        var avAnewDays = [
            {
                percentage: '86%',
                data: 'De las mujeres notó una disminución en las líneas de expresión.',
            },
            {
                percentage: '92%',
                data: 'De las mujeres notó su piel más firme.',
            },
            {
                percentage: '92%',
                data: 'De las mujeres vio su piel dramáticamente más suave.',
            },
           
            {
                percentage: '96%',
                data: 'De las mujeres notó su piel más radiante.',
            },
           
        ]
        $('#avThickboxLoader').removeClass().addClass('av'+ showSlide);
        $('#avAnewPercentage').children().eq(0).text(avAnewDays[showSlide].percentage).next().text(avAnewDays[showSlide].data);
        $('.avDataDots').children().eq(showSlide).removeClass().addClass('active').siblings().removeClass();
        
        timeOut = setTimeout(function(){avShowSlide(3,0,true);},3500);
    }

    $("#avDataFw").click(function(){
        clearTimeout(timeOut);
        avShowSlide(3,0,true);
    });
    $("#avDataBk").click(function(){
        clearTimeout(timeOut);
        avShowSlide(0,3,false);
    });
});
