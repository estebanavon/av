$(document).ready(function(){
    
    
    var c = AvonAnalyticsObjex.Profile.campaignInfo;
    const campaignCurrent = c.slice(6);
    const yearCurrent = c.slice(0,4);



    const campaignPast = campaignCurrent - 1;
    const campaignOld = campaignCurrent - 2;
    const brochuresWrapper = [brochures1,brochures2,brochures3,brochures4,brochures5,brochures6,brochures7,brochures8,brochures9,brochures10,brochures11,brochures12,brochures13,brochures14,brochures15,brochures16,brochures17,brochures18];
    
    var brochuresConstructor = [brochuresWrapper[(campaignPast)],brochuresWrapper[campaignOld],brochuresWrapper[(campaignCurrent-3)]];
    var brochurePrint = ["","","",""];

    const avMarket = AvonAnalyticsObjex.Visitor.market;


    function campaign(e){
        let campaign;
        
        if (e == 0){
            campaign = campaignCurrent;
        } else if (e == 1){
            campaign = campaignPast;
        } else if (e == 2) {
            campaign = campaignOld;
        } else {
            campaign = campaignCurrent;
        }
        return campaign;
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


    function urlFile(type,e,file){
        let urlFile;
        switch (type){
            case "imb":
                urlFile = 'https://catalogo.avon.com.'+ avMarket.toLowerCase() +'/'+ campaign(e) +'/'+ yearCurrent +''+ campaign(e) + '_0' + file +'/#/'
                break
            case "contigo":
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos/' + file
                break
            default:
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/' + file
        }
        
        return urlFile
    }
    
    function imgUrl(type,file,e){
        let imgUrl;
        switch (type){
            case 'imb':
                if (file < 3) {
                    imgUrl = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/REPSuite/static/images/ebrochure/C'+ campaign(e) +'/es_'+ avMarket +'_C'+ campaign(e) +'_20_0'+ file +'_cover_medium.jpg';
                } else {
                    imgUrl = 'https://www.gt.avon.com/FLDSuite/static/images/mis_folletos/IMB'+ file +'-cover-c'+ campaign(e) +'.jpg';
                }
                break
            default:
                imgUrl = '';
        }
        return imgUrl
    }

    var canvasIdNumber,canvasID,_PDF_DOC;

    function pdfImg(type,canvasIdNumber){
        let avCanvasLet;
        if (type == "flyer" || type == 'contigo' || type == 'bazar'){
            avCanvasLet = '<div class="av-canvas-container"><canvas width="132" class="av-canvas" id="avCanvas'+ canvasIdNumber +'"></canvas></div>'
            canvasID = '#avCanvas' + canvasIdNumber;
            if (type == 'contigo'){
                showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos/'+ brochuresConstructor[e][i].file +'',canvasID);
            } else {
                showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/'+ brochuresConstructor[e][i].file +'',canvasID);
            }
            
        } else {
            avCanvasLet = ''
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
                    canvasIdNumber = campaign(e) + '_' +i;
                    
                    brochurePrint[e] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[e][i].type +'">'+
                        '<div class="av-brochure-image" style="background-image:url(\''+ imgUrl(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file,e) +'\')">' +
                            pdfImg(brochuresConstructor[e][i].type,canvasIdNumber) +
                            '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                            '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" />' +
                            '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
                            '<div class="av-type '+ brochuresConstructor[e][i].type +'">'+ campaign(e) +'</div>' +
                        '</div>' +
                        '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[e][i].title +'</h3></div>'+
                    '</div>'
                }
                break;
            case 2:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    
                    brochurePrint[e] += '<li data-type="'+ brochuresConstructor[e][i].type  +'"><span class="av-type '+  brochuresConstructor[e][i].type  +'"></span>' +
                    '<span>'+ brochuresConstructor[e][i].title + ' C'+ campaignOld +'</span>' +
                    '<span class="av-list-spacer"></span>' +
                    '<a class="av-button-icon av-tooltip" href="'+ urlFile(brochuresConstructor[e][i].type,2,brochuresConstructor[e][i].file) +'" target="_blank">' +
                    '<span class="material-icons">visibility</span><div class="tooltiptext">Ver</div></a>' +
                    '<div class="av-button-icon av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                    '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,2,brochuresConstructor[e][i].file) +'" />' +
                    '</li>'
                }
                break;
        }
        e++
    };
    brochurePrint[3] += '<div class="av-brochure-item av-brochure-main" data-type="'+ brochuresConstructor[0][0].type +'">'+
                            '<div style="background-image:url(\''+ imgUrl(brochuresConstructor[0][0].type,brochuresConstructor[0][0].file,0) +'\')" class="av-brochure-image">' +
                                '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[0][0].type,0,brochuresConstructor[0][0].file) + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
                                '<div class="av-type '+ brochuresConstructor[0][0].type +'">'+ campaign(0) +'</div>' +
                            '</div>' +
                            '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[0][0].title +'</h3></div>' +
                        '</div>'
    
    $('#brochureContainer').prepend(brochurePrint[0]);
    $('#brochureContainerPast').append(brochurePrint[1]);
    $('#brochureList ul').append(brochurePrint[2]);
    $('#brochureAside').prepend(brochurePrint[3]);

    $('#viewMore').click(function(){
        $('#brochureContainerPast').css('display','flex').prev().css('display','flex').append(campaignPast);
        $('#brochureList').css('display','flex').prev().css('display','flex').append(campaignOld);
        $(this).hide();
        avCopy();
    });
    avCopy();

    function avCopy (){
        $('.av-copy').click(function(){
            $(this).next().select();
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
        $(this).removeClass('no-active').siblings().addClass('no-active');
        brochureSelector.children().show();
        if (avFilter != "all"){
            brochureSelector.children(':not([data-type="'+ avFilter +'"])').hide();
        }
    });




})

