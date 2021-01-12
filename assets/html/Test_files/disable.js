function form_Disable(formName,object,isReadOnly)
{ 

if(isReadOnly == 'enabled')
{
	 if (document.getElementById(formName))
	 {
	 	
	 	formObjects=getAllElements(document.getElementById(formName));
	
	 }
	 else
	 {
	 	
	   	formObjects=getAllElements(object.parentNode); 	
	 } 
	
	 if (!object.ary)
	 {
	
	  object.ary=new Array();
	  for (i=0;i<formObjects.length;i++)
	  {

	   if (formObjects[i].tagName=='INPUT'|| formObjects[i].tagName=='SELECT'|| formObjects[i].tagName=='TEXTAREA' || formObjects[i].tagName=='IMG' || formObjects[i].tagName=='a')
	   {
	     	    object.ary[object.ary.length]=formObjects[i];
	   }
	  }
	 }
	 for (j=0;j<object.ary.length;j++)
	 {
	  object.ary[j].removeAttribute('disabled');
	 }
	
	 for (k=0;k<object.ary.length;k++)
	 {
	   object.ary[k].setAttribute('disabled','disabled');
	
	 }
	 if(object.removeAttribute != undefined)
	 {
	 object.removeAttribute('disabled');
	 }
}
}

function getAllElements(formName)
{

  if (formName.all){return formName.all; }
  return formName.getElementsByTagName('*'); 
}

function enableFields(formEnableObjects)
{
  for (j=0;j<formEnableObjects.length;j++)
  {
   formEnableObjects[j].removeAttribute('disabled');
  }

  for (k=0;k<object.ary.length;k++)
  {
   formEnableObjects[k].setAttribute('disabled','disabled');
  }  
 }



