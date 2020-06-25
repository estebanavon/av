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
                avArrayPrint += '<ol class="av-list av-list-doc active"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[7] +'</ol>'+
                '<ol class="av-list av-list-doc"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[8] +'</ol>';
                $(this).find('.av-doc-container').append(avArrayPrint);
             } else if (avdata == 8) {
                let avArrayPrint = "";
                avArrayPrint += '<ol class="av-list av-list-doc active"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[9] +'</ol>'+
                '<ol class="av-list av-list-doc"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[10] +'</ol>';
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
    });
    
    $('#guideStart').click(function(){
        guideVar = true;
        $('#guide1').append('<div id="guideA" class="av-guide"><p>01/03</p><h4>Selecciona alguna opción de tu menú</h4></div>');
        $('#guideA').show('slow');
        $(this).hide();
    });

    $('.av-section-select').click(function(){
        if (guideVar){
            $(this).append('<div id="guideB" class="av-guide"><p>02/03</p><h4>Selecciona previsualizar o descargar tu archivo</h4></div>');
            $('#guideB').show('slow');
            $('#guideA').hide().remove();
            $('.av-button-back').hide();
        }
    });
    $('.av-doc-container').click(function(){
        if (guideVar){
            $(this).append('<div id="guideC" class="av-guide"><p>03/03</p><h4>Siempre puedes regresar al menú principal.</h4><h4>!Así de fácil!</h4></div>');
            $('#guideC').show('slow');
            $('#guideB').hide().remove();
            $('.av-button-back').show();
        }
    });

    const imssSection2020 = [
        {
            name: 'Programa IMSS periodo A 2020 (C2 a C6)',
            file: 'select',
        },
    ];
    const imssSection2019 = [
        {
            name: 'Programa IMSS periodo C 2019',
            file: 'select',
        },
        {
            name: 'Ganadoras de periodo B 2019',
            file: 'select',
        },
        {
            name: 'Programa IMSS Periodo B 2019',
            file: 'select',
        },
        {
            name: 'Programa IMSS Periodo A 2019',
            file: 'select',
        },
        {
            name: 'Flyer IMSS para Empresarias periodo C',
            file: 'select',
        },
    ];
    const vacationsSection2020 = [
        {
            name: 'Bases Vacaciones Tercera Edición Bloque A',
            file: 'select',
        },
        {
            name: 'Bases Vacaciones Tercera Edición Bloque B',
            file: 'select',
        },
        {
            name: 'Bases Vacaciones Tercera Edición Bloque C',
            file: 'select',
        },
        {
            name: 'Anuncio Tercera Edición Vacaciones con Liderazgo Avon',
            file: 'select',
        },
    ];
    const vacationsSection2019 = [
        {
            name: 'Guía de Viaje para Ganadoras Bloque A',
            file: 'select',
        },
        {
            name: 'Guía de Viaje para Ganadoras Bloque B',
            file: 'select',
        },
        {
            name: 'Guía de Viaje para Ganadoras Bloque C',
            file: 'select',
        },
        {
            name: 'Lista Ganadoras Bloque A 2019',
            file: 'select',
        },
        {
            name: 'Lista Ganadoras Bloque B 2019',
            file: 'select',
        },
        {
            name: 'slLista Ganadoras Bloque C 2019ec',
            file: 'select',
        },
        {
            name: 'Apuéstale a tus vacaciones C4 y C8´2019',
            file: 'select',
        },
        {
            name: 'Bases Apuéstale a tus Vacaciones C4 a C8',
            file: 'select',
        },
        {
            name: 'Bases Generales Bloques Vacaciones con Liderazgo Avon 2019',
            file: 'select',
        },
    ];
    
    const videosSection = [
        {
            name: 'Convocatoria - Historias de Éxito Empresarias 2018',
            file: 'select',
        },
        {
            name: 'Entrevistas PATD Caballete',
            file: 'select',
        },
        {
            name: 'Entrevistas PATD Nombramiento',
            file: 'select',
        },
        {
            name: 'Entrevistas PATD Prospectar',
            file: 'select',
        },
        {
            name: 'Entrevistas PATD Terceros Pasos',
            file: 'select',
        },
        {
            name: 'Sesión de fotos Liderazgo Avon 2017',
            file: 'select',
        },
    ];
    const generalToolsSection = [
        {
            name: 'Díptico Fase 1 Actualizado 2020',
            file: 'select',
        },
        {
            name: 'Planograma Actualizado 2020',
            file: 'select',
        },
        {
            name: 'Guía de Referencia',
            file: 'select',
        },
        {
            name: 'Acuerdo PM',
            file: 'select',
        },
        {
            name: 'Acuerdo TL',
            file: 'select',
        },
        {
            name: 'Check List ROA',
            file: 'select',
        },
        {
            name: 'Formato de Oportunidad de Ganancia Certificada',
            file: 'select',
        },
        {
            name: 'Hoja de Retroalimentación',
            file: 'select',
        },
        {
            name: 'Flyer Nuevo Acompáñame',
            file: 'select',
        },
        {
            name: 'Cambios en Orden Mínima',
            file: 'select',
        },
        {
            name: 'Comunicado: Revisa el Correcto llenado de tus Nombramientos',
            file: 'select',
        },
        {
            name: 'Hoja de oportunidad de ganancia',
            file: 'select',
        },
    ];
    const messagesToolsSection = [
        {
            name: 'ADDENDUM BONO TL',
            file: 'select',
        },
        {
            name: 'Prácticas Comerciales No Aceptadas por Avon ',
            file: 'select',
        },
        {
            name: 'Actualización de Términos para Empresarias TL',
            file: 'select',
        },
        {
            name: 'Comunicado: Revisa el Correcto Llenado de tus Nombramientos',
            file: 'select',
        },
    ];
    const prospectionSection = [
        {
            name: 'Anuncio Prospección Liderazgo',
            file: 'select',
        },
        {
            name: 'Díptico Liderazgo 60-10',
            file: 'select',
        },
        {
            name: 'Calendario de pagos 2020',
            file: 'select',
        },
        {
            name: 'Lona Fortaleza',
            file: 'select',
        },
        {
            name: 'Lona Tenacidad',
            file: 'select',
        },
        {
            name: 'Lona Independencia, 150cms x 100cms',
            file: 'select',
        },
        {
            name: 'Lona Perseverancia, 150cms x 100cms',
            file: 'select',
        },
        {
            name: 'Flyers Prospectar Empresarias a Color versión 1',
            file: 'select',
        },
        {
            name: 'Flyers Prospectar Empresarias a Color versión 2',
            file: 'select',
        },
        {
            name: 'Flyers Prospectar Empresarias blanco y negro versión 1',
            file: 'select',
        },
        {
            name: 'Flyers Prospectar Empresarias blanco y negro versión 2',
            file: 'select',
        },
        {
            name: 'Plan de Actividades de Campo para Empresarias',
            file: 'select',
        },
    ];
    const conversionsSection = [
        {
            name: 'Cruzada de Certificaciones TL y PM C-5 a C-9',
            file: 'select',
        },
        {
            name: 'Conversiones Empresarias Mamá C-5 a C-9',
            file: 'select',
        },
        {
            name: 'Conversiones Empresarias PM C-5 a C-9',
            file: 'select',
        },
        {
            name: 'C2 a C4-2020 Conversiones PM',
            file: 'select',
        },
        {
            name: 'C2 a C4-2020 Conversiones Empresarias Mamá',
            file: 'select',
        },
        {
            name: 'C2 a C3-2020 Cruzada de certificaciones',
            file: 'select',
        },
        {
            name: 'C2 a C4-2020 Ejemplo Conversiones PM',
            file: 'select',
        },
        {
            name: 'C2 a C4-2020 Ejemplo Conversiones Empresarias Mamá',
            file: 'select',
        },
        {
            name: 'C2 a C3-2020 Refuerzo Cruzada de cerficaciónes',
            file: 'select',
        },
        {
            name: 'Bono Navideño C-1 2020',
            file: 'select',
        },
    ];
    const retentionSection = [
        {
            name:'Apoyo por retención C-1 y C-2 2020',
            file: 'sel'
        },
    ];
    const celayaSection = [
        {
            name:'Ganadoras del viaje a la planta de Celaya fase 1 y certificadas',
            file: 'sel'
        },
        {
            name:'Visita Celaya para Empresarias Fase 1',
            file: 'sel'
        },
        {
            name:'Visita Celaya para Empresarias Fase 2 y 3',
            file: 'sel'
        },
        {
            name:'Visita Celaya para Empresarias TL',
            file: 'sel'
        },
    ];

    var avConstructor = [generalToolsSection,messagesToolsSection,prospectionSection,conversionsSection,celayaSection,retentionSection,videosSection,imssSection2020,imssSection2019,vacationsSection2020,vacationsSection2019];
    var once = ["true","true","true","true","true","true","true","true","true","true"];

    var e = 0;
    var i;

    var avArrayPrintContent = ["","","","","","","","","","","","","","","","","","","","","",""];
    while (e < avConstructor.length){
        for (i = 0; i < avConstructor[e].length; i++) {
            avArrayPrintContent[e] += '<li>' +
                '<span>' + avConstructor[e][i].name + '</span>' +
                '<span class="av-list-spacer"></span>' +
                '<a class="av-button-icon av-tooltip" href="/REPSuite/static/images/training/' + avConstructor[e][i].file + '" target="_blank"><span class="material-icons">visibility</span><span class="tooltiptext">Previsualizar</span></a>' +
                '<a class="av-button-icon av-tooltip" href="/REPSuite/static/images/training/' + avConstructor[e][i].file + '" download><span class="material-icons">cloud_download</span><span class="tooltiptext">Descargar</span></a>'+
                '</li>';
        }
        e++    
    }
    

   
});