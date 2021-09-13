    
     /* ---  Gerber Barillas, solventa alturas de títulos Demos para MX  ---*/ 
    
    // TÍTULOS
    
    for(i = 0;i<100;i+=5){
		$('form[name="exForm"] > table  tr  td > table tr  td > table tr td p:eq('+i+')').addClass("titleDemo")
	  }
	  
	
	  var titleHeigth = 0; 
		
	  // determinando la altura del título más alto.
	  $('.titleDemo').each(function(){  
		  if($(this).height() > titleHeigth){  
			  titleHeigth = $(this).height();  
		  }  
	  });  
	  
	  // asígnado altura mayor a todos los titulos . 
	  $('.titleDemo').height(titleHeigth);
	  // separa 10px el título de la descripción 1
	  $('.titleDemo').css("margin-bottom","10px");
	   
	  
	  // DESCRIPCIÓN
	
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(0)').addClass("descriptionDemo");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(4)').addClass("descriptionDemo");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(10)').addClass("descriptionDemo");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(14)').addClass("descriptionDemo");
	   $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(18)').addClass("descriptionDemo");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(25) span span').css("display","inline-block");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(25) span span').addClass("descriptionDemo");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(28) .p1').addClass("descriptionDemo");
	  $('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(22)').addClass("descriptionDemo");
	
	  var descriptionHeigth = 0; 
		
	  // determinando la altura del título más alto.
	  $('.descriptionDemo').each(function(){  
		  if($(this).height() > descriptionHeigth){  
			  descriptionHeigth = $(this).height();  
		  }  
	  });  
	  
	  // asígnado altura mayor a todos los divs. 
	  $('.descriptionDemo').height(descriptionHeigth);
	  $('.descriptionDemo').css("margin-bottom","12px");
	
	// DESCRIPCION TOTAL 
	
	$('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:nth-child(3n+2)').addClass("descriptionDemo1");	
	$('form[name="exForm"] > table  tr  td > table tr  td > table tr td div div:nth-child(3n+3)').addClass("descriptionDemo1");
	$('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div div:nth-child(3n+2)').css('height','auto !important');
	
	$('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div:eq(23)').addClass("descriptionDemo1");
	
	var descriptionHeigth2 = 0; 
		
	  // determinando la altura del título más alto.
	  $('.descriptionDemo1').each(function(){  
		  if($(this).height() > descriptionHeigth2){  
			  descriptionHeigth2 = $(this).height();  
		  }  
	  });  
	  
	  // asígnado altura mayor a todos los divs. 
	  $('.descriptionDemo1').height(descriptionHeigth2);
	
	$('form[name="exForm"] > table  tr  td > table tr  td > table tr td  div div:nth-child(3n+2)').css('height','auto');
	
  
  
	//debugger
   
	
  