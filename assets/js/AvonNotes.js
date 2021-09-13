let avData = [
	{
		title: 'Menú DOP Nacional',
		file: 'DOPNavidad21.pdf',
		type: 'flyer',
	},
	{
		title: 'Invitación Día de la Oportunidad Navidad 2021',
		file: 'InvitacionDiaOportunidadNavidad2021.pdf',
		type: 'flyer',
	},
	{
		title: 'Infografía Gerente de zona',
		file: 'InfografiaGerenteDeZona.pdf',
		type: 'flyer',
	},
	{
		title: 'Infografía Empresaria',
		file: 'InfografiaEmpresaria.pdf',
		type: 'flyer',
	},
	{
		title: 'Infografía Representante',
		file: 'InfografiaRepresentante.pdf',
		type: 'flyer',
	},
	{
		title: 'Infografía Consumidor',
		file: 'InfografiaConsumidor.pdf',
		type: 'flyer',
	},
	{
		title: 'Diseño resumen navidad 2021',
		file: 'DisenoResumenNavidad2021.pdf',
		type: 'flyer',
	},
	{
		title: 'Listado de actividades Día de la Oportunidad',
		file: 'ListadoActividadesDiaOportunidad.pdf',
		type: 'flyer',
	},
	{
		title: 'Presentación ejecución Día de la Oportunidad',
		file: 'PresentacionEjecucionDOP.pdf',
		type: 'flyer',
	},

	{
		title: 'Guia del Día de la Oportunidad',
		file: 'GuiaDiaDeLaOportunidad.mp4',
		type: 'video',
	},
	{
		title: 'Incentivos C19 - C20',
		file: 'IncentivosC19_20_DOP.mp4',
		type: 'video',
	},
	{
		title: 'Incentivos C17 - C18',
		file: 'IncentivosC17_18DOP.mp4',
		type: 'video',
	},
	{
		title: 'Invitación v01',
		file: 'Invitacion_v01.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v02',
		file: 'Invitacion_v02.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v03',
		file: 'Invitacion_v03.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v04',
		file: 'Invitacion_v04.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v05',
		file: 'Invitacion_v05.jpg',
		type: 'flyer',
	},

  ]

let avDataNCM = [
	{
		title: 'Menú DOP Berilio',
		file: 'DOPNavidad21Berilio.pdf',
		type: 'flyer',
	},
    {
		title: 'Infografía Gerente de zona',
		file: 'InfografiaGerenteDeZonaNCM.pdf',
		type: 'flyer',
	},
	{
		title: 'Diseño resumen navidad 2021',
		file: 'DisenoResumenNavidad2021.pdf',
		type: 'flyer',
	},
	{
		title: 'Infografía GZ Berilio DOP',
		file: 'infografiaGZBerilioDOP.pdf',
		type: 'flyer',
	},
	{
		title: 'Infografía Consumidor',
		file: 'InfografiaConsumidor.pdf',
		type: 'flyer',
	},
	{
		title: 'Guía Día de la oportunidad',
		file: 'GuiaDOPBerilio2021.mp4',
		type: 'video',
	},
	{
		title: 'Maratón de sorpresas Berilio',
		file: '360BerilioVideo.mp4',
		type: 'video',
	},
     {
		title: 'Aparta la fecha',
		file: 'saveTheDateBerilio.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v01',
		file: 'Invitacion_v01.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v02',
		file: 'Invitacion_v02.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v03',
		file: 'Invitacion_v03.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v04',
		file: 'Invitacion_v04.jpg',
		type: 'flyer',
	},
	{
		title: 'Invitación v05',
		file: 'Invitacion_v05.jpg',
		type: 'flyer',
	},
	
 
  ]
   
  
  $(document).ready(function(){

	var d = AvonAnalyticsObjex.Profile.zone;
    var dm = AvonAnalyticsObjex.Profile.repAcct;
	var user = AvonAnalyticsObjex.Content.siteID;
	var NCMzone = [
        '2700','2701','2702','2703','2704','2705','2706','2707','2708','2709','2710',
    ];
    
	var brochuresConstructor;
	var brochurePrint = ["",""];
	if(user == 'REPSuite' || user == 'SLSuite') {
		avDataNCM = [avDataNCM.shift()];
		avData = [avData.shift()];
		avDataNCM.push(
			{
				title: 'Guía Día de la oportunidad',
				file: 'GuiaDOPBerilio2021.mp4',
				type: 'video',
			},
			{
				title: 'Maratón de sorpresas Berilio',
				file: '360BerilioVideo.mp4',
				type: 'video',
			},
			{
				title: 'Diseño resumen navidad 2021',
				file: 'DisenoResumenNavidad2021.pdf',
				type: 'flyer',
			},
			{
				title: 'Infografía Consumidor',
				file: 'InfografiaConsumidor.pdf',
				type: 'flyer',
			},
		)
	}
    if(NCMzone.includes(d) || dm == '888888827') {
        brochuresConstructor = avDataNCM;
    } else {
        brochuresConstructor = avData;
    }
	var e = 0;
	var i;
	for (i=0;i<brochuresConstructor.length;i++){
		if(i == 0) {
			brochurePrint[0] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[i].type +'">'+
					'<div class="av-brochure-image" style="background-image:url(\'/ZMSuite/static/pdf/dia_de_la_oportunidad/MenuDiaOportunidadNavidadNacional.pdf.jpg\')">' +
						'<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
						'<input type="text" class="av-hidden" value="https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/' + brochuresConstructor[i].file + '" />' +
						'<a class="av-overlay" href="https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/' + brochuresConstructor[i].file + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
					'</div>' +
					'<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[i].title +'</h3></div>'+
				'</div>'
		} else {
				brochurePrint[0] += '<div class="av-brochure-item" data-type="'+ brochuresConstructor[i].type +'">'+
				'<div class="av-brochure-image" style="background-image:url(\'/ZMSuite/static/pdf/dia_de_la_oportunidad/' + brochuresConstructor[i].file +'.jpg\')">' +
					'<div class="av-copy av-tooltip"><span class="material-icons">content_copy</span><div class="tooltiptext">Copiar link</div></div>' +
					'<input type="text" class="av-hidden" value="https://www.mx.avon.com/ZMSuite/static/pdf/dia_de_la_oportunidad/' + brochuresConstructor[i].file + '" />' +
					'<a class="av-overlay" href="https://www.mx.avon.com/ZMSuite/static/pdf/dia_de_la_oportunidad/' + brochuresConstructor[i].file + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
				'</div>' +
				'<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[i].title +'</h3></div>'+
			'</div>'
		}
		
	}
	brochurePrint[1] += '<div class="av-brochure-item av-brochure-main" data-type="'+ brochuresConstructor[0].type +'">'+
							'<div style="background-image:url(\'/ZMSuite/static/pdf/dia_de_la_oportunidad/MenuDiaOportunidadNavidadNacional.pdf.jpg\')" class="av-brochure-image">' +
								'<a class="av-overlay" href="https://www.mx.avon.com/FLDSuite/static/pdf/mis_folletos/' + brochuresConstructor[0].file + '" target="_blank"><p class="material-icons">visibility</p><p>Ver</p></a>' +
							'</div>' +
							'<div class="av-brochure-text"><h3 class="av-brochure-title">'+ brochuresConstructor[0].title +'</h3></div>' +
						'</div>'

    try {
        $('#brochureContainer').prepend(brochurePrint[0]);
        $('#brochureAside').prepend(brochurePrint[1]);   
    } catch {
        $('#brochureContainer').prepend('<h1 style="padding:20px 30px;font-size:37px;line-height: 39px;min-height: 60vh;"><span class="material-icons" style="font-size:65px;margin-bottom:10px;">timer</span><br/>Disculpa las molestias, por el momento no tenemos materiales disponibles<br /><br />Intenta más tarde.</h1>');
    }
	
	avCopy();
  
	function avCopy (){
		$('.av-copy').click(function(){
			$(this).next().select();
			document.execCommand("copy");
			$(this).find('.tooltiptext').text('¡Copiado al portapapeles!');
			$(this).mouseleave(function(){
				$(this).find('.tooltiptext').text('Copiar link');  
			})
		});
	};
  })
  
  