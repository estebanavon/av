
window.onload = function(){
    var berilio = [
      '2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
    ];
  
  var zone = AvonAnalyticsObjex.Profile.zone;
  //var zone = "2702";
  var zoneMaster = [berilio];
  
  var i,slPrint;
  var e = 0;
  
  while (e < zoneMaster.length) {
    for (i=0; i < zoneMaster[e].length; i++){
      if (zone == zoneMaster[e][i]) {
        slPrint = 'berilio';
      }  
    }
    e++
  }
  if (slPrint != 'berilio'){
    slPrint = '';
  } 
  
  const constCampaign = '11';
  
  
  document.getElementById('sinergiaBox').innerHTML +=
  '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c0'+ (constCampaign - 2) + ''+ slPrint +'.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
  '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C0'+ (constCampaign - 2) + 'c_sinergia.jpg" alt="Descargables"></div>'+
  '<div class="av-card-text"><h4 class="av-card-title">Sinergia '+ (constCampaign - 2) + ' ' + slPrint.toUpperCase() +'</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
  '<span class="av-button-tertiary">VER</span></div></div></a></div>';
  
  document.getElementById('sinergiaBox').innerHTML +=
  '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c'+ (constCampaign - 1) + slPrint +'.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
  '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C'+ (constCampaign - 1) + 'c_sinergia.jpg" alt="Descargables"></div>'+
  '<div class="av-card-text"><h4 class="av-card-title">Sinergia '+ (constCampaign - 1) + ' ' + slPrint.toUpperCase() +'</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
  '<span class="av-button-tertiary">VER</span></div></div></a></div>';
  
  document.getElementById('sinergiaBox').innerHTML +=
  '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c'+ constCampaign + slPrint +'.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
  '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C'+ constCampaign +'c_sinergia.jpg" alt="Descargables"></div>'+
  '<div class="av-card-text"><h4 class="av-card-title">Sinergia '+ constCampaign + ' ' + slPrint.toUpperCase() +'</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
  '<span class="av-button-tertiary">VER</span></div></div></a></div>';
  
  
  
  
  };