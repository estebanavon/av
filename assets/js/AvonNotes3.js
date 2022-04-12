
const avDataAtt = [
	[
		{
			title: 'Belleza',
			file: 'BellezaMx'+ avAttCampaign +'_22.pdf',
			type: 'pd',
		},
		{
			title: 'Fashion & Home',
			file: 'FashionNHomeMx'+ avAttCampaign +'_22.pdf',
			type: 'pd',
		},
			{
		  title: 'Avon Contigo',
		  file: 'avon_contigo_c0'+ avAttCampaign +'22.pdf',
		  type: 'contigo',
		},
	],
	[
		{
			title: 'Belleza',
			file: 'BellezaMx'+ avAttCampaign +'_22.pdf',
			type: 'pd',
		},
		{
			title: 'Fashion & Home',
			file: 'FashionNHomeMx'+ avAttCampaign +'_22.pdf',
			type: 'pd',
		},
			{
		  title: 'Avon Contigo',
		  file: 'avon_contigo_c0'+ avAttCampaign +'22_ncmwsx.pdf',
		  type: 'contigo',
		},
	]
]

let urlFilesLet,folder;

let avEnviorment = 'www'
function urlFile(type,file){
	if(type=='contigo'){
		urlFilesLet = 'https://'+ avEnviorment + '.mx.avon.com/FLDSuite/static/pdf/incentivos2019/' + file;
	} else {
		urlFilesLet = 'https://'+ avEnviorment + '.mx.avon.com/FLDSuite/static/pdf/mis_folletos/' + file;
	}
	return urlFilesLet
}


var canvasIdNumber,canvasID,_PDF_DOC;

function pdfImg(type,canvasIdNumber,file){
	let avCanvasLet;
	if(type == 'youtube') {
		avCanvasLet = ''
	} else {
		avCanvasLet = '<div class="av-canvas-container"><canvas width="160" class="av-canvas" id="avCanvas'+ canvasIdNumber +'"></canvas></div>'
		canvasID = '#avCanvas' + canvasIdNumber;
		
		if (type == 'contigo'){
			folder = 'incentivos2019'
		} else {
			folder = 'mis_folletos'
		}  
		showPDF('https://'+ avEnviorment + '.mx.avon.com/FLDSuite/static/pdf/'+ folder +'/'+ file +'',canvasID);
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
	var scale_required = 160 / pdf_original_width;
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




$(document).ready(function(){
	var avNcmFlag = 0;
	var d = AvonAnalyticsObjex.Profile.zone;
	var NCMzone = [
		'2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
	];
	if (NCMzone.includes(d)) {
		avNcmFlag = 1;
	}
    var brochurePr = [''];
    for (i=0;i<3;i++){
        canvasIdNumber = 'attPdfs_' + i;
        brochurePr[0] += '<div class="av-brochure-item" style="width: 160px;">'+
            '<div class="av-brochure-image" style="z-index:3;">' + pdfImg(avDataAtt[avNcmFlag][i].type,canvasIdNumber,avDataAtt[avNcmFlag][i].file) +
                '<a download href="'+ urlFile(avDataAtt[avNcmFlag][i].type,avDataAtt[avNcmFlag][i].file,avDataAtt[avNcmFlag][i].title) +
                '" class="av-download" style="text-decoration:none;" target="_blank"><span class="material-icons">file_download</span></a>' +
                '<div class="av-overlay"><input type="text" class="av-hidden" value="'+ urlFilesLet + '" />'+
                '<p class="material-icons">visibility</p><p>Ver</p></div><div class="av-copys av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
                '<div class="av-type imb">'+ avAttCampaign +'</div>' +
            '</div>' +
            '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ avDataAtt[avNcmFlag][i].title +'</h3></div>'+
        '</div>'
        
    }

    var showSlide = 3;
    var timeOut;

    avShowSlide(3,0,true);
    

    function avShowSlide(end,start,forwardOrBackward){ 
        let avSlide,showSlide2;
        if (showSlide == end){
            showSlide = start;
            showSlide2 = end
        } else {
            showSlide2 = showSlide;
            if(forwardOrBackward){
                showSlide++;
            } else {
                showSlide--;
            };
        }
        if(forwardOrBackward){
            avSlide = 'active'
        } else {
            avSlide = 'active back'
        }
        $('.avData').each(function(){
            $(this).children().eq(showSlide).addClass(avSlide).siblings().removeClass('active back');
            $(this).children().eq(showSlide2).addClass("lastOne").siblings().removeClass('lastOne');
        })
        $('.avDataDots').children().eq(showSlide).removeClass().addClass('active').siblings().removeClass();
        timeOut = setTimeout(function(){avShowSlide(3,0,true);},5500);
        
    }

    $("#avDataFw").click(function(){
        clearTimeout(timeOut);
        avShowSlide(3,0,true);
    });
    $("#avDataBk").click(function(){
        clearTimeout(timeOut);
        avShowSlide(0,3,false);
    });
    


    var avTextIncentivos
    if(NCMzone.includes(d)){
        avTextIncentivos = 'Recibirás tu incentivo 2 campañas después de que facture su campaña correspondiente (ejemplo, si haces tu precaptura de C5, tu regalo llegará en C7)'
    } else {
        avTextIncentivos = 'Recibirás tu incentivo 2 campañas después de que facture su campaña correspondiente (ejemplo, si haces tu precaptura de C5, tu regalo llegará en C7)'
    }

    $('.av-precaptura-texture').append(avTextIncentivos)
    $('#avFolleto').children().eq(0).append(brochurePr).show();
    
    let val;
    $('.av-tabs').children().click(function(){
        val = $(this).attr('value');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tabsResults').children().eq(val).show().siblings().hide()
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


    $('.av-modal-content').css('backgroundColor','transparent');
    
    $('.av-overlay').click(function(){
        //$('#avOverlay').show();
        var docURL = $(this).children().eq(0).attr('value');
        //$('.av-modal-content').append('<iframe id="contentLoad" style="width: 90vw;height:80vh;" src="'+ docURL +'"></iframe>');
        window.open(docURL);
        
    });

    $(".avClose").click(function () {
        $('#avOverlay').hide();
        $('.av-modal-content').children().eq(1).remove();
    });

})