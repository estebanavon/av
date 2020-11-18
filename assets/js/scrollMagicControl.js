$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
        triggerElement: '.avHero',
        triggerHook: 0,
        duration:'100%',
    })
    .setPin('.avHero', {pushFollowers:false})
    .addTo(controller);
    
    var pinSceneHowTo = new ScrollMagic.Scene({
        triggerElement: '.howTest',
        triggerHook: 0.1,
        duration:'200%',
    })
    .setPin('.howTest', {pushFollowers:false})
    .addTo(controller);
    

    $(".av-fade,.av-fade-reverse").each(function(){
        var scene = new ScrollMagic.Scene({
            duration: '110%',
            triggerElement: this,
            triggerHook: 0.85,
        })
        .setClassToggle(this, 'fade-active')
        .addTo(controller);
    });

    $('.av-prllx-container').each(function(){
        var selector = $(this).children('.av-prllx-image');
        var slideParllax = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '400%' 
        })
        .setTween(TweenMax.from(selector,0.5,{y:'-40%',ease:Power0.easeNone}))
        .addTo(controller);
    });

    

});


