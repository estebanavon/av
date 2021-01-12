String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}
 var gotourl;
 var validating=false;
 var cancelledNavigation = false;
 function warningCallMe(pageUrl)
{
	cancelledNavigation = false;
	javascript:callMe(pageUrl);	
	if(cancelledNavigation == false){
		javascript:warning(pageUrl);
	}	
}

function warning(pageUrl)
{	
	if(_warningMessage && _warningMessage!=''){
		alert(_warningMessage);
	}	
	if(pageUrl!=_URL){	
		window.location.href=pageUrl;	
	}
}
 
function callMe(pageUrl,typeInput)
{
    if (validating) {
        return;
    }
    try 
	{
    validating = true;
	var isDirty;
	if(window.customDirtPageCheck)
	{
		isDirty=customDirtPageCheck();
	}
	else
	{
	isDirty=checkInputForm();
	}
	//alert(isDirty);
	if(isDirty == 0)
	{
		
		if(document.getElementById('returnForm')!=null)
		{
			
			_unsavedData = _saveBeforeExit;
			var result=window.confirm(_unsavedData);
			if(result)
			{
				//redirect to the pageUrl
				if(document.getElementById('hdnpageUrl'))
				{
				document.getElementById('hdnpageUrl').value=pageUrl
				
				}
				SubmitPage();
			}
			else
			{
				cancelledNavigation = true;
				return;
			}
			//SubmitPage();
		}
		
		else
		{
			//alert(dirtyPageCheckMsg);
/* Start of defect fix 2990 */
			var result;
			if(document.getElementById('frmCreateOrder')){	 			
			 result=window.confirm(_unsavedData);
			 }else{
			  result=window.confirm(dirtyPageCheckMsg);
			 }
/* End of defect fix 2990 */

			if(result)
			{
				//redirect to the pageUrl
				if(document.getElementById('frmCreateOrder'))
				{
				document.getElementById('hdnpageUrl').value=pageUrl
				updateOrder();
				}
				else
				{
				window.location.href=pageUrl;
				}
			}else{
				cancelledNavigation = true;
			}
		}
	}
	//cbcc cr bulgaria
	else if(isDirty == 11){
		gotourl = pageUrl;
		yesNoalert();
	}
	else{
	window.location.href=pageUrl;
	
	}
	
    } finally {
        validating = false;
    }	
}


function checkInputForm()
{
	 var formElements=document.all;
	// alert(formElements.length);
	 var inputElements=document.getElementsByTagName("INPUT");
	// alert(inputElements.length);
	 var textElements;
	 var checkboxElements;
	 var dropdownElements;
	 var radioElements;
	
	 
	 for(var i=0;i<inputElements.length;i++)
	 {
	 	switch (inputElements[i].type){
	 		case "Text": 
	 		case "text":
	 		case "password":
	 			if(inputElements[i].id!='srchStr' && inputElements[i].id!='page_no' && inputElements[i].id!='subject' )
	 			{
	 				if(inputElements[i].defaultValue!=inputElements[i].value)
	 				{
	 					// alert(inputElements[i].getAttribute("name"));
	 					//alert("defaultValue +Text:"+document.getElementById(inputElements[i].id).defaultValue);
	 					//alert("Value +Text:"+document.getElementById(inputElements[i].id).value);
	 					if(inputElements[i].defaultValue==0 && inputElements[i].value.trim()=='')
	 					{						
	 						break;
	 					}
	 					else
	 						return 0;					
	 				}
	 			}
	 			break;
	 		case "checkbox":
	 		case "radio": 
	 			if(inputElements[i].defaultChecked!=inputElements[i].checked)
	 			{
	 				return 0;
	 			}
	 			break;
		
	 		case "hidden":
 				if(inputElements[i].id=='textArea')
 				{
 					if(inputElements[i].defaultValue!=getRichText())
 					{
 						return 0;
 					}
 				}
	 			break;
	 	}
	 	
	 }
	 	 
/*	 	 try {
	 	 if(getRichText)
	 	 {
	 	 	
	 	 	if(getRichText()=='' || getRichText()=='<P>&nbsp;</P>')
	 	 	{
	 	 		
	 	 	}
	 	 	else
	 	 	{
	 	 		alert(getRichText());
	 	 	return 0;
	 	 	}
	 	 }
	 	 }catch(e)
	 	 {
	 	// alert(e.message);
	 	 }*/	 	
	 	 
	 	  var selectElements=document.getElementsByTagName("SELECT");
	 	for(var i=0;i<selectElements.length;i++)
	 	{ 
	 		if(selectElements[i].getAttribute("oldSelected")!=selectElements[i].selectedIndex)
	 		{
	 			//alert("defaultSelectedIndex :"+selectElements[i].oldSelected);
				//alert("CurrSelectedIndex SELECT:"+selectElements[i].selectedIndex);
	 			return 0;
	 			}
	 	}
	 	//START Bug - 4947
	 	 var textAreaElements=document.getElementsByTagName("TEXTAREA");
	 	 for(var i=0;i<textAreaElements.length;i++){
		 	 if(textAreaElements[i].defaultValue!=textAreaElements[i].value)
			{
		
				if(textAreaElements[i].defaultValue==0 && textAreaElements[i].value.trim()=='')
				{						
					break;
				}
				else
				 return 0;
			}
				}
				//END Bug - 4947
				
	 return 1;
}


function closeAllChilds()
{
 if(window.event!=undefined){ 
 if (window.event.clientX < 0 && window.event.clientY < 0)
 {
 
	var chWin = window.open("about:blank", "POPUP", "fullscreen=0,toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=0,resizable=1,width=1,height=1");
	try
	{
		chWin.close();
	}
	catch(e)
	{
	}	
 }
 }
}
function orderEntrySubmit(pageUrl,typeInput){
//alert("in here");
	var isDirty=dirtyPageCheck();
	//alert(isDirty);
	if(isDirty == 0)
	{
		if(typeInput!=null)
		{
		if(document.getElementById('returnForm')!=null)
		{
			
			//alert("in here");
			var result=window.confirm(_unsavedData);
			if(result)
			{
				//redirect to the pageUrl
				if(document.getElementById('hdnpageUrl'))
				{
				document.getElementById('hdnpageUrl').value=pageUrl
				SubmitPage();
				}
				
			}
			else
			{
				
				return;
			}
			//SubmitPage();
		}
		}
		else
		{
			var result=window.confirm(_unsavedData);
			if(result)
			{
				//redirect to the pageUrl
				if(document.getElementById('frmCreateOrder'))
				{
				document.getElementById('hdnpageUrl').value=pageUrl
				updateOrder();
				}
				else
				{
				
				document.forms[0].action=pageUrl+"?action=getSavedItems";
				
				document.forms[0].method='POST';
				document.forms[0].submit();
				}
			}
		}
	}
	else{
				
				document.forms[0].action=pageUrl+"?action=getSavedItems";
				
				document.forms[0].method='POST';
				document.forms[0].submit();
	
	}
	

}

function hasSelectChanged(obj)
{
	var opt = obj.options;
	var sindex = obj.selectedIndex;
	for(var i=0, ilen=opt.length; i<ilen; i++)
	{
	if(opt[i].defaultSelected)
	{
	if(i==sindex)
	{
	return false;
	}
	else
	{
	return true;
	}
	}
	}
	return sindex!=0;
}


// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}
function yesNoalert()

{


//alert(document.getElementById('hdnpageUrl').value);
if(document.getElementById("lPanel"))
{
	document.getElementById("lPanel").style.display="inline";
	return;
}
var yWithScroll, xWithScroll, d=document;

 if (window.innerHeight && window.scrollMaxY)

 {// Firefox

   yWithScroll = window.innerHeight + window.scrollMaxY ;

   xWithScroll = window.innerWidth + window.scrollMaxX ;

   } else if (document.body.scrollHeight > document.body.offsetHeight)

           { // all but Explorer Mac

                  yWithScroll = document.body.scrollHeight ;

                  xWithScroll = document.body.scrollWidth ;

            } else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari

                  yWithScroll = document.body.offsetHeight ;

                  xWithScroll = document.body.offsetWidth ;

     }
      var hg = (xWithScroll/2) - 300;

            var wt = (document.body.clientWidth/2) - 200;


 try

 {


            //construct the wait panel

            var lPanel = document.createElement("div");

            lPanel.id ="lPanel";

            lPanel.style.cursor = "cursor";

            lPanel.style.left =  wt;

            lPanel.style.top =  hg;

            lPanel.align="center";

            lPanel.style.width = "250";

            lPanel.style.height = "80";

            lPanel.style.position = "absolute";

            lPanel.style.border ='1 solid #000000';

            lPanel.style.filter = "progid:DXImageTransform.Microsoft.Shadow(direction=45,color=#000000,strength=5)";

            lPanel.style.backgroundColor = "white";

            lPanel.style.zIndex = "201";

            var loadPWait = "<table border=2 width=150% height=200% cellpadding=0 cellspacing=0><tr><td><tr><td>" + _unsavedData +_unsavedDataQuestion+"</td></tr></td></tr><tr><td style='color:#666666;font-family:verdana;font-size:8pt;' bgcolor=#ffffff align=center><input type='button' value='"+_yesOption+"' onclick='hideDivAlert()'></input><input type='button' value='"+ _noOption+"' onclick='goURL()'></input></td></tr></table>";

            lPanel.innerHTML = loadPWait;

          //  document.body.appendChild(transPanel);

            document.body.appendChild(lPanel);

            }

            catch(Exception)

            {}

}

function hideDivAlert()
{

document.getElementById("lPanel").style.display="none"
}
function goURL(){
window.location.href=gotourl;
}

function setDefaultValues(){
var inputElements=document.getElementsByTagName("INPUT");
for(var i=0;i<inputElements.length;i++)
	 {
	 	switch (inputElements[i].type){
		case "checkbox":
		case "radio": 
		inputElements[i].defaultChecked = inputElements[i].checked
		break;
				}
		}

}
/* Function to open a new window
*/
function newWindow(url)
{
	window.open(url);
}
/* Function to open a new window and restricts the user to open if it is already opened
*/
function myOpenWindow(winURL, winName, winObj)
{
  var theWin; // this will hold our opened window 

  // first check to see if the window already exists
  if (winObj != null)
  {
    // the window has already been created, but did the user close it?
    // if so, then reopen it. Otherwise make it the active window.
    if (!winObj.closed) {
      winObj.focus();
      return winObj;
    } 
    // otherwise fall through to the code below to re-open the window
  }

  // if we get here, then the window hasn't been created yet, or it
  // was closed by the user.
  theWin = window.open(winURL, winName); 
  return theWin;
} 
