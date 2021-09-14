$(document).ready(function(){ 
    var guideVar = false;
    var guideVar2 = false;
    var guideVar3 = false;
    const imgRoute = "/FLDSuite/static/images/liderazgo_web";
    //const imgRoute = "./../img";
  
    try {
      const avNCM = ['2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710'];
      const sectionHtml = '<div class="av-section-select sub unable"><p data-profile="SLSuite">Cen 4Q</p><span class="av-selection-spacer"></span><i class="material-icons av-lg-icons">keyboard_arrow_right</i></div><div class="av-list-content"></div>'
        if (avNCM.includes(AvonAnalyticsObjex.Profile.zone)) {} else {
          $('#cen4q').addClass('av-section').append(sectionHtml)
        }
      } catch {
        
      }
  
  
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
        } else if(guideVar2 && guideVar3) {
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