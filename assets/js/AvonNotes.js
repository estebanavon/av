

$(document).ready(function(){
  const berilio = [
      '2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
  ];
  const norte = [
    "0372","0373","0374","0375","0376","0379","0380","0381","0382","0467","0468","0603","0604","0608","0609","0615","0629","2350","1130","1131","1132","1134","1135","1136","1140","1144","1145","1600","1601","1602","1604","1606","1607","1608","1610","1611","1612","1613","1614","1900","1230","1231","1232","1233","1236","1237","1242","1332","1333","1335","1336","1337","1338","1339","1340","1341","1342","1343","1344","2400","2401","2403","0602","0605","0607","0622","0624","0627","1502","1510","1511","1513","1514","1516","1517","1518","1519","1520","1534","1536","1537","1538","2711","0090","0093","0099","0100","0101","0102","0103","0104","0105","0107","0108","0109","0113","0114","0115","0116","0117","1240","1241","1244","1609"
  ];
  const sur = [
    "0150","0152","0155","0156","0158","0159","0160","0161","0162","0163","0164","0165","0166","0171","0172","0190","0437","0440","0015","0016","0019","0050","0051","0054","0058","0059","0060","0061","0062","0063","0064","0067","0068","0069","0070","0071","0072","0073","0074","0075","0758","0759","0766","0767","0768","0777","0783","0784","0785","0786","0787","0788","0792","0797","0799","2750","0325","0326","0329","0331","0334","0335","0336","0337","0338","0342","0343","0344","0345","0349","0355","0357","0360","0441","1515","2300","0250","0252","0253","0254","0255","0256","0257","0262","0263","0264","0269","0270","0271","0272","0273","0277","0279","2250","2251","1133","1137","1138","1139","1141","1142","1143","1430","1431","1433","1434","1435","1437","1438","1439","1440","1441","1442","1443","1700","1701","1800"
  ];
  const centro = [
    "0362","0363","0366","0367","0368","0370","0445","0446","0447","0449","0453","0454","0460","0461","0462","0465","0466","0469","0470","0471","2450","2451","2452","0643","0645","0647","0650","0654","0661","0662","0663","0666","0667","0677","0678","0679","2650","0207","0209","0210","0903","0905","0906","0907","0908","0911","0912","0913","0914","0917","0918","0919","0921","0675","0682","0802","0804","0805","0806","0807","0810","0811","0816","0819","0820","0821","0828","0829","0831","2800","2801","0668","0669","0670","0854","0855","0856","0857","0858","0859","0860","0861","0862","0863","0866","0873","0874","0200","0201","0202","0203","0204","0205","0208","0636","0637","0638","0640","0641","0646","0648","0649","0651","0652"
  ];
  const norEste = [
    "0034","0036","0543","0544","0545","0546","0547","0548","0549","0550","0551","0553","0556","0560","0561","0562","0563","0567","0570","0572","0212","0213","0480","0483","0486","0488","0489","0490","0491","0495","0496","0538","0892","0893","0953","0956","2500","2501","2502","0881","0882","0883","0884","0888","0890","0894","0895","0896","0897","0898","0950","0951","0958","0959","0960","0961","0962","0964","0965","0969","0980","0400","0401","0402","0403","0404","0405","0406","0409","0410","0411","0412","0413","0414","0415","0416","0418","0419","0424","0434","0442","2000","0002","0003","0004","0005","0010","0011","0012","0014","0021","0022","0025","0033","0037","0138","0139","0142","0148","2050","2051","2052","0131","0132","0133","0134","1330","1331","1334","1444","1445","1702","1703","1704","1705","1706","1707","1708","1709","1710","1711","1712","1713","1714"
  ];
  
  var zone = AvonAnalyticsObjex.Profile.zone;
  //var zone = "0150";
  var zoneMaster = [berilio,norte,sur,centro,norEste];
  var zoneMasterStringPdf = ['berilio','norte','sur','norEste_centro','norEste_centro'];
  var zoneMasterStringLabel = ['berilio','norte','sur','NorEste y Centro','NorEste y Centro'];

  var i,slPrintLabel,slPrintPdf;
  var e = 0;
  while (e < zoneMaster.length) {
    if(zoneMaster[e].includes(zone)){
      slPrintPdf = zoneMasterStringPdf[e];
      slPrintLabel = zoneMasterStringLabel[e];
    }
    e++
  }
  var htmlPrint = ['','','']
  var hotfix = ['_22','','_22']

  function slPrintPdfFunction(i,slPrintPdf){
    switch (i){
      case 1:
        slPrintPdf = slPrintPdf;
        break
      default:
        if(zoneMaster[0].includes(zone)){
          if(i == 0) {slPrintPdf = '_22berilio';}
          else {slPrintPdf = 'berilio';}
        } else {
          slPrintPdf = hotfix[i];
        }
    }
    return slPrintPdf
  }


  function slPrintLabelFunction(i,slPrintLabel){
    switch (i){
      case 1:
        slPrintLabel = slPrintLabel;
        break
      default:
        if(zoneMaster[0].includes(zone)){
          slPrintLabel = 'berilio';
        } else {
          slPrintLabel = '';
        }
    }
    return slPrintLabel
  }

  for(i=0;i<=2;i++){
      htmlPrint[i] = 
      '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c0'+ (constCampaign - i) + slPrintPdfFunction(i,slPrintPdf) +'.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
      '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C0'+ (constCampaign - i) + 'c_sinergia.jpg" alt="Descargables"></div>'+
      '<div class="av-card-text"><h4 class="av-card-title">Sinergia 0'+ (constCampaign - i) + ' ' + slPrintLabelFunction(i,slPrintLabel).toUpperCase() +'</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
      '<span class="av-button-tertiary">VER</span></div></div></a></div>';
  }
  $('#sinergiaBox').append(htmlPrint[2]).append(htmlPrint[1]).append(htmlPrint[0]);

});

