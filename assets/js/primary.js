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
});