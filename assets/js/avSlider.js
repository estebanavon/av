$(document).ready(function(){


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
        $('.avDataDots').children().eq(showSlide).removeClass().addClass('active').siblings().removeClass();
        timeOut = setTimeout(function(){avShowSlide(3,0,true);},5500);
        
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


