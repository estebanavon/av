$(document).ready(function () {

  
    var avFiles0 = [
        {
            name: '¡Kit de bienvenida! (gif)',
            file: 'KITSDEBIENVENIDA.gif',
            develop: false, 
        },
        {
            name: 'Bienvenida (video)',
            file: 'Bienvenida.mp4',
            develop: false,
        },
        {
            name: 'Conoce círculo estelar (video)',
            file: 'ConoceCE.mp4',
            develop: false,
        },
        {
            name: 'Guía de nombramientos (pdf)',
            file: 'GuiadeNombramientos.pdf',
            develop: false,
        },
        {
            name: 'Guía, kits de bienvenida (pdf)',
            file: 'GuiaKitsdeBienvenida.pdf',
            develop: false,
        },
        {
            name: 'Línea Círculo Estelar (pdf)',
            file: 'LineaCE.pdf',
            develop: false,
        },
        {
            name: 'Sé Círculo Estelar (gif)',
            file: 'SeCirculoEstelar.gif',
            develop: true,
        },
        {
            name: 'Foto de portada Facebook (jpg)',
            file: 'FotodeportadFB2.jpg',
            develop: true,
        },
        {
            name: 'Post Facebook (jpg)',
            file: 'PostFB.jpg',
            develop: true,
        },
        {
            name: 'Post Facebook 1 (jpg)',
            file: 'PostFB1.jpg',
            develop: true,
        },
        {
            name: 'Post Facebook 2 (jpg)',
            file: 'PostFB2.jpg',
            develop: true,
        },
    ];
    var avFiles1 = [
        {
            name: '¿Qué es panorama? (jpeg)',
            file: 'QueEsPanorama.jpeg',
            develop: false,
        },
        {
            name: '¿Qué es un VEA? (jpeg)',
            file: 'QueEsUnVEA.jpeg',
            develop: false,
        },
        {
            name: 'Tips de venta (jpg)',
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        {
            name: 'Camino al éxito (mp4)',
            file: 'CaminoAlExito.mp4',
            develop: false,
        },
        {
            name: 'Conoce tu caja (mp4)',
            file: 'ConoceTuCaja.mp4',
            develop: false,
        },
        {
            name: 'Conoce tu lista de Surtido (mp4)',
            file: 'ConoceTuListadeSurtido.mp4',
            develop: false,
        },
        {
            name: 'Guía al éxito (pdf)',
            file: 'GuiaAlExito.pdf',
            develop: false,
        },
        {
            name: 'Comparte en Facebook (jpg)',
            file: 'ComparteEnFacebook.jpg',
            develop: true,
        },
        {
            name: 'Pago en línea (mp4)',
            file: 'PagoenLinea.mp4',
            develop: true,
        },
        {
            name: 'Redes sociales Círculo Estelar (mp4)',
            file: 'RedesSocialesCE.mp4',
            develop: true,
        },
        {
            name: 'Nombra fácil 2 (png)',
            file: 'NombraFacil2.png',
            develop: true,
        },
    ];
    var avFiles2 = [
        {
            name: 'Tips de venta (jpg)',
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        {
            name: 'Aprendiendo con AVON (mp4)',
            file: 'AprendiendoconAVON.mp4',
            develop: false,
        },
        {
            name: 'Conoce nuestras causas sociales (mp4)',
            file: 'ConocenuestrasCausasSociales.mp4',
            develop: false,
        },
        {
            name: 'Tipo de clientes (mp4)',
            file: 'TipodeClientes.mp4',
            develop: false,
        },
        {
            name: 'Comparte en Facebook 2 (jpg)',
            file: 'ComparteenFacebook2.jpg',
            develop: true,
        },
        {
            name: 'Comparte en Facebook 3 (jpg)',
            file: 'ComparteenFacebook33.jpg',
            develop: true,
        },
        {
            name: 'Recuerda pagar (jpg)',
            file: 'recuerdaPagar.jpg',
            develop: true,
        },
        {
            name: 'Nombra Fácil (png)',
            file: 'NombraFacil.png',
            develop: true,
        },
        {
            name: 'Pago (png)',
            file: 'Pago.png',
            develop: true,
        },
        
    ];
    
    const avNumber = $('.optionControl').attr('value');
 
  
    var avLoaOptions = [
        '<h4 class="active" value="1">Primera campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="2">Segunda campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="3">Tercera campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="4">Cuarta campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="5">Quinta campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="6">Sexta campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="7">Septima campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="8">Octava campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="9">Novena campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
    ];
    for (i=0; i <= avNumber; i++){
        $('.optionControl').append(avLoaOptions[i-1]);
    }
    
    const avFilesConstructor = [avFiles0,avFiles1,avFiles2];
    var e = 0;
    var i;
    var avArrayPrintContent = [];
    var avArrayPrintTrue = ["","",""];
    var avArrayPrintFalse = ["","",""];
    
    while (e < avFilesConstructor.length) {
        for (i = 0; i < avFilesConstructor[e].length; i++) {
            if (avFilesConstructor[e][i].develop){
                avArrayPrintTrue[e] += '<li>' +
                '<span>' + avFilesConstructor[e][i].name + '</span>' +
                '<span class="av-list-spacer"></span>' +
                '<a class="av-button-icon av-tooltip" href="/FLDSuite/static/pdf/circulo_estelar_documents/' + avFilesConstructor[e][i].file + '" target="_blank"><span class="material-icons">visibility</span><span class="tooltiptext">Previsualizar</span></a>' +
                '<a class="av-button-icon av-tooltip" href="/FLDSuite/static/pdf/circulo_estelar_documents/' + avFilesConstructor[e][i].file + '" download ><span class="material-icons">cloud_download</span><span class="tooltiptext">Descargar</span></a>'+
                '</li>';
            } else {
                avArrayPrintFalse[e] += '<li>' +
                '<span>' + avFilesConstructor[e][i].name + '</span>' +
                '<span class="av-list-spacer"></span>' +
                '<a class="av-button-icon av-tooltip" href="/FLDSuite/static/pdf/circulo_estelar_documents/' + avFilesConstructor[e][i].file + '" target="_blank"><span class="material-icons">visibility</span><span class="tooltiptext">Previsualizar</span></a>' +
                '<a class="av-button-icon av-tooltip" href="/FLDSuite/static/pdf/circulo_estelar_documents/' + avFilesConstructor[e][i].file + '" download ><span class="material-icons">cloud_download</span><span class="tooltiptext">Descargar</span></a>'+
                '</li>';
            }
        }
        
        e++;
    }
    for (i=0;i<avArrayPrintTrue.length;i++) {
        avArrayPrintContent[i] =  avArrayPrintFalse[i] +'<li class="av-list-title">Desarrolla tu negocio digital</li>'+ avArrayPrintTrue[i];
    }
    var avArrayPrint = "";
    for (i=0; i<avNumber;i++){
        avArrayPrint += '<div class="av-list-container"><ol class="av-list av-list-item">'+ avArrayPrintContent[i] +'</ol></div>'  
    }
    $('.optionDisplay').append(avArrayPrint);
    $('.optionDisplay').children().eq(1).addClass('active');
    
});
