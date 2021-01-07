$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
        triggerElement: '.avHero',
        triggerHook: 0,
        duration:'100%',
    })
    .setPin('.avHero', {pushFollowers:false})
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

    var pinSceneConcert = new ScrollMagic.Scene({
        triggerElement: '#avStepImage',
        triggerHook: 0.15,
        duration:'275%',
    })
    .setPin('#avStepImage', {pushFollowers:false})
    .addTo(controller);
    var pinSceneConcert2 = new ScrollMagic.Scene({
        triggerElement: '#avStepImage',
        triggerHook: 0.15,
        duration:'15%',
    })
    .setPin('.step1', {pushFollowers:true})
    .addTo(controller);
    var sceneClass2 = new ScrollMagic.Scene({
        triggerElement: '.step2',
        triggerHook: 0.3,
        duration:'85%',
    })
    .setClassToggle('#avStepImage','av-concert2')
    .addTo(controller);
    var sceneClass3 = new ScrollMagic.Scene({
        triggerElement: '.step3',
        triggerHook: 0.3,
        duration:'67%',
    })
    .setClassToggle('#avStepImage','av-concert3')
    .addTo(controller);
    var sceneClass4 = new ScrollMagic.Scene({
        triggerElement: '.step4',
        triggerHook: 0.48,
        duration:'150%',
    })
    .setClassToggle('#avStepImage','av-concert4')
    .addTo(controller);
    var pinSceneConcert3 = new ScrollMagic.Scene({
        triggerElement: '#avStepImage2',
        triggerHook: 0.15,
        duration:'110%',
    })
    .setPin('#avStepImage2', {pushFollowers:false})
    .addTo(controller);

});


