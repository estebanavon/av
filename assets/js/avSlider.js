$(document).ready(function(){


    var showSlide = 2;
    var timeOut;

    avShowSlide(2,0,true);
    

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

});


