

        var numCamp = "02";
        var year = "2021";
        var mercado = "mexico";
    
        const brochureUp = [
            {
                numPag:'_01',
                descripcion: 'Belleza',
            },
            {
                numPag:'_02',
                descripcion: 'F&H',
            },
            {
                numPag:'_03',
                descripcion: 'Rutinas Anew',
            },
            {
                numPag:'_04',
                descripcion: 'Limpieza Total',
            },
           {
                numPag:'_05',
                descripcion: 'Cuidados Higienicos',
            },
           {
                numPag:'_06',
                descripcion: 'F&H Home Office',
            },
            {
                numPag:'_07',
                descripcion: 'Cuidado del Pelo',
            },
            {
                numPag:'_08',
                descripcion: 'Cuidados básicos',
            },
            {
                numPag:'_09',
                descripcion: 'Cuidados facial',
            },
        ];
    
    
    // Campaña de Abajo
    
        var numCampDown = "01";
        var yearDown = "2021";
        var mercado = "mexico";
        
        const brochureDown = [
        {
                numPag:'_01',
                descripcion: 'Belleza',
            },
            {
                numPag:'_02',
                descripcion: 'F&H',
            },
            {
                numPag:'_03',
                descripcion: 'Rutinas Anew',
            },
            {
                numPag:'_15',
                descripcion: 'Cyber Weekend',
            },
            {
                numPag:'_04',
                descripcion: 'Limpieza Total',
            },
           {
                numPag:'_05',
                descripcion: 'Cuidados Higienicos',
            },
           
        ];
    













        var avArrayPrintContentBrochure = ["",""];

        
        for (i = 0; i < brochureUp.length; i++) {
            avArrayPrintContentBrochure[0] += '<div class="itemsIm">'+
            '<div><iframe class="img-responsive img-folleto"'+
            'src="https://viewer.ipaper.io/avon-nola/'+ mercado +'/'+ numCamp +'/'+ year + numCamp + brochureUp[i].numPag +'/-/embedded/flat/singlepage/1/"'+
            'style="display:block;height:350px;" scrolling="no" frameborder="0"></iframe>'+
            '<a class="btn btn-violet-complete text-center" href="https://catalogo.avon.mx/'+ numCamp +'/'+ year + numCamp + brochureUp[i].numPag +'/" '+
            'target="_blank">'+ brochureUp[i].descripcion +'</a></div></div>'
        }
        for (i = 0; i < brochureDown.length; i++) {
            avArrayPrintContentBrochure[1] += '<div class="itemsIm">'+
            '<div><iframe class="img-responsive img-folleto"'+
            'src="https://viewer.ipaper.io/avon-nola/'+ mercado +'/'+ numCampDown +'/'+ yearDown + numCampDown + brochureDown[i].numPag +'/-/embedded/flat/singlepage/1/"'+
            'style="display:block;height:350px;" scrolling="no" frameborder="0"></iframe>'+
            '<a class="btn btn-violet-complete text-center" href="https://catalogo.avon.mx/'+ numCampDown +'/'+ yearDown + numCampDown + brochureDown[i].numPag +'/" '+
            'target="_blank">'+ brochureDown[i].descripcion +'</a></div></div>'
        }

        document.getElementById("dad").innerHTML+= avArrayPrintContentBrochure[0];
        document.getElementById("dad2").innerHTML+= avArrayPrintContentBrochure[1];

 
        var campTit  = document.getElementById("campTit");
        campTit.textContent = numCamp;
        
        var campTit_  =document.getElementById("campTit_");
        campTit_.textContent = numCampDown;
    
    



