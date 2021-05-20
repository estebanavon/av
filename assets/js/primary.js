$(document).ready(function(){
    
    $(window).scroll(function(){
        const scrollPosition = $(document).scrollTop(); 
       if(scrollPosition > 150){
            $(".av-title-container").css("backgroundPosition","left top");
       } else {
        $(".av-title-container").css("backgroundPosition","center");
       }
    });
    $('.avPanel').click(function(){
        $(this).next().toggleClass('active');
        $(this).find('i').toggleClass('active');
    });


    var indexTest = 0;
    var lastScrollTop = 0, delta = 20;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        
        if(Math.abs(lastScrollTop - st) <= delta)
        return;
        
        if (st > lastScrollTop){
            $('.steper').children().eq(1).children().eq(indexTest).addClass('d-fade').siblings().removeClass('d-fade');
            indexTest ++ ;
            console.log('scroll down');
        } else {
            $('.steper').children().eq(1).find('.d-fade').prev().addClass('d-fade').siblings().removeClass('d-fade');
            indexTest --; 
            console.log('scroll up');
        }
        lastScrollTop = st;
    });


});