
let triggerDelay = 100;
let removeDelay = 1000;
let url_arr=['https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/FashionNHomeMx5_22.pdf','https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/BellezaMx5_22.pdf'];
var i;

$(document).ready(function(){
  $('.test').click(function(){
    $(this).downloadURL('https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/FashionNHomeMx5_22.pdf')
    for (i=0;i<url_arr.length;i++){
      createIFrame(url_arr[i], i * triggerDelay, removeDelay);
    }
  });
  
  function createIFrame(url, triggerDelay, removeDelay) {
      //Add iframe dynamically, set SRC, and delete
      setTimeout(function() {
          var frame = $('<iframe style="display: none;" class="multi-download"></iframe>');
          frame.attr('src', url);
          $(document.body).after(frame);
          setTimeout(function() {
              frame.remove();
          }, removeDelay);
      }, triggerDelay);
  }
  
});
