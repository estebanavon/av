
    $(document).ready(function(){

    
        var userLogin = AvonAnalyticsObjex.Profile.repAcct.toString();
        var webCampaing = parseInt(AvonAnalyticsObjex.Profile.campaignInfo.split("C").pop(), 10);
        var baseUrl = '/SLSuite/static/reportes/ReporteGana/ReporteGanancias_';
        var baseUrlCampaing = './static/reportes/reportes_arbol/arbol_';
        var currentYear = new Date().getFullYear();
        var lastYear = parseInt(currentYear) - 1;
        var html = '';
        var my_string = '';
        var link = '';
        var y = "";
        var groupCampaing1 = ['19', '18', '17'];
        var groupCampaing2 = ['01', '19', '18'];
        var groupCampaing3 = ['02', '01', '19'];
        var comision = "";

        function agregaCeros(userLogin, length) {
            my_string = '' + userLogin;
            while (my_string.length < length) {
                my_string = '0' + my_string;
            }
            return my_string;
        };
        
        var user = agregaCeros(userLogin, 11);
        

        var cero;
        function ceroFunction(c, i) {
            if (c >= 13) {
                cero = ''
            } else if (c <= 10) {
                cero = '0'
            } else {
                switch (c) {
                    case 11:
                        if (i == 1) {
                            cero = ''
                        } else {
                            cero = '0'
                        }
                        break
                    case 12:
                        if (i == 3) {
                            cero = '0'
                        } else {
                            cero = ''
                        }
                        break
                }
            }
            return cero
        };
        var i;
        
        if (webCampaing == 1) {
            for (i = 0; i < groupCampaing1.length; i++) {
                html += "<div class='col-sm load-wrapp contReport'><a href='" + baseUrlCampaing + lastYear + groupCampaing1[i] + "_" + user + ".pdf' class='btn btn-primary text-dark' target='_blank'><img src='https://qaf.do.avon.com/FLDSuite/static/images/pronto_pago/img/reporte1.png' ><br>CampaÃ±a <span class='rdBtn'> " + groupCampaing1[i] + "</span></a></a></div>";
            }
        } else if (webCampaing == 2) {
            for (i = 0; i < groupCampaing2.length; i++) {
                if (i >= 1) {
                    y = lastYear;
                } else {
                    y = currentYear
                }
                html += "<div class='col-sm load-wrapp contReport'><a href='" + baseUrlCampaing + y + groupCampaing2[i] + "_" + user + ".pdf' class='btn btn-primary text-dark' target='_blank'><img src='https://www.do.avon.com/FLDSuite/static/images/pronto_pago/img/reporte1.png' ><br>Campaña <span class='rdBtn'> " + groupCampaing2[i] + "</span></a></a></div>";
            }
        } else if (webCampaing == 3) {
            for (i = 0; i < groupCampaing3.length; i++) {
                if (i >= 2) {
                    y = lastYear;
                } else {
                    y = currentYear
                }
                html += "<div class='col-sm load-wrapp contReport'><a href='" + baseUrlCampaing + y + groupCampaing3[i] + "_" + user + ".pdf' class='btn btn-primary text-dark' target='_blank'><img src='https://www.do.avon.com/FLDSuite/static/images/pronto_pago/img/reporte1.png' ><br>Campaña <span class='rdBtn'> " + groupCampaing3[i] + "</span></a></a></div>";
            }
        } else if (webCampaing >= 4) {
            for (i = 1; i <= 3; i++) {
                html += "<div class='col-sm load-wrapp contReport'><a href='" + baseUrlCampaing + currentYear + ceroFunction(webCampaing, i) + (webCampaing - i) + "_" + user + ".pdf' class='btn btn-primary text-dark' target='_blank'><img src='https://www.do.avon.com/FLDSuite/static/images/pronto_pago/img/reporte1.png' ><br>Campaña <span class='rdBtn'> 0" + (webCampaing - i) + "</span></a></a></div>";
            }
        };


        $('#botones').append(html);


     

        if (campaing == "") {
            $("#campaing").append("<img src='/FLDSuite/static/images/pronto_pago/img/no_reporte.jpeg' style='width: 830px;'>");
        } else {
            for (var i = 0; i < segmento.length; i++) {
                if (segmento[i] == userLogin) {
                    comision = "<img src='/FLDSuite/static/images/pronto_pago/img/no_comision.jpeg' style='width: 830px;'>"
                    break;
                } else {
                    if (campaing > webCampaing) {
                        link = baseUrl + lastYear + campaing + "_" + user + ".pdf";
                    } else {
                        link = baseUrl + currentYear + campaing + "_" + user + ".pdf";
                    }
                    comision = "<a id='reporteGanancia' href='" + link + "' target='_blank'><img src='/FLDSuite/static/images/pronto_pago/img/reporte_slide.jpeg' style='width: 830px;'></a>"

                }
            }

            $("#campaing").append(comision);

        };
    });