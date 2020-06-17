$(document).ready(function(){
    var campaignSwitch = true;
    var avhContent = [
        {
            image:'example.jpg',
            title:'Title two, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
        {
            image:'example.jpg',
            title:'Title three, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
        {
            image:'example.jpg',
            title:'Title one, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
    ]
    var avhContentDuplicate = [
        {
            image:'example.jpg',
            title:'Title one, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
        {
            image:'example.jpg',
            title:'Title one, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
        {
            image:'example.jpg',
            title:'Title one, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
    ]

    // Termina la seccion editable
    // Customize section ends

    

    var avSliderContructor= [avhContent,avhContentDuplicate];
    var slideIndex = 2;
    var timeOut;
    
    avShowSlide(2,0,true);

    function avShowSlide(n,e,s){ 
        if (slideIndex == n){
            slideIndex = e;
        } else {
            if(s){
                slideIndex++;
            } else {
                slideIndex--;
            };
        }
        const avSelector = $('#avData').children();
        avSelector.eq(slideIndex).addClass("active").siblings().removeClass("active");
        timeOut = setTimeout(function(){avShowSlide(2,0,true);},4500);
    }

    $("#avDataFw").click(function(){
        clearTimeout(timeOut);
        avShowSlide(2,0,true);
    });
    $("#avDataBk").click(function(){
        clearTimeout(timeOut);
        avShowSlide(0,2,false);
    });
   
    var i;
    var e = 0;
    var avhPrint = ["",""];
    while (e<2){
        for (i = 0; i < 3; i++) {
            avhPrint[e] += '<div class="avh-slider-item">' +
                '<div class="avh-slider-image"><img src="' + avSliderContructor[e][i].image +'" alt="Algo no salió como esperado, disculpa las molestias" /></div>' +
                '<div class="avh-slider-text"><div class="wrapper"><h3 class="avh-slider-title">' + avSliderContructor[e][i].title +'</h3><p class="avh-slider-desc">' + avSliderContructor[e][i].description +'</p></div>' +
                '<a href="'+ avSliderContructor[e][i].url +'" target="_'+ avSliderContructor[e][i].target +'" class="avh-slider-button">ir</a>' +
                '</div></div>'
        }
        e++;
    }
    
    if (campaignSwitch){
        $("#avData").append(avhPrint[0]);
    } else {
        $("#avData").append(avhPrint[1]);
    }
    $("#avData").children().eq(0).addClass("active");

    bookFunction()
    function bookFunction(){
        $('.p-relative').find('.animationbook').removeClass('animationbook').siblings().addClass('animationbook');
        setTimeout(function(){
            $('.animationbook').css("zIndex","5").siblings().css("zIndex","1");
        },500);
        setTimeout(function(){bookFunction();},5500);
    }
    

});