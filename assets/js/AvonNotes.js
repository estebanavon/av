$(document).ready(function(){
  var second = false;
  $('#submitButton').click(function(){
    if (second){
      $('#avOverlay').show()
    } else {
      $('#registroHelper').text('Tu registro es incorrecto, por favor, revísalo nuevamente');
      $('.av-helper,.av-input,label').addClass('av-error').removeClass('av-focus');
      $('.av-error-message').show()
      second = true;
    }
  });
  $('.av-input').click(function(){
    $(this).removeClass('av-error');
    $('.av-focus').removeClass('av-focus');
    $('.av-error').removeClass('av-error');
    $(this).prev().addClass('av-focus');
  });
  $('#closeMessage').click(function(){
    $(this).parent().hide();
  })
  $(".avClose").click(function () {
      $('#avOverlay').hide();
  });
});