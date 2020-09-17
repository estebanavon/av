$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
        triggerElement: '.avHero',
        triggerHook: 0,
        duration:'70%',
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

    $(window).scroll(function(){
        let documentScroll = $(document).scrollTop();
        if (documentScroll > 200){
            $(".av-header").addClass("av-header-white");
        } else {
            $(".av-header").removeClass("av-header-white");
        }
    });

});


