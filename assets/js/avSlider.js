$(document).ready(function(){
    var avhContent = [
        {
            image:'slider-home.jpg',
            title:'Círculo estelar',
            description:'Programa de reconocimiento y entrenamiento.<br /> ¡Cónocelo!',
            target:'self',
            url: '/REPSuite/circulo_estelar.page',
        },
        {
            image:'slider-home.jpg',
            title:'Title three, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
        {
            image:'esr-2.jpg',
            title:'Title one, an a robust one',
            description:'Muchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para poder darle estilos a esta nueva innovacion en el home del mxMuchos texto de prueba para',
            target:'self',
            url: 'https://www.example.com',
        },
    ]

    // Termina la seccion editable
    // Customize section ends

    

    var avSliderContructor= [avhContent];
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
    var avhPrint = [""];
    for (i = 0; i < 3; i++) {
        avhPrint[e] += '<div class="av-slider-item">' +
            '<div class="av-slider-image"><a href="'+ avSliderContructor[e][i].url +'" target="_'+ avSliderContructor[e][i].target +'"><img src="/REPSuite/web/static/home_2018/img/' + avSliderContructor[e][i].image +'" alt="Algo no salió como esperado, disculpa las molestias" /></a></div>' +
            '<div class="av-slider-text"><h3 class="av-slider-title">' + avSliderContructor[e][i].title +'</h3><p>' + avSliderContructor[e][i].description +'</p>' +
            '<span></span><a href="'+ avSliderContructor[e][i].url +'" target="_'+ avSliderContructor[e][i].target +'" class="av-slider-link">ir</a>' +
            '</div></div>'
    }
    $("#avData").append(avhPrint[0]);
    $("#avData").children().eq(0).addClass("active");

    bookFunction()
    function bookFunction(){
        $('.book-wrapper').find('.animationbook').removeClass('animationbook').siblings().addClass('animationbook');
        setTimeout(function(){
            $('.animationbook').css("zIndex","5").siblings().css("zIndex","1");
        },500);
        setTimeout(function(){bookFunction();},5500);
    }
    
    $(window).scroll(function(){
        let documentScroll = $(document).scrollTop();
        if (documentScroll > 50){
            $(".av-header").addClass("av-header-white");
        } else {
            $(".av-header").removeClass("av-header-white");
        }
    });
});


