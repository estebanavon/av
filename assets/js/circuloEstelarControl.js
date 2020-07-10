$(document).ready(function(){

    $('.optionControl h4').each(function(){
        $(this).click(function(){
            const valueOption = $(this).attr('value');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $('.optionDisplay').children().removeClass('active');
            $('.optionDisplay').children().eq(valueOption).addClass('active');
        });
    })

});