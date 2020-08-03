$(document).ready(function(){
    
    const campaignCurrent = 14;

    const brochuresWrapper = ["","","","","","","","","","","",brochures12,brochures13,brochures14,brochures15];
    const brochureSelector = $('#brochureContainer,#brochureContainerPast,#brochureList ul');
    var brochuresConstructor = [brochuresWrapper[(campaignCurrent-1)],brochuresWrapper[(campaignCurrent-2)],brochuresWrapper[(campaignCurrent-3)]];
    var brochurePrint = ["","",""];


    function url(type,e){
        let url;
        if (type == 'imb'){
            if (e == 0){
                url = 'https://catalogo.avon.mx/'+ campaignCurrent +'/2020'+ campaignCurrent + '_0' + brochuresConstructor[e][i].file +'/#/'    
            } else if (e == 1) {
                url = 'https://catalogo.avon.mx/'+ (campaignCurrent - 1) +'/2020'+ (campaignCurrent - 1) + '_0' + brochuresConstructor[e][i].file +'/#/' 
            } else {
                url = 'https://catalogo.avon.mx/'+ (campaignCurrent - 2) +'/2020'+ (campaignCurrent - 2) + '_0' + brochuresConstructor[e][i].file +'/#/'    
            }
            
        } else {
            url = 'https://www.mx.avon.com/FLDSuite/static/pdf/incentivos2019/'
        }
        
        return url
    }
    function imgUrl(type){
        let imgUrl;
        if (type == 'imb'){
            imgUrl = '/assets/img/20_C14_01.jpg'
        } else {
            imgUrl = '/assets/img/20_C14_02.jpg'
        }
        return imgUrl
    }
    function campaign(e){
        let campaign;
        if (e == 0){
            campaign = campaignCurrent;
        } else {
            campaign = campaignCurrent-1;
        }
        return campaign;
    }
    
    var e = 0;
    var i;
    while (e < brochuresConstructor.length) {
        switch (e){
            case 0:
            case 1:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    brochurePrint[e] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[e][i].type +'">'+
                    '<div style="background-image:url(\''+ imgUrl(brochuresConstructor[e][i].type) +'\')" class="av-brochure-image">' +
                        '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
                        '<input type="text" class="av-hidden" value="'+ url(brochuresConstructor[e][i].type,e) + brochuresConstructor[e][i].file +'" />' +
                        '<a class="av-overlay" href="'+ url(brochuresConstructor[e][i].type,e) + brochuresConstructor[e][i].file +'" target="_blank">' +
                        '<p class="material-icons">visibility</p><p>Ver</p></a></div>' +
                        '<div class="av-brochure-text">' +
                        '<h3 class="av-brochure-title">'+ brochuresConstructor[e][i].title +'</h3>' +
                        '<div class="av-type '+ brochuresConstructor[e][i].type +'">'+ campaign(e) +'</div></div></div>'
                }
                break;
            case 2:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    brochurePrint[2] += '<li data-type="'+ brochuresConstructor[e][i].type  +'"><span class="av-type '+  brochuresConstructor[e][i].type  +'"></span>' +
                    '<span>'+ brochuresConstructor[e][i].title + ' C'+ (campaignCurrent-2) +'</span>' +
                    '<span class="av-list-spacer"></span>' +
                    '<a class="av-button-icon" href="'+ url(brochuresConstructor[e][i].type,e) + brochuresConstructor[e][i].file +'" target="_blank">' +
                    '<span class="material-icons">visibility</span></a>' +
                    '<div class="av-button-icon av-copy"><span class="material-icons">content_copy</span></div>' +
                    '<input type="text" class="av-hidden" value="'+ url(brochuresConstructor[e][i].type,e) + brochuresConstructor[e][i].file +'" />' +
                    '</li>'
                }
                break;
        }
        e++
    };
    $('#brochureContainer').prepend(brochurePrint[0]).next().append(brochurePrint[1]).next().children().eq(1).append(brochurePrint[2]);


    $('#viewMore').click(function(){
        $('#brochureContainerPast').css('display','flex').children().eq(0).append(campaignCurrent-1);
        $('#brochureList').css('display','flex').children().eq(0).append(campaignCurrent-2);
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