
    var avAttActiveCampaign = avAttCampaign - 1;
    var brochurePr = [''];
    for (i=0;i<3;i++){
        canvasIdNumber = avAttCampaign + '_' + i;
        brochurePr[0] += '<div class="av-brochure-item">'+
            '<div class="av-brochure-image">' + pdfImg(brochuresWrapper[avAttActiveCampaign][i].type,canvasIdNumber,brochuresWrapper[avAttActiveCampaign][i].file) +
                '<a download href="'+ urlFile(brochuresWrapper[avAttActiveCampaign][i].type,brochuresWrapper[avAttActiveCampaign][i].file,brochuresWrapper[avAttActiveCampaign][i].title,0) +
                '" class="av-download" style="text-decoration:none;" target="_blank"><span class="material-icons">file_download</span></a>' +
                '<div class="av-overlay"><input type="text" class="av-hidden" value="'+ urlFilesLet + '" />'+
                '<p class="material-icons">visibility</p><p>Ver</p></div><div class="av-copys av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
                '<div class="av-type imb">'+ avAttCampaign +'</div>' +
            '</div>' +
            '<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresWrapper[avAttActiveCampaign][i].title +'</h3></div>'+
        '</div>'
        
    }

$(document).ready(function(){
    
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
        $('#avOverlay').show();
        var docURL = $(this).children().eq(0).attr('value');
        $('.av-modal-content').append('<iframe id="contentLoad" style="width: 90vw;height:80vh;" src="'+ docURL +'"></iframe>')
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