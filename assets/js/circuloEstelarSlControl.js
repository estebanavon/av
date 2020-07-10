$(document).ready(function () {

  
    var avFiles0 = [
        {
            name: 'Portada de facebook 4',
            file: 'ce-portada-4.png',
        },
        {
            name: 'Post redes sociales 1',
            file: 'ce-post-1.png',
        },
        {
            name: 'Post redes sociales 2',
            file: 'ce-post-2.png',
        },
        {
            name: 'Círculo estelar, gif promocional',
            file: 'ce-gif-1.gif',
        },
        
    ];
    
    const avNumber = $('.optionControl').attr('value');
 
  
    var avLoaOptions = [
        '<h4 class="active" value="1">Primera campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="2">Segunda campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="3">Tercera campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="4">Cuarta campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="5">Quinta campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="6">Sexta campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="7">Septima campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="8">Octava campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
        '<h4 value="9">Novena campaña<span class="material-icons">keyboard_arrow_right</span></h4>',
    ];
    for (i=0; i <= avNumber; i++){
        $('.optionControl').append(avLoaOptions[i-1]);
    }
    
    var i;
    var avArrayPrintContent = ["","","","","","","","","","",""];
    
    for (i = 0; i < avFiles0.length; i++) {
        avArrayPrintContent[0] += '<li>' +
            '<span>' + avFiles0[i].name + '</span>' +
            '<span class="av-list-spacer"></span>' +
            '<a class="av-button-icon av-tooltip" href="/REPSuite/static/images/training/' + avFiles0[i].file + '" target="_blank"><span class="material-icons">visibility</span><span class="tooltiptext">Previsualizar</span></a>' +
            '<a class="av-button-icon av-tooltip" href="/REPSuite/static/images/training/' + avFiles0[i].file + '" download><span class="material-icons">cloud_download</span><span class="tooltiptext">Descargar</span></a>'+
            '</li>';
    }
    
    var avArrayPrint = "";
    for (i=0; i<avNumber;i++){
        avArrayPrint += '<div class="av-list-container"><ol class="av-list av-list-doc">'+ avArrayPrintContent[i] +'</ol></div>'  
    }
    $('.optionDisplay').append(avArrayPrint);
    $('.optionDisplay').children().eq(1).addClass('active');
    
});