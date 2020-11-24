$(document).ready(function(){
    
    
    var c = AvonAnalyticsObjex.Profile.campaignInfo;
    const currentCampaign = c.slice(6);
    const currentYear = c.slice(2,4);
    

    const avMarket = AvonAnalyticsObjex.Visitor.market;
    
    var campaignTwo,campaignThree;
    
    otherCampaign(currentCampaign, true);
    otherCampaign(currentCampaign, false);

    const brochuresWrapper = [brochures1,brochures2,brochures3,brochures4,brochures5,brochures6,brochures7,brochures8,brochures9,brochures10,brochures11,brochures12,brochures13,brochures14,brochures15,brochures16,brochures17,brochures18,brochures19,brochures20];
    
    var brochuresConstructor = [brochuresWrapper[currentCampaign-1],brochuresWrapper[campaignTwo - 1],brochuresWrapper[campaignThree - 1]];
    var brochurePrint = ["","","",""];

    function otherCampaign(currentCampaign,boolean) {
        if (boolean){
            if (currentCampaign == 1 ){
                campaignTwo = 20;
            } else {
                campaignTwo = currentCampaign - 1;
            }
            return campaignTwo
        } else {
            if (currentCampaign == 1){
                campaignThree = 19;
            } else if (currentCampaign == 2) {
                campaignThree = 20;
            } else {
                campaignThree = currentCampaign - 2;
            }
            return campaignThree
        }
    }
   

    function otherYear(e){
        let yearSelected;
        if (currentCampaign <= 2 && e == 2){
            yearSelected = currentYear - 1;
        } else if (currentCampaign == 1 && e == 1){
            yearSelected = currentYear - 1;
        } else {
            yearSelected = currentYear;
        }
        return yearSelected;
    }

    function campaignSelector(e){
        let campaignSelected;
        switch (e) {
            case 0:
                campaignSelected = currentCampaign;
                break
            case 1:
                campaignSelected = campaignTwo;
                break
            default:
                campaignSelected = campaignThree;
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


    function urlFile(type,e,file){
        let urlFile;
        switch (type){
            case "imb":
                if (campaignSelector(e) <= 9) {
                    urlFile = 'https://catalogo.avon.mx/0'+ campaignSelector(e) +'/20'+ otherYear(e) +'0'+ campaignSelector(e) + '_0' + file +'/#/'
                } else {
                    urlFile = 'https://catalogo.avon.mx/'+ campaignSelector(e) +'/20'+ otherYear(e) +''+ campaignSelector(e) + '_0' + file +'/#/'
                }
                break
            case "contigo":
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos2019/' + file
                break
            default:
                urlFile = 'https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/mis_folletos/' + file
        }
        
        return urlFile
    }
    

    var canvasIdNumber,canvasID,_PDF_DOC;

    function pdfImg(type,canvasIdNumber,file,e){
        let avCanvasLet;
        if (type == "flyer" || type == 'contigo' || type == 'bazar'){
            avCanvasLet = '<div class="av-canvas-container"><canvas width="132" class="av-canvas" id="avCanvas'+ canvasIdNumber +'"></canvas></div>'
            canvasID = '#avCanvas' + canvasIdNumber;
            if (type == 'contigo'){
                showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/incentivos2019/'+ brochuresConstructor[e][i].file +'',canvasID);
            } else {
                showPDF('https://www.'+ avMarket.toLowerCase() +'.avon.com/FLDSuite/static/pdf/mis_folletos/'+ brochuresConstructor[e][i].file +'',canvasID);
            }
            
        } else {
            if (currentCampaign == 1 && e == 1) {
                avCanvasLet = '<div style="overflow: hidden;border-radius: 8px;position: absolute;height: 130px;width: 132px;">'+
                '<iframe style="position: absolute;height: 230px;top: -13px;left: -83px;" '+
                'scrolling="no" frameborder="0" src="https://viewer.ipaper.io/avon-nola/mexico/'+ campaignSelector(e) +'/20'+ otherYear(e) +
                '' + campaignSelector(e) + '_0' +file + '/-/embedded/flat/singlepage/1/"></iframe></div>';
            } else if (currentCampaign > 9) {
                avCanvasLet = '<div style="overflow: hidden;border-radius: 8px;position: absolute;height: 130px;width: 132px;">'+
                '<iframe style="position: absolute;height: 230px;top: -13px;left: -83px;" '+
                'scrolling="no" frameborder="0" src="https://viewer.ipaper.io/avon-nola/mexico/'+ campaignSelector(e) +'/20'+ otherYear(e) +
                '' + campaignSelector(e) + '_0' +file + '/-/embedded/flat/singlepage/1/"></iframe></div>';
            } else {
                avCanvasLet = '<div style="overflow: hidden;border-radius: 8px;position: absolute;height: 130px;width: 132px;">'+
                '<iframe style="position: absolute;height: 230px;top: -13px;left: -83px;" '+
                'scrolling="no" frameborder="0" src="https://viewer.ipaper.io/avon-nola/mexico/0'+ campaignSelector(e) +'/20'+ otherYear(e) +
                '0' + campaignSelector(e) + '_0' +file + '/-/embedded/flat/singlepage/1/"></iframe></div>';
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
                        '<div class="av-brochure-image">' + pdfImg(brochuresConstructor[e][i].type,canvasIdNumber,brochuresConstructor[e][i].file,e) +
                            '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                            '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" />' +
                            '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
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
                            '<div style="background-image:url(\'/FLDSuite/static/images/mis_folletos/IMB'+ brochuresConstructor[0][0].file +'-cover-mx-c'+ currentCampaign +'.jpg\')" class="av-brochure-image">' +
                                '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[0][0].type,0,brochuresConstructor[0][0].file) + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
                                '<div class="av-type '+ brochuresConstructor[0][0].type +'">'+ currentCampaign +'</div>' +
                            '</div>' +
                            '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[0][0].title +'</h3></div>' +
                        '</div>'
    
    $('#brochureContainer').prepend(brochurePrint[0]);
    $('#brochureContainerPast').append(brochurePrint[1]);
    $('#brochureList ul').append(brochurePrint[2]);
    $('#brochureAside').prepend(brochurePrint[3]);

    $('#viewMore').click(function(){
        $('#brochureContainerPast').css('display','flex').prev().css('display','flex').append(campaignTwo);
        $('#brochureList').css('display','flex').prev().css('display','flex').append(campaignThree);
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
  	
    $(window).scroll(function () {
        const scrollPosition = $(document).scrollTop();
        if (scrollPosition > 50) {
            $(".av-brochure-aside").addClass('av-sticky').next().addClass('av-sticky');
        } else {
            $(".av-brochure-aside").removeClass('av-sticky').next().removeClass('av-sticky');
        }
    });
})
