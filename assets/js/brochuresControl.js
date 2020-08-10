$(document).ready(function(){
    
    const campaignCurrent = 14;

    const campaignPast = campaignCurrent - 1;
    const campaignOld = campaignCurrent - 2;
    const brochuresWrapper = ["","","","","","","","","","","",brochures12,brochures13,brochures14];
    const brochureSelector = $('#brochureContainer,#brochureContainerPast,#brochureList ul');
    var brochuresConstructor = [brochuresWrapper[(campaignPast)],brochuresWrapper[campaignOld],brochuresWrapper[(campaignCurrent-3)]];
    var brochurePrint = ["","","",""];




    function campaign(e){
        let campaign;
        
        if (e == 0){
            campaign = campaignCurrent;
        } else if (e == 1){
            campaign = campaignPast;
        } else if (e == 1) {
            campaign = campaignOld;
        } else {
            campaign = campaignCurrent;
        }
        return campaign;
    }

    function urlFile(type,e,file){
        let urlFile;
        switch (type){
            case "imb":
                urlFile = 'https://catalogo.avon.mx/'+ campaign(e) +'/2020'+ campaign(e) + '_0' + file +'/#/'    
                break
            case "contigo":
                urlFile = 'https://www.mx.avon.com/FLDSuite/static/pdf/incentivos2019/avon_contigo_c'+ campaign(e) +'20.pdf'  
                break
            case "flyer":
            case "bazar":
                urlFile = '/assets/pdf/' + file
                break
            default:
                urlFile = 'https://www.mx.avon.com/FLDSuite/static/pdf/incentivos2019/' + file
        }
        
        return urlFile
    }
    
    function imgUrl(type,file){
        let imgUrl;
        if (type = 'imb'){
            if (file < 3) {
                imgUrl = '/REPSuite/web/static/images/ebrochure/C'+ campaign(e) +'/es_MX_C'+ campaign(e) +'_20_0'+ file +'_cover_medium.jpg';
            } else {
                imgUrl = '/FLDSuite/web/static/images/mis_folletos/IMB'+ file +'-cover-mx-c'+ campaign(e) +'.jpg';
            }
        } else {
            imgUrl = 'pdfCover';
        }
        return imgUrl
    }

    function copyText(type){
        let copyText;
        if (type == "imb"){
            copyText = 'Copiar texto';
        } else {
            copyText = '¡Recuerda que es solo para ti!';
        }
        return copyText
    }
    var canvasIdNumber,canvasID;

    function pdfImg(type){
        let avCanvasLet;
        if (type != 'imb'){
            avCanvasLet = '<div class="av-canvas-container"><canvas width="132" class="av-canvas" id="avCanvas'+ canvasIdNumber +'"></canvas></div>'
        } else {
            avCanvasLet = ''
        }
        return avCanvasLet
    }

    var _PDF_DOC;

    // initialize and load the PDF
    async function showPDF(pdf_url,canvasID,type) {
        if (type != 'imb'){
            // get handle of pdf document
            try {
                _PDF_DOC = await pdfjsLib.getDocument({ url: pdf_url });
            }
            catch(error) {
                alert(error.message);
            }
            // show the first page
            showPage(canvasID);
        }
    }

    // load and render specific page of the PDF
    async function showPage(canvasID) {

        // get handle of page
        try {
            var page = await _PDF_DOC.getPage(1);
        }
        catch(error) {
            alert(error.message);
        }

        var pdf_original_width = page.getViewport(1).width;
        var scale_required = 132 / pdf_original_width;

        // get viewport to render the page at required scale
        var viewport = page.getViewport(scale_required);

        // set canvas height same as viewport height
        //_CANVAS.height = viewport.height;

        // page is rendered on <canvas> element
        var render_context = {
            canvasContext: document.querySelector(canvasID).getContext('2d'),
            viewport: viewport
        };
            
        // render the page contents in the canvas
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
            //case 1:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    canvasIdNumber = campaign(e) + '_' +i;
                    brochurePrint[e] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[e][i].type +'">'+
                    '<div style="background-image:url(\''+ imgUrl(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file) +'\')" class="av-brochure-image">' +
                        pdfImg(brochuresConstructor[e][i].type) +
                        '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                        '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" />' +
                        '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" target="_blank">' +
                        '<p class="material-icons">visibility</p><p>Ver</p></a></div>' +
                        '<div class="av-brochure-text">' +
                        '<h3 class="av-brochure-title">'+ brochuresConstructor[e][i].title +'</h3>' +
                        '<div class="av-type '+ brochuresConstructor[e][i].type +'">'+ campaign(e) +'</div></div></div>'
                        canvasID = '#avCanvas' + canvasIdNumber;
                        showPDF('/assets/pdf/'+ brochuresConstructor[e][i].file +'',canvasID,brochuresConstructor[e][i].type);
                }
                break;
            case 2:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    brochurePrint[2] += '<li data-type="'+ brochuresConstructor[e][i].type  +'"><span class="av-type '+  brochuresConstructor[e][i].type  +'"></span>' +
                    '<span>'+ brochuresConstructor[e][i].title + ' C'+ campaignOld +'</span>' +
                    '<span class="av-list-spacer"></span>' +
                    '<a class="av-button-icon" href="'+ urlFile(brochuresConstructor[e][i].type,2,brochuresConstructor[e][i].file) +'" target="_blank">' +
                    '<span class="material-icons">visibility</span></a>' +
                    '<div class="av-button-icon av-copy"><span class="material-icons">content_copy</span></div>' +
                    '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,2,brochuresConstructor[e][i].file) +'" />' +
                    '</li>'
                }
                break;
        }
        e++
    };
    console.log(canvasID)
    $('#brochureAside').prepend(brochurePrint[3]);
    $('#brochureContainer').prepend(brochurePrint[0]).next().append(brochurePrint[1]).next().children().eq(1).append(brochurePrint[2]);


    $('#viewMore').click(function(){
        $('#brochureContainerPast').css('display','flex').children().eq(0).append(campaignPast);
        $('#brochureList').css('display','flex').children().eq(0).append(campaignOld);
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


    $('#avFiltros').children().click(function(){
        
        let avFilter = $(this).attr('data-filter');

        $(this).removeClass('no-active').siblings().addClass('no-active');
        brochureSelector.children().show();
        if (avFilter != "all"){
            brochureSelector.children(':not([data-type="'+ avFilter +'"])').hide();
        }
    });




})

