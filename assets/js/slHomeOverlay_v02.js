
let link = 'https://avon.co1.qualtrics.com/jfe/preview/SV_eEsdN0lWcy7mi0J?Q_CHL=preview&Q_SurveyVersionID=current';
let img = 'surveyBanner.gif';

if (sessionStorage.getItem("homeModalClosed") != "true") {
    $('body').append('<div id="avOverlay" class="av-modal"><div class="av-modal-background avClose" style="width: 100%;height: 100vh;' +
        'background-color: rgba(0, 0, 0, 0.1);position: fixed;top: 0;z-index: 9990;left: 0;"></div>' +
        '<div style="z-index: 9999;">' +
        '<div class="av-modal-content animated bounce">' +
        '<a class="av-modal-close avClose">Ã—</a>' +
        '<div>' +
        '<a href="' + link + '" target="_blank"><img src="/REPSuite/static/home_2018/img/' + img + '"></a>' +
        '</div></div></div></div>');

} else {
    $('#avOverlay').hide();
}

$(".avClose").click(function () {
    $('#avOverlay').hide();
    sessionStorage.setItem("homeModalClosed", "true");
});