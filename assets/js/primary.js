$(document).ready(function(){
    
    $(window).scroll(function(){
        const scrollPosition = $(document).scrollTop(); 
       if(scrollPosition > 150){
            $(".av-title-container").css("backgroundPosition","left top");
       } else {
        $(".av-title-container").css("backgroundPosition","center");
       }
    });
    $('.av-controls').click(function(){
        let avPlaceHolder = $(this).find('label').text();
        $(this).find('input').focus().attr('placeholder', ''+avPlaceHolder+'').css('borderBottomColor','#7F28C4');
        $(this).find('.sc-formfield-label').addClass('activeLabel');
    });
    $('.section').prepend('<h3 class="av-form-title">Registro al concierto Avon</h3>');

});