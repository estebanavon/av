
window.onload = function(){
    var norte = [
      "362","363","364","365","366","367","368","369","370","371","445","446","447","448","449","453","454","457","460","461",
      "462","465","466","469","470","471","643","645","647","650","654","661","662","663","664","665","666","667","677","678",
      "679","675","682","802","803","804","805","806","807","808","809","810","811","816","819","820","821","822","828","829",
      "831","668","669","670","854","855","856","857","858","859","860","861","862","863","866","873","874","200","201","202",
      "203","204","205","208","636","637","638","640","641","646","648","649","651","652","207","209","210","903","905","906",
      "907","908","911","912","913","914","917","918","919","921",
    ]
    var berilio = [
      '2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
    ];
  
    var sur = [
      "758","759","766","767","768","770","771","777","783","784","785","786","787","788","792","797","799","325","326",
      "329","331","334","335","336","337","338","342","343","344","345","349","351","352","355","357","360","441","1515","150","152",
      "155","156","158","159","160","161","162","163","164","165","166","171","172","190","437","440","15","16","19","50","51",
      "54","58","59","60","61","62","63","64","67","68","69","70","71","72","73","74","75","1133","1137","1138","1139","1141","1142",
      "1143","1430","1431","1432","1433","1434","1435","1436","1437","1438","1439","1440","1441","1442","1443","1700","1701","250","252",
      "253","254","255","256","257","261","262","263","264","269","270","271","272","273","275","276",
      "277","279","293",
    ]
    var centro = [
      "1130","1131","1132","1134","1135","1136","1140","1144","1145","1600","1601","1602","1603","1604","1605",
      "1606","1607","1608","1610","1611","1612","1613","1614","600","605","619","621","721","722","724","725","727","728","729",
      "730","732","735","736","738","739","740","737","1230","1231","1232","1233","1234","1235","1236","1237","1238","1239",
      "1242","1332","1333","1335","1336","1337","1338","1339","1340","1341","1342","1343","1344","602","607","622","624","627",
      "1502","1510","1511","1513","1514","1516","1517","1518","1519","1520","1534","1536","1537","1538","372","373","374","375",
      "376","379","380","381","382","467","468","603","604","606","608","609","614","615","629","90","93","99","100","101","102",
      "103","104","105","107","108","109","113","114","115","116","117","1240","1241","1244","1609",
    ]
    var norEste = [
      "400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","418","419","424",
      "434","442","2","3","4","5","10","11","12","13","14","20","21","22","25","27","28","33","37","138","139","141","142","143",
      "148","881","882","883","884","888","890","894","895","896","897","898","950","951","958","959","960","961","962","964","965",
      "969","980","34","36","543","544","545","546","547","548","549","550","551","553","556","560","561","562","563","567","570",
      "572","131","132","133","134","1330","1331","1334","1444","1445","1702","1703","1704","1705","1706","1707","1708","1709","1710",
      "1711","1712","1713","1714","211","212","213","214","480","481","482","483","486","488","489","490",
      "491","495","496","538","892","893","953","954","955","956",
    ]
     
  var zone = AvonAnalyticsObjex.Profile.zone;
  //var zone = "2702";
  //var zoneMaster = [norte,sur,centro,norEste];
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
 debugger;

  document.getElementById('sinergiaBox').innerHTML +=
  '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c06.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
  '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C06a2_sinergia.jpg" alt="Descargables"></div>'+
  '<div class="av-card-text"><h4 class="av-card-title">Sinergia 06</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
  '<span class="av-button-tertiary">VER</span></div></div></a></div>';

  document.getElementById('sinergiaBox').innerHTML +=
  '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c07.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
  '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C07c_sinergia.jpg" alt="Descargables"></div>'+
  '<div class="av-card-text"><h4 class="av-card-title">Sinergia 07</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
  '<span class="av-button-tertiary">VER</span></div></div></a></div>';

  document.getElementById('sinergiaBox').innerHTML +=
  '<div class="col"><a href="/SLSuite/static/pdf/sinergia/sinergia_c08'+ slPrint +'.pdf" target="_blank" class="av-card-link"><div class="av-card">'+
  '<div class="av-card-image"><img class="w-100 av-fallback" src="/SLSuite/static/images/sinergia/img/C08c_sinergia.jpg" alt="Descargables"></div>'+
  '<div class="av-card-text"><h4 class="av-card-title">Sinergia 08 '+ slPrint +'</h4><p class="av-text">Haz clic sobre la campaña que deseas descargar</p>'+
  '<span class="av-button-tertiary">VER</span></div></div></a></div>';




};