$(document).ready(function(){
    var avBerilio = ['2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710'];
    var d = AvonAnalyticsObjex.Profile.zone;
    if (window.location.href.indexOf("PlaceAnOrder") > -1 && avBerilio.includes(d)) {} else {
        $('#frmSelectCampaign').find('.padding_left20.blk_main_heading24').children().eq(0).remove();
        $('#frmSelectCampaign').find('.padding_left20.blk_main_heading24').append('<a href="/REPSuite/static/videos/sweetHonestyveaNacionalc20_21.mp4" target="_blank"><img src="/REPSuite/static/images/home/sweetHonesty.jpg" class="d-block w-100" alt="Sweet Honesty" /></a>');
    }
});