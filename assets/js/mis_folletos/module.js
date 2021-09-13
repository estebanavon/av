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
    // const avMarket = 'mx';
    
    var d = AvonAnalyticsObjex.Profile.zone;
    var zm = AvonAnalyticsObjex.Profile.repAcct;
    //var d = '271';
    //var zm = '1'
    var avNcmBoolean,brochuresWrapper,masterHtml;
    avNcmBoolean = 0;
    
    var NCMzone = [
        '2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
    ];
    if (NCMzone.includes(d) || zm == '888888827') {
        avNcmBoolean = 1;
    }

    brochuresWrapper = [data1[avNcmBoolean],data2[avNcmBoolean],data3[avNcmBoolean],data4[avNcmBoolean],data5[avNcmBoolean],data6[avNcmBoolean],data7[avNcmBoolean],data8[avNcmBoolean],data9[avNcmBoolean],data10[avNcmBoolean],data11[avNcmBoolean],data12[avNcmBoolean],data13[avNcmBoolean],data14[avNcmBoolean],data15[avNcmBoolean],data16[avNcmBoolean],data17[avNcmBoolean],data18[avNcmBoolean],data19[avNcmBoolean],data20[avNcmBoolean]];
    

    var brochuresConstructor = [brochuresWrapper[currentCampaign],brochuresWrapper[currentCampaign - 1],brochuresWrapper[currentCampaign - 2]];
    var brochurePrint = ["","","","","",""];




    function campaignSelector(e){
        let campaignSelected;
        switch (e) {
            case 0:
                campaignSelected = currentCampaign + 1;
                break
            case 1:
                campaignSelected = currentCampaign;
                break
            default:
                campaignSelected = currentCampaign - 1;
        }
        return campaignSelected
    }
    

    
    function copyText(type){
        let copyText;
        if (type == "imb"){
            copyText = 'Copiar link';
        } else {
            copyText = '¡Recuerda que es solo para ti!';
        }
        return copyText
    }


    function urlFile(type,file){
        let urlFile;
        switch (type){
            case "contigo":
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos2019/' + file
                break
            default:
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/mis_folletos/' + file
        }
        return urlFile
    }
    

    var canvasIdNumber,canvasID,_PDF_DOC,folder;

    function pdfImg(type,canvasIdNumber,file){
        let avCanvasLet;
        avCanvasLet = '<div class="av-canvas-container"><canvas width="132" class="av-canvas" id="avCanvas'+ canvasIdNumber +'"></canvas></div>'
        canvasID = '#avCanvas' + canvasIdNumber;
        
        if (type == 'contigo'){
            folder = 'incentivos2019'
        } else {
            folder = 'mis_folletos'
        }  
        showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/'+ folder +'/'+ file +'',canvasID);

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
                            '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                            '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) + '" />' +
                            '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
                            '<div class="av-type '+ brochuresConstructor[e][i].type +'">'+ campaignSelector(e) +'</div>' +
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
                    '<div class="av-button-icon av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                    '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) +'" />' +
                    '</li>'
                }
                break;
        }
        e++
    };
    brochurePrint[3] += '<div class="av-brochure-item av-brochure-main" data-type="'+ brochuresConstructor[0][0].type +'">'+
                            '<div style="background-image:url(\'/FLDSuite/static/images/mis_folletos/brochureCover'+ (currentCampaign + 1) +'.jpg\')" class="av-brochure-image">' +
                                '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[0][0].type,0,brochuresConstructor[0][0].file) + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
                                '<div class="av-type '+ brochuresConstructor[0][0].type +'">'+ (currentCampaign + 1) +'</div>' +
                            '</div>' +
                            '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[0][0].title +'</h3></div>' +
                        '</div>'
    brochurePrint[4] += currentCampaign;
    brochurePrint[5] += currentCampaign - 1;
    masterHtml = '<section class="av-lw"><aside id="brochureAside" class="av-brochure-aside"><div class="av-share"><div><i class="fas fa-share" aria-hidden="true"></i><span>Comparte</span></div><div><a href="mailto:subject=Este es mi Catálogo para ti"><i class="far fa-envelope" aria-hidden="true"></i></a><a style="margin: 0 20px;" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a><a href="https://api.whatsapp.com/send?text=Este es mi Catálogo para ti" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></div></div><div class="av-map"><div class=""><span class="material-icons">bookmark_border</span><span>Flyers / Minifolletos</span></div><div class=""><span class="material-icons">insert_drive_file</span><span>Catálogo Avon Móvil</span></div><div><span class="material-icons">description</span></svg><span>Bazar</span></div><div class=""><span class="material-icons">import_contacts</span><span>Avon Contigo</span></div></div></aside><section class="av-section-container expand"><h2 class="av-brochure-title"><span class="av-title-stroke">Mis</span> folletos</h2><div class="av-filtros" id="avFiltros"><div class="filter-all" data-filter="all">TODOS</div><div class="no-active flyer av-tooltip" data-filter="flyer"><span class="material-icons">bookmark_border</span><span class="tooltiptext">Flyers / Minifolletos</span></div><div class="no-active imb av-tooltip" data-filter="imb"><span class="material-icons">insert_drive_file</span><span class="tooltiptext">Catálogo Avon Móvil</span></div><div class="no-active bazar av-tooltip" data-filter="bazar"><span class="material-icons">description</span><span class="tooltiptext">Bazar</span></div><div class="no-active contigo av-tooltip" data-filter="contigo"><span class="material-icons">import_contacts</span><span class="tooltiptext">Avon Contigo</span></div></div><h3 style="margin-top:30px;display:flex;font-family: montserrat-bold, Gadget, sans-serif;text-transform: uppercase;font-size: 18px;" class="w-100 av-brochures-subtitle"><span class="material-icons">campaign</span> Campaña </h3><div class="av-brochures-container" id="brochureContainer"></div><h3 style="display:flex;font-family: montserrat-bold, Gadget, sans-serif;text-transform: uppercase;font-size: 18px;" class="w-100 av-brochures-subtitle"><span class="material-icons">campaign</span> Campaña </h3><div class="av-brochures-container" style="display:flex;" id="brochureContainerPast"></div><div class="av-brochures-container" id="brochureList"><ul class="av-list av-list-item w-100"></ul></div><button class="av-button-primary av-brochure-button" id="viewMore" style="display:block;">Consultar campaña previa</button></section></section>'
} catch {
    masterHtml = '<section class="av-lw"><aside class="av-brochure-aside"></aside><section class="av-section-container expand"><h2 class="av-brochure-title"><span class="av-title-stroke">Mis</span> folletos</h2><h1 style="padding:40px;font-size:40px;line-height: 42px;">Disculpa las molestias, por el momento no tenemos folletos disponibles. <br /><br />Intenta más tarde.</h1></section>';
}

$(document).ready(function(){
    
    $('#avContaner').append(masterHtml)
    $('#brochureContainer').prepend(brochurePrint[0]).prev().append(parseInt(brochurePrint[4], 10) + 1);
    $('#brochureContainerPast').append(brochurePrint[1]).prev().append(brochurePrint[4]);
    $('#brochureAside').prepend(brochurePrint[3]);

    $('#viewMore').click(function(){
        $('#brochureList').css('display','flex').prepend('<h3 class="w-100 av-brochures-subtitle" style="display:flex;font-family: montserrat-bold, Gadget, sans-serif;text-transform: uppercase;font-size: 18px;"><span class="material-icons">campaign</span> Campaña '+ brochurePrint[5] +'</h3>');
        $('#brochureList ul').append(brochurePrint[2]);
        $(this).hide();
        avCopy();
    });
    avCopy();

    function avCopy (){
        $('.av-copy').click(function(){
            $(this).next().select();
            document.execCommand("copy");
            $(this).find('.tooltiptext').text('Â¡Copiado al portapapeles!');
            $(this).mouseleave(function(){
                $(this).find('.tooltiptext').text('Copiar link');  
            })
        });
    };

    const brochureSelector = $('#brochureContainer,#brochureContainerPast,#brochureList ul');
    $('#avFiltros').children().click(function(){
        let avFilter = $(this).attr('data-filter');
        $(this).removeClass('no-active').siblings().addClass('no-active');
        brochureSelector.children().show();
        if (avFilter != "all"){
            brochureSelector.children(':not([data-type="'+ avFilter +'"])').hide();
        }
    });

})