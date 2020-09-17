$(document).ready(function(){

    var slideIndex = 2;
    var timeOut;
    avShowSlide(2,0,true);
    

    function avShowSlide(n,e,s){ 
        if (slideIndex == n){
            slideIndex = e;
        } else {
            if(s){
                slideIndex++;
            } else {
                slideIndex--;
            };
        }
        const avSelector = $('.avData').children();
        avSelector.eq(slideIndex).addClass("active").siblings().removeClass("active");
        timeOut = setTimeout(function(){avShowSlide(2,0,true);},6000);
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
            $('.animationbook').css("zIndex","5").siblings().css("zIndex","1");
        },500);
        setTimeout(function(){bookFunction();},5500);
    }
});


