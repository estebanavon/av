
var _filtering = false;
var _captOrg = false;
var _keyup = null;
var _keydown = null;


function backOption(nse, obj)
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
	else
	{
		return true;
	}
	filterList(obj, text, false);
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
	filterList(obj, text, false);
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

function _skipKey(nse)
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
	return false;
}

function filterList(obj, text, force)
{
	_filtering = true;
	var cfilter = obj.getAttribute("filter");
	var mode = obj.getAttribute("mode");
	if(typeof(mode)=="undefined" || mode==null)
	{
		mode = 1;
	}
	if(cfilter==text && !force)
	{
		return;
	}
	var attrib = obj.getAttribute("attribute");
	if(typeof(attrib)=="undefined" || attrib==null)
	{
		attrib = "";
	}

	var list = obj.getAttribute("list");
	if(typeof(list)=="undefined" || list==null)
	{
		list = [];
		var ilen = obj.options.length;
		for(var i=0; i<ilen; i++)
		{
			list[i] = obj.options[i];
		}
		obj.setAttribute("list", list);
	}
	var perfHit = list.length>200?true:false;
	var olen = 0;
	var optn;
	var valOption = "";
	var nonOption = "";
	var vcount = 0;
	var ncount = 0;

	var ltext = text.toLowerCase();
	var startIndex = 1;
	if(mode==2)
	{
		startIndex = 0;
	}
	for(var i=startIndex, ilen=list.length; i<ilen; i++)
	{
		optn = list[i];
		if(optn.text!="")
		{
			if(text=="" || optn.text.toLowerCase().indexOf(ltext)==0)
			{
				vcount++;
				valOption+="\n<OPTION value=\""+(optn.text)+"\">"+(optn.text)+"</OPTION>";
			}
			else if(mode==2 && !perfHit)
			{
				ncount++;
				nonOption+="\n<OPTION value=\""+(optn.text)+"\">"+(optn.text)+"</OPTION>";
			}
		}
	}

	var valList;
	var nonList;
	if(ncount>0)
	{
		valList = "\n<OPTGROUP label=\""+(text)+"\">" +valOption+ "\n</OPTGROUP>";
		nonList = "\n<OPTGROUP label=\"-------------------------------\">" +nonOption+ "\n</OPTGROUP>";
	}
	else
	{
		valList = valOption;
		nonList = nonOption;
	}
	
	var selectBox = "<SELECT filter=\""+text+"\" mode=\""+mode+"\" nonCount=\""+ncount+"\" valCount=\""+vcount+"\" name=\""+obj.name+"\" id=\""+obj.id+"\" onkeydown='editStart(arguments[0])' onkeypress='editOption(arguments[0], this)' onkeyup='backOption(arguments[0], this)' style='width:100px;cursor:text' "+attrib+">";
	
	if(mode==1)//Entered Text
	{
		selectBox+="\n<OPTION value=\""+(text)+"\" selected>"+(text)+"</OPTION>";
	}

	selectBox += valList;
	if(mode==2)
	{
		selectBox += nonList;
	}

	selectBox+="\n</SELECT>";

	var dtemp = obj.parentNode;
	dtemp.removeChild(obj);
	if(!_captOrg)
	{
		_captOrg = true;
		_keyup = document.onkeyup;
		_keydown = document.onkeydown;
	}
	document.onkeydown = _skipKey;
	document.onkeyup = _skipKey;
	if(dtemp.getAttribute('_dynListLayer')!="true")
	{
		var itemp = document.createElement("DIV");
		dtemp.appendChild(itemp);
		dtemp = itemp;
	}
	dtemp.setAttribute("_dynListLayer", "true");
	dtemp.innerHTML = selectBox;
	setTimeout(function(){_setList(dtemp, list, attrib)}, 10);
}

function _setList(obj, list, attrib)
{
	var cobj = obj.childNodes[0];
	cobj.setAttribute("list", list);
	cobj.setAttribute("attribute", attrib);
	try
	{
		_filtering = false;
		cobj.focus();
		cobj.select();
	}
	catch(e)
	{}
	document.onkeyup = _keyup;
	document.onkeydown = _keydown;
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

function initOpt(obj, attrib)
{
	var init = obj.getAttribute("init");
	if(init!="done")
	{
		var text = obj.getAttribute("filter");
		if(typeof(text)!="undefined" && text!=null)
		{
			obj.setAttribute("attribute", attrib);
			obj.onkeydown = function(){editStart(arguments[0]);}; 
			obj.onkeypress = function(){editOption(arguments[0], obj);};
			obj.onkeyup = function(){backOption(arguments[0], obj);};
		}
		obj.setAttribute("init", "done");
	}
}
