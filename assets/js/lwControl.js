$(document).ready(function(){

    const transtionSpeed = 900 ;

    $(".av-section").click(function(){
        let t2 =$(this).attr("avdata");
        let t1 = "url('./../img/lw-"+ t2 +".jpg')"; 
        $(this).children(".av-section-select").removeClass("unable").siblings().addClass("unable");
        $(this).siblings(".av-section,.av-divider,.av-section-title").hide(transtionSpeed);
        
        // Global DOM Manipulations
        $(".av-section-container").addClass("expand").siblings().children().eq(0).css("backgroundImage",t1);
        $(".av-button-back").addClass("unable");
    });
    $(".av-button-back").click(function(){
        let t1 = "url('./../img/lw-i.jpg')"; 
        $(".av-section-select").addClass("unable");
        $(".av-doc-container").removeClass("unable");
        $(".av-section,.av-divider,.av-section-title").show(transtionSpeed - 500);

        // Global DOM Manipulations
        $(".av-section-container").removeClass("expand").siblings().children().eq(0).css("backgroundImage",t1);
        $(this).removeClass("unable");
    });
    

    //////

    const imssSection = [
        {
            name: 'Portada de facebook 2',
            file: 'select',
        },
    ];
    const vacationsSection = [
        {
            name: 'Portada de facebook 21',
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

    var avConstructor = [generalToolsSection,messagesToolsSection,prospectionSection,conversionsSection,celayaSection,retentionSection,imssSection,vacationsSection,videosSection];
    var once = ["true","true","true","true","true","true","true","true","true"];

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
    
    function printDocs(n){
        $("[avdata='"+ n +"']").click(function(){
            if (once[n]=="true"){
                let avArrayPrint = "";
                avArrayPrint += '<ol class="av-list av-list-doc"><li class="av-list-title"><span>Documentos</span><span>Previsualizar / Descargar</span></li>'+ avArrayPrintContent[n] +'</ol>'
                $(this).children().eq(1).append(avArrayPrint);
             }
             once[n] = "false";
        });
        
    }
    
    for (i=0;i<9;i++){
        printDocs(i);
    }
    
    
   
});