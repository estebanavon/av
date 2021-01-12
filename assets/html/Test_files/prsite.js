function ClearKeywords() {
	if (document.all["search"].value == "enter keyword or item #");
	{document.all["search"].value = "";
	document.all["search"].style.color="black";
	}
}

function  getCurrPageForNav()
{
	var str=location.pathname;
	var j=str.lastIndexOf('/');
	var k=str.lastIndexOf('.');
	var currpage=str.substring(j+1,k);
	//alert(currpage);
	return  currpage;

}


function getCurrPage()
{
	var str=location.pathname;
	var j=str.lastIndexOf('/');
	var k=str.lastIndexOf('.');
	var currpage=str.substring(j+1,k);

	var reqParamString=document.URL;
	var strlen=reqParamString.length;
	var startReqIndex = reqParamString.indexOf("?");
	var requestParameter=reqParamString.substring(startReqIndex+1,strlen);

	for (i=0; i<document.links.length; i++) {
        var str= document.links[i].pathname;
		var s=str.indexOf("langChange.page");
		var t=0;
			if(s!=-1){
			t=i+1;
			document.links[i].href=document.links[i].href+"&currPage="+currpage+"&"+requestParameter;
			}
	}
}

function vacancySearch() {
var s=document.careers.deptCode.value;
document.location.href="job_desc.page?jobDesc="+s;
}

function quizPageSubmit(form) {
   var total = 0;
   var flag=false;
   var count=0;

   for (var e = 0; e < document.quiz.length; e++){
   		if (document.quiz.elements[e].checked){
      		count++;
      		total += parseInt(document.quiz.elements[e].value);
      	    flag=true;
 		}
 	}

 	if(flag && count==5){
    	document.quiz.action = "quizResults.page?resultVal="+total;
        document.quiz.submit();
    }else{
            alert("Please Answer all the questions");
    }
}



function initSkinCareAdvisor(){

	if(document.SkinCare.optionValue.value!= null)
		if(document.SkinCare.optNo.value != "0")
			document.SkinCare.radiobutton[document.SkinCare.optNo.value-1].checked=true;
}

function Back(quesNo,NoOfOptions){
	var flag=false;

	for(var i = 0; i<NoOfOptions; i++)
	{
		if(document.SkinCare.radiobutton[i].checked)
		{
			flag=true;
			optionSelected = document.SkinCare.radiobutton[i].value;
		}
	}
	if(flag)
	{
	    document.SkinCare.action = "skinCareAdvisor.page?QuesNo="+quesNo+"&option="+optionSelected+"&act=back";
		document.SkinCare.submit();
	}
	else
	{
		document.SkinCare.action = "skinCareAdvisor.page?QuesNo="+quesNo+"&act=back";
		document.SkinCare.submit();
	}
}

function editOption(nse, obj)
{
	var key = nse?nse.keyCode:event.keyCode;
	if(key>=33 && key<=40)
	{
		return true;
	}
	var text = obj.getAttribute("filter");
	if(typeof(text)=="undefined" || text==null)
	{
		text = "";
	}
	if(key==8 && text.length>0)
	{
		text = text.substring(0, text.length-1);
	}
	else if(key>31)
	{
		text += String.fromCharCode(key);
	}
	else
	{
		return true;
	}
	text = text.toLowerCase();
	filterList(obj, text);
	if( nse != null )
	{
		nse.cancelBubble = true;
		nse.returnValue = false;
	}
	else
	{
		event.cancelBubble = true;
		event.returnValue = false;
	}
	return true;
}

function filterList(obj, text)
{
	var mode = obj.getAttribute("mode");
	var plist = obj.getAttribute("list");
	var list = [];
	if(typeof(plist)=="undefined" || plist==null)
	{
		plist = "";
		var ilen = ((mode==1)?obj.options.length:obj.options.length);
		for(var i=0; i<ilen; i++)
		{			
			list[i] = [obj.options[i].text, obj.options[i].value];
			plist += obj.options[i].text+":"+obj.options[i].value+(i<ilen-1?",":"");
		}
		obj.setAttribute("list", plist);
	}
	else
	{
		var tlist = plist.split(',');
		for(var i=0, ilen=tlist.length; i<ilen; i++)
		{			
			list[i] = tlist[i].split(':');
		}
	}
	for(var i=obj.options.length-1; i>=0; i--)
	{
		obj.options[i] = null;
	}
	if(typeof(mode)=="undefined" || mode==null)
	{
		mode = -1;
	}
	var optn;
	if(mode==1)
	{
		optn = document.createElement("OPTION");
		optn.text = text;
		optn.value = text;
		optn.selected = true;
		obj.options.add(optn);
		obj.selectedIndex = 0;
	}
	for(var i=0, ilen=list.length; i<ilen; i++)
	{
		if(list[i][0].toLowerCase().indexOf(text)==0)
		{
			optn = document.createElement("OPTION");
			optn.text = list[i][0];
			optn.value = list[i][1];
			if(mode==1)
			{
				optn.selected = false;
			}
			obj.options.add(optn);
		}
	}
	if(obj.options.length==0)
	{
		if(mode==0)
		{
			optn = document.createElement("OPTION");
			optn.text = text;
			optn.value = text;
			obj.options.add(optn);
		}
		else if(mode==2)
		{
			for(var i=0, ilen=list.length; i<ilen; i++)
			{
				optn = document.createElement("OPTION");
				optn.text = list[i][0];
				optn.value = list[i][1];
				obj.options.add(optn);
			}
			obj.selectedIndex = 0;
			text = "";
		}
	}
	obj.setAttribute("filter", text);
}

function editStart(nse)
{
	var key = nse?nse.keyCode:event.keyCode;
	if(key==8)
	{
		if( nse != null )
		{
			nse.cancelBubble = true;
			nse.returnValue = false;
		}
		else
		{
			event.cancelBubble = true;
			event.returnValue = false;
		}
	}
	return true;
}

function initOpt(obj)
{	
	var init = obj.getAttribute("init");
	if(init!="done")
	{
		var text = obj.getAttribute("filter");
		if(typeof(text)!="undefined" && text!=null && text!="")
		{
			filterList(obj, text);
		}
		obj.setAttribute("init", "done");
	}
}
