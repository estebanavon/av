$(document).ready(function(){
    var banner = '<div class="col-xs-12"><a href="https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/flyerVentaNocturnaAvonC6.1.pdf" target="_blank"><img style="width:100%; margin-top:15px;" src="/REPSuite/web/static/images/banners/flyerVentaNocturnaAvonC6Banner.jpg"></a></div>';
    var d = AvonAnalyticsObjex.Profile.zone;
    var NCMzone = [
        '2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
    ];
    if (NCMzone.includes(d)) {
        $('#row').append(banner)
    }
})
