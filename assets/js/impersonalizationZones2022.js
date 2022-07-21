$(document).ready(function(){
    var avZona = AvonAnalyticsObjex.Profile.zone;
    var avZonaAvailable = [
        "0449","0643","0645","0679","0678","0831","0829","0646","0640","0648","0651","0649","0202","0201","0204","0205","0652","0209","0908","0914","2700","2709","2706","2701","2702","1519","1510","1514","1538","2711","1520","0627","0468","0604","0467","0382","0105","0113","0114","0116","0117","0115","0109","0107","0792","0777","2750","0797","0799","0758","0783","0759","0766","0767","0329","0342","0325","0334","0345","0349","0344","2300","0441","0336","0331","1515","0326","0360","1142","0253","0254","0250","0256","0252","0255","0257","0155","0164","0165","0166","0152","0163","0156","0190","0171","0150","0172","0437","0161","0159","0160","0162","0059","0067","0069","0063","0060","0016","0074","0075","0062","0019","0050","0061","0015","0064","0424","0412","0419","0413","0037","0138","010","0025","0005","0142","0014","0022","0033","0021","2052","0897","0896","0950","0895","0898","0969","0980","0890","0882","0894","0888","0036","0563","0548","0567","0549","0544","0543","0550","0034","0553","0570","0547","0546","0545","0556","0572","0551","0132","0131"
    ]
    if (avZonaAvailable.includes(avZona)){
        $('.gppDeployment.slide').append('<img id="zipDownload" src="/REPSuite/static/images/home/bannerNombraFacilplusZonas.jpg" class="d-block w-100" alt="slider3">')
    }else {
        $('.gppDeployment.slide').next().addClass('active');
        $('.gppDeployment').remove();
    }
    var zip = new JSZip()
    $('#zipDownload').click(function () {
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs('https://gi3-mx.qaf.avon.com/REPSuite/static/images/home/bannerNombraFacilplusZonas.jpg','bannerNombraFacilplusZonas.jpg');
        saveAs('https://gi3-mx.qaf.avon.com/REPSuite/static/images/home/banner_covid.jpg','banner_covid.jpg');
      })
    })
});