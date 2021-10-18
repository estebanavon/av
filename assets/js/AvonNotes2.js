$(document).ready(function(){
    $('.av-overlay').click(function(){
        $('#avOverlay').show();
        var docURL = $(this).attr('value');
        $('.av-modal-content').append('<img style="height: 80vh;" src="../img/responsabilidad-social/'+ docURL +'.jpg" />')
    });
    $(".avClose").click(function () {
        $('#avOverlay').hide();
        $('.av-modal-content').children().eq(1).remove();
    });
})