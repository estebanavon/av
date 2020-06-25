$(document).ready(function(){

    const transtionSpeed = 900 ;
    var guideVar = false;

    $(".av-section").click(function(){
        let avdata =$(this).attr("avdata");
        let img = "url('./../img/lw-"+ avdata +".jpg')"; 
        $(this).children(".av-section-select").removeClass("unable").siblings().addClass("unable");
        $(this).siblings(':not(.av-button-back)').hide(transtionSpeed);
        
        // Global DOM Manipulations
        $(".av-section-container").addClass("expand").siblings().children().eq(0).css("backgroundImage",img);
        $(".av-button-back").addClass("unable");
        $('#guideStart').hide();

        // Documents append
        if (once[avdata]==="true"){
            if(avdata < 7){
                let avArrayPrint = "";
                avArrayPrint += '<ol class="av-list av-list-doc"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[avdata] +'</ol>'
                
                $(this).find('.av-doc-container').append(avArrayPrint);
             } else if (avdata == 7){
                let avArrayPrint = "";
                avArrayPrint += '<ol class="av-list av-list-doc"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[7] +'</ol>'+
                '<ol class="av-list av-list-doc noactive"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[8] +'</ol>';
                $(this).find('.av-doc-container').append(avArrayPrint);
             } else if (avdata == 8) {
                let avArrayPrint = "";
                avArrayPrint += '<ol class="av-list av-list-doc"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[9] +'</ol>'+
                '<ol class="av-list av-list-doc noactive"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[10] +'</ol>';
                $(this).find('.av-doc-container').append(avArrayPrint);
             }
        } 
        once[avdata] = "false";
        
    });
    $(".av-button-back").click(function(){
        let img = "url('./../img/lw-i.jpg')"; 
        $(".av-section-select").addClass("unable");
        $(".av-doc-container").removeClass("unable");
        $(this).siblings().show(transtionSpeed - 500);

        // Global DOM Manipulations
        $(".av-section-container").removeClass("expand").siblings().children().eq(0).css("backgroundImage",img);
        $(this).removeClass("unable");
        $('#guideStart').show();
        if (guideVar){
            $('#guideC').hide().remove();
            $('#guideStart').show('slow');
            guideVar = false;
        }
    });
    
    $('.av-tabs').children().click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.noactive').removeClass('noactive').siblings().addClass('noactive');
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
    $('.av-doc-container').click(function(){
        if (guideVar){
            $(this).append('<div id="guideC" class="av-guide"><p>03/03</p><h4>¡Listo! Regresa al menú principal.</h4><h4>!Así de sencillo!</h4></div>');
            $('#guideC').show('slow');
            $('#guideB').hide().remove();
            $('.av-button-back').show();
        }
    });

});