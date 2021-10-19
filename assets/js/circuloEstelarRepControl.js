
$(document).ready(function () {

  
    var avFiles0 = [
        {
            file: 'GuiaAlExito.pdf',
            develop: false,
        },
        {
            file: 'Bienvenida.mp4',
            develop: false,
        },
        {
            file: 'ConoceCE.mp4',
            develop: false,
        },
        {
            file: 'GuiadeNombramientos.pdf',
            develop: false,
        },
        {
            file: 'KitsdeBienvenida.pdf',
            develop: false,
        },
        {
            file: 'basesCE2021.pdf',
            develop: false,
        },
        {
            file: 'ceEmotivoVideo.mp4',
            develop: false,
        },
        {
            file: 'COD.jpg',
            develop: false,
        },
        {
            file: 'SeCirculoEstelar.gif',
            develop: true,
        },
        {
            file: 'FotodeportadFB2.jpg',
            develop: true,
        },
        {
            file: 'PostFB.jpg',
            develop: true,
        },
        { 
            file: 'PostFB1.jpg',
            develop: true,
        },
        {
            file: 'PostFB2.jpg',
            develop: true,
        },
    ];
    var avFiles1 = [
        {
            file: 'QueEsPanorama.jpeg',
            develop: false,
        },
        {
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        
        {
            file: 'ConoceTuCaja.mp4',
            develop: false,
        },
        {
            file: 'ConoceTuListadeSurtido.mp4',
            develop: false,
        },
        {
            file: 'GuiaAlExito.pdf',
            develop: false,
        },
        {
            file: 'ComparteEnFacebook.jpg',
            develop: true,
        },
        {
            file: 'PagoenLinea.mp4',
            develop: true,
        },
        {
            file: 'RedesSocialesCE.mp4',
            develop: true,
        },
        {
            file: 'NombraFacil2.png',
            develop: true,
        },
    ];
    var avFiles2 = [
        {
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        
        {
            file: 'ConocenuestrasCausasSociales.mp4',
            develop: false,
        },
        {
            file: 'TipodeClientes.mp4',
            develop: false,
        },
        {
            file: 'ComparteenFacebook2.jpg',
            develop: true,
        },
        {
            file: 'ComparteenFacebook33.jpg',
            develop: true,
        },
        {
            file: 'recuerdaPagar.jpg',
            develop: true,
        },
        {
            file: 'NombraFacil.png',
            develop: true,
        },
        {
            file: 'Pago.png',
            develop: true,
        },
        
    ];
    var avFiles3 = [
        {
            file: 'CalculaTuOportunidadDeGanancia.mp4',
            develop: false,
        },
        {
            file: 'AmpolletasProtinol.mp4',
            develop: false,
        },
        {
            file: 'FotoDePerfilCE.jpg',
            develop: true,
        },
        {
            file: 'FotoDePortadaFB.jpg',
            develop: true,
        },
        {
            file: 'ProspectacionDigital.jpg',
            develop: true,
        },
        {
            file: 'postCE_categorias.jpg',
            develop: true,
        },
        {
            file: 'postCE_pagaDesdeCasa.jpg',
            develop: true,
        },
    ];
  
    var avFiles4 = [
        
        {
            file: 'ConoceUniversoEstelar.png',
            develop: false,
        },
        {
            file: 'CausasSociales.mp4',
            develop: false,
        },
        {
            file: 'NoalMaltratoAnimal.mp4',
            develop: false,
        },
        {
            file: 'PerfilarClientes.mp4',
            develop: false,
        },
        {
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        {
            file: 'TestACiegas.jpg',
            develop: false,
        },
        {
            file: 'FotodeperfilFB.jpg',
            develop: true,
        },
        {
            file: 'Post_3.png',
            develop: true,
        },
        {
            file: 'Post_4.png',
            develop: true,
        },
        
    ];
    var avFiles5 = [
        {
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        {
            file: 'AvonPostear.mp4',
            develop: false,
        },
        {
            file: 'AvonOn.mp4',
            develop: true,
        },
        {
            file: 'DescargaAvonOn.mp4',
            develop: true,
        },
    ];
    var avFiles6 = [
        {
            file: 'GuiaAlExito.pdf',
            develop: false,
        },
        {
            file: 'ingresos.jpg',
            develop: false,
        },
        {
            file: 'TipsdeVenta.jpg',
            develop: false,
        },
        {
            file: 'fb_soyRepreCE.jpg',
            develop: true,
        },
        {
            file: 'perfilFB_preguntameCE.jpg',
            develop: true,
        },
    ];
    var avFiles7 = [
        {
            file: 'videoUniveroEstelar.mp4',
            develop: false,
        },
        {
            file: 'lealtad.jpg',
            develop: false,
        },
        {
            file: 'cobrarClientes.mp4',
            develop: false,
        },
        {
            file: 'fb_soyDuenaCE.jpg',
            develop: true,
        },
        {
            file: 'perfilFB_soyRepreCE_foto.jpg',
            develop: true,
        },
    ];
    var avFiles8 = [
        {
            file: 'CartadePresentacion.jpg',
            develop: false,
        },
        {
            file: 'UtilizaRutinas.jpg',
            develop: false,
        },
        {
            file: 'fb_soyRepreCE_foto.jpg',
            develop: true,
        },
        {
            file: 'perfilFB_soyRepreCE.jpg',
            develop: true,
        },
    ];
    var avFiles9 = [
        {
            file: 'Felicidades.jpg',
            develop: false,
        },
        {
            file: 'FormapartedeUniversoEstelar.png',
            develop: false,
        },
        {
            file: 'fb_preguntameCE.jpg',
            develop: true,
        },
        {
            file: 'perfilFB_soyDuenaCE.jpg',
            develop: true,
        },
    ];








    const avNumber = AvonAnalyticsObjex.Profile.loa; 
    //const avNumber = '5'; 
    for (i=0; i <= avNumber && i < 9; i++){
        $('.optionDisplay').append('<div value="'+ (i + 1) +'">'+ (i + 1) +'</div>');
    }
    $('.optionDisplay').children().eq(0).addClass('active');
    $('.av-stepper').children().removeClass('active').eq(parseInt(avNumber,10)).addClass('active');
    
    const avFilesConstructor = [avFiles0,avFiles1,avFiles2,avFiles3,avFiles4,avFiles5,avFiles6,avFiles7,avFiles8,avFiles9];
    var e = 0;
    var i;
    var avArrayPrintContent = [];
    var avArrayPrintTrue = ["","","","","","","","","",""];
    var avArrayPrintFalse = ["","","","","","","","","","","",""];
    
    

    while (e < avFilesConstructor.length) {
        for (i = 0; i < avFilesConstructor[e].length; i++) {
            if (avFilesConstructor[e][i].develop){
                avArrayPrintTrue[e] += '<div class="av-brochure-item">'+
                            '<div class="av-brochure-image" style="background-image: url(\'/FLDSuite/static/images/circulo_estelar/'+ avFilesConstructor[e][i].file +'.jpg\');">'+
                            '<a download href="/FLDSuite/static/pdf/circulo_estelar_documents/'+ avFilesConstructor[e][i].file +'" class="av-download av-tooltip">'+
                                    '<span class="material-icons">file_download</span>'+
                                    '<div class="tooltiptext">Descargar</div>'+
                                '</a>'+
                                '<div class="av-overlay avCeDocs" value-one="'+ e +'" value-two="'+ i +'">'+ 
                                    '<p class="material-icons">visibility</p>'+
                                    '<p>Ver</p>'+
                                '</div></div></div>'
            } else {
                avArrayPrintFalse[e] += '<div class="av-brochure-item">'+
                '<div class="av-brochure-image" style="background-image: url(\'/FLDSuite/static/images/circulo_estelar/'+ avFilesConstructor[e][i].file +'.jpg\');">'+
                    '<a download href="/FLDSuite/static/pdf/circulo_estelar_documents/'+ avFilesConstructor[e][i].file +'" class="av-download av-tooltip">'+
                        '<span class="material-icons">file_download</span>'+
                        '<div class="tooltiptext">Descargar</div>'+
                    '</a>'+
                    '<div class="av-overlay avCeDocs" value-one="'+ e +'" value-two="'+ i +'">'+ 
                        '<p class="material-icons">visibility</p>'+
                        '<p>Ver</p>'+
                    '</div></div></div>'
            }
        }
        e++;
    }
    for (i=0;i<avArrayPrintTrue.length;i++) {
        avArrayPrintContent[i] =  '<div class="av-wrapper" style="display:none;" value="1"><div class="av-brochures-container pb-0">'+ avArrayPrintFalse[i] +
        '</div><div class="av-brochures-container py-2"><p class="av-text">Mi negocio digital</p></div><div class="av-brochures-container pt-0">'+ 
        avArrayPrintTrue[i] + '</div></div>'; 
    }
    var avArrayPrint = "";
    for (i=0; i < (parseInt(avNumber,10)+1) && i < 9 ;i++){
        avArrayPrint += avArrayPrintContent[i]
    }
    $('.optionContent').append(avArrayPrint);
    $('.optionContent').children().eq(0).show();

    function typeGet(file){
        var type = file.substring(file.length - 3, file.length);
        return type;
    }
    $('.av-modal-content').css('backgroundColor','transparent');
    var b,c,type;
    function docDisplay(b,c){
        $('.av-modal-content').children().eq(2).remove();
        let avType = typeGet(avFilesConstructor[b][c].file);
        switch (avType) {
            case 'mp4':
                $('.av-modal-content').append('<video id="contentLoad" style="width: 70vw; background-color: black;" controls><source src="/FLDSuite/static/pdf/circulo_estelar_documents/'+ avFilesConstructor[b][c].file +'"></video>')
                break;
            case 'pdf':
                $('.av-modal-content').append('<iframe id="contentLoad" style="width: 80vw;height:80vh;" src="/FLDSuite/static/js/pdfjs-2.7.570-dist/web/viewer.html?file=/FLDSuite/static/pdf/circulo_estelar_documents/'+ avFilesConstructor[b][c].file +'"></iframe>')
                break;
            default:
                $('.av-modal-content').append(
                    '<svg version="1.1" id="ceLoader" xmlns="http://www.w3.org/2000/svg" '+
                    'xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100px" xml:space="preserve">'+
                    '<circle cx="50" cy="50" r="40" class="avThickboxLoader"></circle></svg>'
                );
                $('.av-modal-content').append('<img id="contentLoad" style="max-height: 70vh;" src="/FLDSuite/static/pdf/circulo_estelar_documents/'+ avFilesConstructor[b][c].file +'"/>')
        }
        
        switch (c){
            case (avFilesConstructor[b].length - 1):
                $('.avModalNext').hide();    
            break
            case 0:
                $('.avModalBefore').hide();
            break
            default:
                $('.avModalNext').show();
                $('.avModalBefore').show();
        }
        
        $('.avDownload').attr('href','/FLDSuite/static/pdf/circulo_estelar_documents/'+ avFilesConstructor[b][c].file +'')
        debugger
        $('#contentLoad').on( "load", $('#ceLoader').remove() )
    }
    $('.avCeDocs').click(function(){
        $('#avOverlay').show();
        b = parseInt($(this).attr('value-one'),10);
        c = parseInt($(this).attr('value-two'),10);
        docDisplay(b,c);
    });
    $(".avClose").click(function () {
        $('#avOverlay').hide();
        $('.av-modal-content').children().eq(2).remove();
    });
    $('.avModalBefore').click(function(){
        c = c-1;
        docDisplay(b,c);
    });
    $('.avModalNext').click(function(){
        c = c + 1;
        docDisplay(b,c);
    });

    $('.optionDisplay').children().click(function(){
        letCeCampaign = $(this).attr('value');
        console.log(letCeCampaign);
        $(this).addClass('active').siblings().removeClass('active');
        $('.av-tabs-content').children().eq(letCeCampaign - 1).show('slow').siblings().hide();
    });
    



    var slideIndex = 2;
    var timeOut;

    avShowSlide(2,0,true);
    

    function avShowSlide(initial,initialSupport,forwardOrBackward){ 
        if (slideIndex == initial){
            slideIndex = initialSupport;
        } else {
            if(forwardOrBackward){
                slideIndex++;
            } else {
                slideIndex--;
            };
        }
        
        $('.avData').each(function(){
            $(this).children().eq(slideIndex).addClass("active").siblings().removeClass("active");
            $(this).children().eq(slideIndex - 1).addClass("lastOne").siblings().removeClass('lastOne');
        })
        $('#avThickboxLoader').removeClass().addClass('av'+ slideIndex);
        timeOut = setTimeout(function(){avShowSlide(2,0,true);},5500);
    }

    $("#avDataFw").click(function(){
        clearTimeout(timeOut);
        avShowSlide(2,0,true);
    });
    $("#avDataBk").click(function(){
        clearTimeout(timeOut);
        avShowSlide(0,2,false);
    });
   
    
});
