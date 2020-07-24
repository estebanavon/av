$(document).ready(function(){

    const campaignCurrent = 14;

    const brochuresCurrent = [
        {
            title: 'Belleza',
            file: '1',
            type: 'imb',
        },
        {
            title: 'Fashion & Home',
            file: '2',
            type: 'imb',
        },
        {
            title: 'Electrodomésticos',
            file: '3',
            type: 'imb',
        },
        {
            title: 'Salón en casa',
            file: '4',
            type: 'imb',
        },
        {
            title: 'Contigo',
            file: 'avon_contigo_c1420.pdf',
            type: 'contigo',
        },
        {
            title: 'Contigo',
            file: '6.pdf',
            type: 'contigo',
        },
        {
            title: 'Contigo',
            file: '7.pdf',
            type: 'contigo',
        },
        {
            title: 'Contigo',
            file: '8.pdf',
            type: 'contigo',
        },
        {
            title: 'Contigo',
            file: '9.pdf',
            type: 'contigo',
        },
        {
            title: 'End 1',
            file: '9.pdf',
            type: 'contigo',
        },
    ]

    const brochuresPast = [
        {
            title: 'Start 2',
            file: '3.pdf',
            type: 'imb',
        },
        {
            title: 'Bazar',
            file: '4.pdf',
            type: 'bazar',
        },
        {
            title: 'Fashion & Home',
            file: '5.pdf',
            type: 'contigo',
        },
        {
            title: 'asds 2',
            file: '2.pdf',
            type: 'contigo',
        },
        {
            title: 'asd 2',
            file: '3.pdf',
            type: 'imb',
        },
        {
            title: 'Bazar',
            file: '4.pdf',
            type: 'bazar',
        },
        {
            title: 'Fashion & Home',
            file: '5.pdf',
            type: 'contigo',
        },
        {
            title: 'End 2',
            file: '2.pdf',
            type: 'contigo',
        },
        {
            title: 'End 2',
            file: '2.pdf',
            type: 'contigo',
        },
    ]
    const brochuresList = [
        {
            title: 'Start 3',
            file: '1.pdf',
            type: 'imb',
        },
        {
            title: 'Bazar',
            file: '1.pdf',
            type: 'bazar',
        },
        {
            title: 'Fashion & Home',
            file: '1.pdf',
            type: 'contigo',
        },
        {
            title: 'End 2',
            file: '1.pdf',
            type: 'contigo',
        },
        {
            title: 'Sasd',
            file: '1.pdf',
            type: 'imb',
        },
        {
            title: 'Bazar',
            file: '1.pdf',
            type: 'bazar',
        },
        {
            title: 'Fashion & Home',
            file: '1.pdf',
            type: 'contigo',
        },
        {
            title: 'End 3',
            file: '1.pdf',
            type: 'contigo',
        },
    ]
    


    //Dont Touch //

    const brochuresConstructor = [brochuresCurrent,brochuresPast,brochuresList];
    var brochurePrint = ["","",""];


    function url(){
        let url;
        if (brochuresConstructor[e][i].type == 'imb'){
            url = 'https://catalogo.avon.mx/'+ campaignCurrent +'/2020'+ campaignCurrent + '_0' + brochuresConstructor[e][i].file +'/#/' 
        } else {
            url = 'https://www.mx.avon.com/FLDSuite/static/pdf/incentivos2019/'
        }
        return url
    }
    function imgUrl(){
        let imgUrl;
        if (brochuresConstructor[e][i].type == 'imb'){
            imgUrl = '/assets/img/20_C14_01.jpg'
        } else {
            imgUrl = '/assets/img/20_C14_02.jpg'
        }
        return imgUrl
    }
    
    var e = 0;
    var i;
    while (e < brochuresConstructor.length) {
        switch (e){
            case 0:
            case 1:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    brochurePrint[e] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[e][i].type +'">'+
                    '<div style="background-image:url(\''+ imgUrl() +'\')" class="av-brochure-image">' +
                        '<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><span class="tooltiptext">Copiar link</span></div>' +
                        '<input type="text" class="av-hidden" value="'+ url() + brochuresConstructor[e][i].file +'" />' +
                        '<a class="av-overlay" href="'+ url() + brochuresConstructor[e][i].file +'" target="_blank">' +
                        '<p class="material-icons">visibility</p><p>Ver</p></a></div>' +
                        '<div class="av-brochure-text">' +
                        '<h3 class="av-brochure-title">'+ brochuresConstructor[e][i].title +'</h3>' +
                        '<div class="av-type '+ brochuresConstructor[e][i].type +'">'+ campaignCurrent +'</div></div></div>'
                }
                break;
            case 2:
                for (i=0;i<brochuresConstructor[e].length;i++){
                    brochurePrint[2] += '<li data-type="'+ brochuresConstructor[e][i].type  +'"><span class="av-type '+  brochuresConstructor[e][i].type  +'"></span>' +
                    '<span>'+ brochuresConstructor[e][i].title + ' C-'+ (campaignCurrent-2) +'</span>' +
                    '<span class="av-list-spacer"></span>' +
                    '<a class="av-button-icon" href="'+ brochuresConstructor[e][i].file +'" target="_blank">' +
                    '<span class="material-icons">visibility</span></a>' +
                    '<div class="av-button-icon av-copy av-tooltip"><span class="material-icons">content_copy</span><span class="tooltiptext">Copiar link</span></div>' +
                    '<input type="text" class="av-hidden" value="https://URL-HERE'+ brochuresConstructor[e][i].file +'" />' +
                    '</li>'
                }
                break;
        }
        e++
    };
    $('#brochureContainer').prepend(brochurePrint[0]);
    $('#viewMore').click(function(){
        $('#brochureContainerPast').css('display','flex').children().eq(0).append(campaignCurrent-1);
        $('#brochureContainerPast').append(brochurePrint[1]);
        $('#brochureList').css('display','flex').children().eq(0).append(campaignCurrent-2);
        $('#brochureList').children().eq(1).append(brochurePrint[2]);
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





    const brochureSelector = $('#brochureContainer, #brochureContainerPast, #brochureContainerList');
    $('#test2').click(function(){
        brochureSelector.children().show();
        brochureSelector.children(':not([data-type="contigo"])').hide();
    });
    $('#test3').click(function(){
        brochureSelector.children().show();
        brochureSelector.children(':not([data-type="bazar"])').hide();
    });
    $('#test').click(function(){
        brochureSelector.children().show();
    });




})