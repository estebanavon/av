
var avModalCountdowm = '<div id="avCounter" style="width: 470px;padding: 20px;background-image: linear-gradient(to right, #9113B0, #C1047E, #E23679);text-align: center;">'+
            '<div style="background-color: #fff; border-radius: 0px 0px 100px 0px;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">'+
                '<img src="/REPSuite/static/images/home/toda_latino.jpg" /><h1 style="font-weight: 900;font-family: Zona Pro;color: #1a8282;font-size: 18px;text-align: center;letter-spacing: 0.125rem;text-transform: uppercase;" id="headline">Faltan solo:</h1>'+
                '<div id="countdown" style="width: 100%; padding:0px 30px;box-sizing: border-box;">'+
                '<div style="display: flex; justify-content: space-between;text-transform: uppercase;margin-top:40px;font-family:montserrat-bold,\'Arial Black\',Gadget,sans-serif;">'+
                    '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="days"></p><p>Days</p></div>'+
                    '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="hours"></p><p>Hours</p></div>'+
                    '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="minutes"></p><p>Minutes</p></div>'+
                    '<div><p style="font-size: 2.5rem;color: #7f28c4;margin-bottom: 14px;" id="seconds"></p><p>Seconds</p></div>'+
                '</div></div>'+
                '<div id="content" style="display: none; font-size: 4rem;">'+
                    '<p style="font-weight: 900;font-family: Zona Pro;color: #1a8282;font-size: 18px;text-align: center;letter-spacing: 0.125rem;text-transform: uppercase;">'+
                        'Disfruta de las increíbles sorpresas que tenemos para tí. Porque te mereces todo esto y mucho más.</p>'+
                '<span>🥳</span><span>🎉</span><span>🎂</span>'+
                '</div><img style="margin-top:10px;" src="/REPSuite/static/images/home/encuentro_virtual.jpg" /></div></div>';
                
if (sessionStorage.getItem("homeModalClosed") != "true") {
    $('.av-modal-hcontainer').append(avModalCountdowm);
    $('.av-modal-hbuttons').prepend('<p style="padding: 0 35px;" class="av-text">Tenemos noticias para ti:</p><div class="avModalButtonCounter avModalButton" av-data="10">Día de la representante</div>');
    
};
$(".av-modal-himage").hide();
$(".avModalButton").click(function(){
    $('.av-modal-himage').show().next().hide();
});
$('.avModalButtonCounter').click(function(){
    $('#avCounter').show().prev().hide();
    $(this).addClass('active').siblings().removeClass('active');
});
(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let theday = "Jun 04, 2021 17:00:00",
        countDown = new Date(theday).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "¡El día de la representante está aquí!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());