$(document).ready(function(){ 
    var guideVar = false;
    var guideVar2 = false;
    var guideVar3 = false;
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
        $('.av-guide.last').hide().remove();
        
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
        guideVar3 = true;
        $('[data-av="0"]').append('<div class="av-guide 1"><p>01/03</p><h4>Selecciona alguna opción de tu menú</h4><br /><div class="av-button-tertiary">Siguiente</div></div>');
        $('.av-guide.1').show('slow').css({
            'top':'0%',
            'left':'-46%',
        });
        $(this).hide();
    });
    $('[data-av="0"]').click(function(){
        if (guideVar && guideVar3){
            $(this).append('<div class="av-guide 2"><p>02/03</p><h4>Previsualiza o descarga tu archivo con estas opciones</h4><br /><div class="av-button-tertiary">Siguiente</div></div>');
            $('.av-guide.2').show('slow').css({
                'top':'13%',
                'right':'26%',
            });
            $('.av-guide.1').hide().remove();
            $('.av-button-back').hide();
            guideVar3 = false
            guideVar2 = true
        } else if (guideVar && guideVar2){
            $(this).append('<div class="av-guide last"><p>03/03</p><h4>¡Listo! Regresa al menú principal.</h4><h4>!Así de sencillo!</h4><br /><div class="av-button-tertiary">Terminar</div></div>');
            $('.av-guide.last').show('slow').css({
                'top':'8%',
                'right':'68%',
            });
            $('.av-guide.2').hide().remove();
            $('.av-button-back').show();
            guideVar = false;
            guideVar3 = true;
        } else if (guideVar2 && guideVar3) {
            $('.av-guide.last').hide().remove();
            let img = "url('"+ imgRoute +"/lw-i.jpg')"; 
            $(".av-section-select").addClass("unable");
            $(".av-list-content").removeClass("unable");
            $(".av-recent").removeClass('disable');
            $(this).siblings().show();
            $(".av-section-container").removeClass("expand").siblings().children().eq(0).css("backgroundImage",img);
            $("#tooltipText, #guideStart").removeClass('disable');
            $(".av-button-back").removeClass("unable");
            guideVar2 = false;
            guideVar3 = false;
        }
    });
});