$(document).ready(function(){ 
    var guideVar = false;
    const imgRoute = "/FLDSuite/static/images/liderazgo_web";
    //const imgRoute = "./../img";

    $(".av-section:not(.vendorLiks)").click(function(){
        let avdata = $(this).attr("data-av");
        let img = "url('"+ imgRoute +"/lw-"+ avdata +".jpg')"; 
        $(this).children(".av-section-select").removeClass("unable").siblings().addClass("unable");
        $(this).siblings(':not(.av-button-back)').hide();
        
        // Global DOM Manipulations
        $(".av-section-container").addClass("expand").siblings().children().eq(0).css("backgroundImage",img);
        $(".av-button-back").addClass("unable");
        $(".av-recent").addClass('disable');
        $("#tooltipText, #guideStart").addClass('disable');

        // Documents append
        if (once[avdata]==="true"){
            let avArrayPrint = "";
            avArrayPrint += '<ol class="av-list av-list-item"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[avdata] +'</ol>'
            
            $(this).find('.av-list-content').append(avArrayPrint);
        } 
        once[avdata] = "false";
        
    });
    $(".av-button-back").click(function(){
        let img = "url('"+ imgRoute +"/lw-i.jpg')"; 
        $(".av-section-select").addClass("unable");
        $(".av-list-content").removeClass("unable");
        $(".av-recent").removeClass('disable');
        $(this).siblings().show();

        // Global DOM Manipulations
        $(".av-section-container").removeClass("expand").siblings().children().eq(0).css("backgroundImage",img);
        $("#tooltipText, #guideStart").removeClass('disable');
        $(this).removeClass("unable");
        
        if (guideVar){
            $('#guideC').hide().remove();
            guideVar = false;
        }
    });
    $('.av-section-select.unable').mouseenter(function(){
        let avdata = $(this).parent().attr("data-av");
        let hoverIndex;
        switch (avdata){
            case "0":
            case "1":
            case "2":
                hoverIndex = 1;
            break;
            case "3":
            case "4":
            case "5":
                hoverIndex = 2;
            break;
            case "6":
                hoverIndex = 5;
            break;
            case "7":
                hoverIndex = 3;
            break;
            case "8":
                hoverIndex = 4;
            break;
            case "9":
                hoverIndex = 5;
            break;
            default: 
                hoverIndex = 0;
        }
        $('#tooltipText').children('.active').removeClass('active');
        $('#tooltipText').children().eq(hoverIndex).addClass('active');
    });

    $('.av-section').mouseleave(function(){
        $('#tooltipText').children('.active').removeClass('active');
        $('#tooltipText').children().eq(0).addClass('active');
    });
    
    
    
    $('#guideStart').click(function(){
        guideVar = true;
        $('#guide1').append('<div id="guideA" class="av-guide"><p>01/03</p><h4>Selecciona alguna opción de tu menú</h4></div>');
        $('#guideA').show('slow');
        $(this).hide();
    });

    $('.av-section-select').click(function(){
        if (guideVar){
            $(this).append('<div id="guideB" class="av-guide"><p>02/03</p><h4>Previsualiza o descarga tu archivo con estas opciones</h4></div>');
            $('#guideB').show('slow');
            $('#guideA').hide().remove();
            $('.av-button-back').hide();
        }
    });
    $('.av-list-content').click(function(){
        if (guideVar){
            $(this).append('<div id="guideC" class="av-guide"><p>03/03</p><h4>¡Listo! Regresa al menú principal.</h4><h4>!Así de sencillo!</h4></div>');
            $('#guideC').show('slow');
            $('#guideB').hide().remove();
            $('.av-button-back').show();
        }
    });

});