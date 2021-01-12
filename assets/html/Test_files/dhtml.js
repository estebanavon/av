 /** Copyright (c) 2005 AVON Cosmetics Hungary Kft.
 * 2100 Godollo, Haraszti u. 3.
 * All rights reserved.
 */
 
 /**General dhtm js library. Contains cross browser functions
  * 
  *  author: Gabor Tordai 
  */
    
 
 
 /** gets an element browser independently*/
 function getElem(name) {
  if (document.all)
   return document.all[name];
  return document.getElementById(name); 
 }

/** true if the object exists */ 
 function objExists(obj) {
 	return obj!=null && typeof obj != "undefined";
 }
 
 /** true if the object with this name exists */ 
 function objNameExists(name) {
 	return getElem(name)!=null && typeof getElem(name) != "undefined";
 }

/** can be used for debug: prints messages in a new window */
var traceNodeWin;
function trace (msg) {
  if (!traceNodeWin)
 	traceNodeWin=  this.open( "", "trace", "toolbar=no,menubar=no,status=no,location=no,scrollbars=yes,resizable=yes,height=500,width=600");
  traceNodeWin.document.write("<br>"+msg);

}

/**TODO: only ie !! */
function disablePage() {
  	
  	for (i =0; i<document.all.length;i++) {
  	  elem=document.all[i];
  	  if (   (elem.tagName=="INPUT" && elem.type!="hidden")  ||elem.tagName=="SELECT" || elem.tagName=="TEXTARA" || elem.tagName=="BUTTON") {
  	     elem.disabled=true;
  	  }
  	  if (elem.dontdisable != '1' )
  	  	elem.onclick=""; elem.onmouseover=""; elem.onmouseout="";
   	}
 }
 
 
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


