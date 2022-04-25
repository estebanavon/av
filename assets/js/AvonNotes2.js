$(document).ready(function(){ 
    var vendorTrain,vendorGuide
    switch (suite) {
        case 'SLSuite':
            vendorTrain = '42';
            vendorGuide = '44';
        break
        default:
            vendorTrain = '10';
            vendorGuide = '11';

    }
  var html = '<section class="av-lw">'+
  '<aside>'+
      '<div class="av-intro"><span class="flex-1"></span>'+
          '<div class="av-wrapper" id="tooltipText"><img src="/FLDSuite/static/images/liderazgo_web/lw-logo.png" alt="liderazgo Web" class="lw-logo av-hover active"></div>'+
          '<span class="flex-1"></span>'+
          '<button id="guideStart" class="av-button-tertiary negative">Empezar tutorial</button></div>'+
      '<div class="av-recent">'+
          '<h3 class="av-subtitle negative">Documentos Recientes</h3>'+
          '<ol class="av-list av-list-item negative">'+
              '<li><span>Carta Cambios de Ajustes del Modelo</span>'+
                  '<span class="av-list-spacer"></span>'+
                  '<a class="av-button-icon" href="/SLSuite/static/liderazgo_2014/descargables/CartaCambiosdeAjustesdelModelo.pdf" target="_blank">'+
                      '<span class="material-icons">visibility</span>'+
                  '</a></li>'+
              '<li>'+
                  '<span>Planograma 2022</span>'+
                  '<span class="av-list-spacer"></span>'+
                  '<a class="av-button-icon" href="/SLSuite/static/liderazgo_2014/descargables/PLANOGRAMA_Abr_2022.pdf" target="_blank">'+
                      '<span class="material-icons">visibility</span>'+
                  '</a>'+
              '</li>'+
              '<li>'+
                  '<span>Flyer Evolución de Modelo Multinivel 2022</span>'+
                  '<span class="av-list-spacer"></span>'+
                  '<a class="av-button-icon" href="/SLSuite/static/liderazgo_2014/descargables/EvolucionModeloMultinivel2022.pdf" target="_blank">'+
                      '<span class="material-icons">visibility</span>'+
                  '</a>'+
              '</li>'+
          '</ol>'+
      '</div>'+
  '</aside>'+
  '<section class="av-section-container">'+
      '<span class="av-button-back">'+
          '<i class="material-icons av-lg-icons">arrow_back</i>'+
      '</span>'+
      '<div class="av-section-title">'+
          '<i class="material-icons av-lg-icons">work_outline</i>'+
          '<span>Herramientas para tu negocio</span>'+
      '</div>'+
      '<div class="av-section" data-av="0">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">Herramientas generales</p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="1">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">Comunicados</p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="2">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">Prospección</p><span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="10">'+
          '<div class="av-section-select sub unable">'+
              '<p style="line-height: 27px;" data-profile="'+ suite +'">Entrenamiento para ser experta en Facebook</p><span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="11">'+
          '<div class="av-section-select sub unable">'+
              '<p style="line-height: 27px;" data-profile="'+ suite +'">Evolución Liderazgo Avon</p><span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-divider"></div>'+
      '<div class="av-section-title">'+
          '<i class="material-icons av-lg-icons">description</i>'+
          '<span>Oportunidad de ganancia</span>'+
      '</div>'+
      '<div class="av-section" data-av="5">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">MOC 2022 <small>(Vigencia hasta C9 2022)</small></p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="3">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">Apoyos de temporada</p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-divider"></div>'+
      '<div class="av-section-title"><i class="material-icons av-lg-icons">card_travel</i><span>Reconocimiento</span>'+
      '</div>'+
      '<div class="av-section" data-av="4">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">Campeonato Liderazgo</p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="8">'+
          '<div class="av-section-select sub unable">'+
              '<p data-profile="'+ suite +'">Convención de ventas</p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-divider"></div>'+
      '<div class="av-section" data-av="7">'+
          '<div class="av-section-select unable">'+
              '<i class="material-icons av-lg-icons">local_hospital</i>'+
              '<p data-profile="'+ suite +'">Programa IMSS</p>'+
              '<span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section" data-av="6">'+
          '<div class="av-section-select unable">'+
              '<i class="material-icons av-lg-icons">movie_creation</i>'+
              '<p data-profile="'+ suite +'">Videos</p><span class="av-selection-spacer"></span>'+
              '<i class="material-icons av-lg-icons">keyboard_arrow_right</i>'+
          '</div>'+
          '<div class="av-list-content"></div>'+
      '</div>'+
      '<div class="av-section vendorLiks">'+
          '<a href="/'+ suite + '/vendorLinksOne.page?linkid='+ vendorTrain +'" target="_blank" class="av-section-select unable">'+
              '<i class="material-icons av-lg-icons">insert_drive_file</i>'+
              '<p data-profile="'+ suite +'">Entrenamiento</p>'+
          '</a>'+
      '</div>'+
      '<div class="av-section vendorLiks">'+
          '<a href="/'+ suite +'/vendorLinksOne.page?linkid='+ vendorGuide +'" target="_blank" class="av-section-select unable">'+
              '<i class="material-icons av-lg-icons">arrow_forward</i>'+
              '<p data-profile="'+ suite +'">Acompáñame</p>'+
          '</a>'+
    '</div></section></section>'

    var guideVar = false;
    var guideVar2 = false;
    var guideVar3 = false;
    const imgRoute = "/FLDSuite/static/images/liderazgo_web";
    //const imgRoute = "./../img";
  

    $('#avContainer').append(html);

    try {
      const avNCM = ['2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710'];
      const sectionHtml = '<div class="av-section-select sub unable"><p data-profile="SLSuite">Cen 4Q</p><span class="av-selection-spacer"></span><i class="material-icons av-lg-icons">keyboard_arrow_right</i></div><div class="av-list-content"></div>'
        if (avNCM.includes(AvonAnalyticsObjex.Profile.zone)&&suite) {} else {
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