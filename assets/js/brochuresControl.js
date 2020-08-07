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
            default:
                urlFile = file;
            ;
        }
        
        return urlFile
    }
    
    function imgUrl(type,file,img){
        let imgUrl;
        switch (type){
            case "imb":
                if (file < 3){
                    imgUrl = '/REPSuite/web/static/images/ebrochure/C'+ campaign(e) +'/es_MX_C'+ campaign(e) +'_20_0'+ file +'_cover_medium.jpg';
                } else {
                    imgUrl = '/FLDSuite/web/static/images/mis_folletos/IMB'+ file +'-cover-mx-c'+ campaign(e) +'.jpg';
                }
                break
            case "contigo":
                imgUrl = '/REPSuite/web/static/images/ebrochure/C'+ campaign(e) +'/es_MX_C'+ campaign(e) +'_20_05_cover_medium.jpg';
                break
            case "bazar":
                imgUrl = '/REPSuite/web/static/images/ebrochure/C'+ campaign(e) +'/es_MX_C'+ campaign(e) +'_20_07_cover_medium.jpg';
                break
            default:
                imgUrl = '/FLDSuite/web/static/images/mis_folletos/' + img
        }
        return imgUrl
    }

    function copyText(type){
        let copyText;
        switch (type){
            case "imb":
                copyText = 'Copiar texto';
                break
            case "contigo":
            case "bazar":
            case "flyer":
                copyText = '¡Recuerda que es solo para ti!';
                break
            default:;
        }
        return copyText
    }

    var e = 0;
    var i;
    while (e < brochuresConstructor.length) {
        switch (e){
            case 0:
            case 1:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    brochurePrint[e] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[e][i].type +'">'+
                    '<div style="background-image:url(\''+ imgUrl(brochuresConstructor[e][i].type,brochuresConstructor[e][i].file,brochuresConstructor[e][i].img) +'\')" class="av-brochure-image">' +
                        '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">'+ copyText(brochuresConstructor[e][i].type) +'</div></div>' +
                        '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" />' +
                        '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[e][i].type,e,brochuresConstructor[e][i].file) + '" target="_blank">' +
                        '<p class="material-icons">visibility</p><p>Ver</p></a></div>' +
                        '<div class="av-brochure-text">' +
                        '<h3 class="av-brochure-title">'+ brochuresConstructor[e][i].title +'</h3>' +
                        '<div class="av-type '+ brochuresConstructor[e][i].type +'">'+ campaign(e) +'</div></div></div>'
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
    brochurePrint[3] = '<div class="av-brochure-item av-brochure-main" data-type="'+ brochuresConstructor[0][0].type +'">'+
    '<div style="background-image:url(\''+ imgUrl(brochuresConstructor[0][0].type,brochuresConstructor[0][0].file,brochuresConstructor[0][0].img) +'\')" class="av-brochure-image">' +
        '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
        '<input type="text" class="av-hidden" value="'+ urlFile(brochuresConstructor[0][0].type,e,brochuresConstructor[0][0].file) + '" />' +
        '<a class="av-overlay" href="'+ urlFile(brochuresConstructor[0][0].type,0,brochuresConstructor[0][0].file) + '" target="_blank">' +
        '<p class="material-icons">visibility</p><p>Ver</p></a></div>' +
        '<div class="av-brochure-text">' +
        '<h3 class="av-brochure-title">'+ brochuresConstructor[0][0].title +'</h3>' +
        '<div class="av-type '+ brochuresConstructor[0][0].type +'">'+ campaign(0) +'</div></div></div>';

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
        if (avFilter == "all"){} else {
            brochureSelector.children(':not([data-type="'+ avFilter +'"])').hide();
        } 
    });
})

