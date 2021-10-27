import data1 from './brochuresItems-01.js'
import data2 from './brochuresItems-02.js'
import data3 from './brochuresItems-03.js'
import data4 from './brochuresItems-04.js'
import data5 from './brochuresItems-05.js'
import data6 from './brochuresItems-06.js'
import data7 from './brochuresItems-07.js'
import data8 from './brochuresItems-08.js'
import data9 from './brochuresItems-09.js'
import data10 from './brochuresItems-10.js'
import data11 from './brochuresItems-11.js'
import data12 from './brochuresItems-12.js'
import data13 from './brochuresItems-13.js'
import data14 from './brochuresItems-14.js'
import data15 from './brochuresItems-15.js'
import data16 from './brochuresItems-16.js'
import data17 from './brochuresItems-17.js'
import data18 from './brochuresItems-18.js'
import data19 from './brochuresItems-19.js'
import data20 from './brochuresItems-20.js'


try{ 
    var c = AvonAnalyticsObjex.Profile.campaignInfo;
    //var c = '2021:C17';
    const currentCampaign = parseInt(c.slice(6), 10);
    const currentYear = c.slice(2,4);
    
    const avMarket = AvonAnalyticsObjex.Visitor.market;
    //const avMarket = 'gt';
    
    var site = AvonAnalyticsObjex.Content.siteID
    var d = AvonAnalyticsObjex.Profile.zone;
    var zm = AvonAnalyticsObjex.Profile.repAcct;
    // var site = 'DMSuite'
    // var d = '271';
    // var zm = '1'
    var brochuresWrapper,masterHtml;
    

    brochuresWrapper = [data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12,data13,data14,data15,data16,data17,data18,data19,data20];
    

    var brochuresConstructor = [brochuresWrapper[currentCampaign - 1],brochuresWrapper[currentCampaign - 2],brochuresWrapper[currentCampaign - 3]];
    var brochurePrint = ["","","","","",""];



    
    function campaignSelector(e){
        let campaignSelected;
        switch (e) {
            case 0:
                campaignSelected = currentCampaign;
                break
            case 1:
                campaignSelected = currentCampaign - 1;
                break
            default:
                campaignSelected = currentCampaign - 2;
        }
        return campaignSelected
    }
    


    function urlFile(type,file){
        let urlFile;
        switch (type){
            case "contigo":
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos/' + file
                break
            case "youtube":
                urlFile = file
                break
            default:
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/' + file
        }
        return urlFile
    }
    

    var canvasIdNumber,canvasID,_PDF_DOC,folder;

    function pdfImg(type,canvasIdNumber,file){
        let avCanvasLet;
        if(type == 'youtube') {
            avCanvasLet = ''
        } else {
            avCanvasLet = '<div class="av-canvas-container"><canvas width="132" class="av-canvas" id="avCanvas'+ canvasIdNumber +'"></canvas></div>'
            canvasID = '#avCanvas' + canvasIdNumber;
            
            if (type == 'contigo'){
                showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos/'+ file +'',canvasID);
            } else {
                showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/'+ file +'',canvasID);
            }  
            
        }
        

        return avCanvasLet
    }


    async function showPDF(pdf_url,canvasID) {
        try {
            _PDF_DOC = await pdfjsLib.getDocument({ url: pdf_url });
        }
        catch(error) {
           // alert(error.message);
        }
        showPage(canvasID);
    }
    async function showPage(canvasID) {
        try {
            var page = await _PDF_DOC.getPage(1);
        }
        catch(error) {
           // alert(error.message);
        }
        var pdf_original_width = page.getViewport(1).width;
        var scale_required = 132 / pdf_original_width;
        var viewport = page.getViewport(scale_required);
        var render_context = {
            canvasContext: document.querySelector(canvasID).getContext('2d'),
            viewport: viewport
        };
        try {
            await page.render(render_context);
        }
        catch(error) {
            alert(error.message);
        }

    }
    
    var e = 0;
    var i;
    while (e < brochuresConstructor.length) {
        switch (e){
            case 0:
            case 1:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    canvasIdNumber = campaignSelector(e) + '_' +i;
                    
                    brochurePrint[e] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[e][i].type +'">'+
                        '<div class="av-brochure-image">' + pdfImg(brochuresConstructor[e][i].type,canvasIdNumber,brochuresConstructor[e][i].file) +
                            '<a download href="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) +'" class="av-download" style="text-decoration:none;" target="_blank"><span class="material-icons">file_download</span></a>' +
                            '<div class="av-overlay"><input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) + '" />'+
                            '<p class="material-icons">visibility</p><p>Ver</p></div><div class="av-copys av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
                            '<div class="av-type imb">'+ campaignSelector(e) +'</div>' +
                        '</div>' +
                        '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[e][i].title +'</h3></div>'+
                    '</div>'
                }
                break;
            case 2:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    
                    brochurePrint[e] += '<li data-type="'+ brochuresConstructor[e][i].type  +'"><span class="av-type '+  brochuresConstructor[e][i].type  +'"></span>' +
                    '<span>'+ brochuresConstructor[e][i].title + ' C'+ campaignSelector(2) +'</span>' +
                    '<span class="av-list-spacer"></span>' +
                    '<a class="av-button-icon av-tooltip" href="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) +'" target="_blank">' +
                    '<span class="material-icons">visibility</span><div class="tooltiptext">Ver</div></a>' +
                    '<a download class="av-button-icon" href="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) +'" target="_blank"><span class="material-icons">file_download</span></a>' +
                    '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) +'" />' +
                    '</li>'
                }
                break;
        }
        e++
    };
    brochurePrint[3] += '<div class="av-brochure-item av-brochure-main" data-type="'+ brochuresConstructor[0][0].type +'">'+
                            '<div style="background-image:url(\'/FLDSuite/static/images/mis_folletos/brochureCover'+ currentCampaign +'.jpg\')" class="av-brochure-image">' +
                                '<div class="av-overlay"><input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[0][0].type,brochuresConstructor[0][0].file) + '" /><p class="material-icons">visibility</p><p>Ver</p></div>' +
                                '<div class="av-type '+ brochuresConstructor[0][0].type +'">'+ currentCampaign +'</div>' +
                            '</div>' +
                            '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[0][0].title +'</h3></div>' +
                        '</div>'
    let vendorlink = 'https://www.avon.com.'+ avMarket +'/cam-home/catalogo-avon-movil.html';                    
    brochurePrint[4] += currentCampaign;
    brochurePrint[5] += currentCampaign - 1;
    masterHtml = '<section class="av-lw"><aside id="brochureAside" style="box-shadow:none;" class="av-brochure-aside"><a class="av-button-secondary" href="'+ vendorlink +'" style="width:85%;margin:60px auto 0px auto;">Tablero de control</a>'+
    '<a class="av-button-outline" href="/'+ site +'/beautyArticles.page" style="width:85%;margin:10px auto;">Avon On</a><div class="av-share"><div><i class="fas fa-share" aria-hidden="true"></i><span>Comparte</span></div><div><a href="mailto:subject=Este es mi Catálogo para ti">'+
    '<i class="far fa-envelope" aria-hidden="true"></i></a><a style="margin: 0 20px;" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a><a href="https://api.whatsapp.com/send?text=Este es mi Catálogo para ti" target="_blank">'+
    '<i class="fab fa-whatsapp" aria-hidden="true"></i></a></div></div></aside><section class="av-section-container expand"><h2 class="av-brochure-title"><span class="av-title-stroke">Materiales</span> descargables</h2><div class="av-filtros" style="top: 50px;"><label style="font-family: montserrat-bold, Arial Black, Gadget, sans-serif;"><i class="fas fa-filter"></i> Filtrar por: </label>'+
    '<label class="avFilterSelected">Todos</label><span class="material-icons">expand_more</span><ul id="avFiltros" style="z-index: 50;"><li class="filter-all" data-filter="all">Todos</li><li class="no-active" data-filter="flyer">Flyers / Minifolletos</li><li class="no-active" data-filter="imb">Catálogo Avon Móvil</li>'+
    '<li class="no-active" data-filter="bazar">Bazar</li><li class="no-active" data-filter="contigo">Avon Contigo</li></ul></div><h3 style="margin-top:30px;" class="w-100 av-brochures-subtitle"><i class="far fa-calendar-check"></i> Campaña </h3>'+
    '<div class="av-brochures-container" id="brochureContainer"></div><h3 class="w-100 av-brochures-subtitle"><i class="far fa-calendar-check"></i> Campaña </h3><div class="av-brochures-container" style="display:flex;" id="brochureContainerPast"></div>'+
    '<div class="av-brochures-container" id="brochureList"><ul class="av-list av-list-item w-100"></ul></div><button class="av-button-primary av-brochure-button" id="viewMore" style="display:block;">Consultar campaña previa</button></section></section><div id="avOverlay" class="av-modal" style="display: none;">'+
    '<div class="av-modal-background avClose"></div><div style="z-index: 9999;"><div class="av-modal-content"><div class="av-modal-close avClose">✕</div></div></div></div>'

} catch(e) {
    masterHtml = '<section class="av-lw"><aside class="av-brochure-aside" style="box-shadow:none;"></aside><section class="av-section-container expand"><h2 class="av-brochure-title"><span class="av-title-stroke">Materiales</span> descargables</h2><h1 style="padding:40px;font-size:40px;line-height: 42px;">Disculpa las molestias, por el momento no tenemos folletos disponibles. <br /><br />Intenta más tarde o intenta otro navegador.</h1></section>';
    console.log(e)
}
$(document).ready(function(){
    
    $('#avContainer').append(masterHtml);
    
    $('#brochureContainer').prepend(brochurePrint[0]).prev().append(brochurePrint[4]);
    $('#brochureContainerPast').append(brochurePrint[1]).prev().append(brochurePrint[5]);
    $('#brochureAside').prepend(brochurePrint[3]);
    
    $('#viewMore').click(function(){
        $('#brochureList').css('display','flex').prepend('<h3 class="w-100 av-brochures-subtitle"'+
        'style="padding-left: 10px; margin-top:10px;"><i class="far fa-calendar-check"></i> Campaña '+ brochurePrint[5] +'</h3>');
        $('#brochureList ul').append(brochurePrint[2]);
        $(this).hide();
        avCopy();
    });
    avCopy();

    function avCopy (){
        $('.av-copys').click(function(){
            $(this).prev().children().eq(0).select();
            document.execCommand("copy");
            $(this).find('.tooltiptext').text('¡Copiado al portapapeles!');
            $(this).mouseleave(function(){
                $(this).find('.tooltiptext').text('Copiar link');  
            })
        });
    };

    const brochureSelector = $('#brochureContainer,#brochureContainerPast,#brochureList ul');
    $('#avFiltros').children().click(function(){
        let avFilter = $(this).attr('data-filter');
        let avText = $(this).text()
        $('.avFilterSelected').text(avText);
        brochureSelector.children().show();
        if (avFilter != "all"){
            brochureSelector.children(':not([data-type="'+ avFilter +'"])').hide();
        }
    });
    $('.av-filtros').click(function(){
        $('#avFiltros').toggle();
    });

    $('.av-modal-content').css('backgroundColor','transparent');
    
    $('.av-overlay').click(function(){
        $('#avOverlay').show();
        var docURL = $(this).children().eq(0).attr('value');
        $('.av-modal-content').append('<iframe id="contentLoad" style="width: 90vw;height:80vh;" src="/FLDSuite/static/js/pdfjs-2.7.570-dist/web/viewer.html?file='+ docURL +'"></iframe>')
        if(docURL.search("youtube")!= -1) {
            $('.av-modal-content').children().eq(1).remove();
            $('#avOverlay').hide();
            window.open(docURL);
        }
    });

    $(".avClose").click(function () {
        $('#avOverlay').hide();
        $('.av-modal-content').children().eq(1).remove();
    });

})