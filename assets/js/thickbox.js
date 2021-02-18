/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
$.browser.msie6 = $.browser.msie && /MSIE 6\.0/i.test(window.navigator.userAgent) && !/MSIE 7\.0/i.test(window.navigator.userAgent)
&& !/MSIE 8\.0/i.test(window.navigator.userAgent);

var tb_pathToImage = "static/images/iom/loadingAnimation.png";
var imgLoader = null;
/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	// imgLoader = new Image();// preload image
	// imgLoader.src = tb_pathToImage;
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	$(domChunk).click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
	});
}

function tb_show(caption, url, imageGroup,closeText,escKeyText) {//function called when the user clicks on a thickbox link
if(closeText=== "undefined")
	{
		closeText='Close';
	}
	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}
		$("#TB_overlay").addClass("TB_overlayBG"); //use background and opacity

		// if(tb_detectMacXFF()){
		// 	$("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		// }else{
		// 	$("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		// }
		
		if(caption===null){caption="";}


		// if(imgLoader == undefined || imgLoader == null)
		// {
		// 	imgLoader = new Image();// preload image
		// 	imgLoader.src = tb_pathToImage;
		// }
		//$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' class='animation-spin' /></div>");//add loader to the page

		// REPLACE FOR SVG
		$("body").append('<div id="TB_load">'+
				'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve">'+
				'<circle cx="50" cy="50" r="40" class="avThickboxLoader"/>'+
   				'</svg></div>');
		//add loader in svg
		$('#TB_load').show();//show loader
		

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>"+closeText+"</a> "+escKeyText+"</div>"); 		
			
			$("#TB_closeWindowButton").click(tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			tb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(tb_remove);
			$("#TB_window").css({display:"flex"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}
		else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 130 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH;
			ajaxContentH = TB_HEIGHT - 45;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					$("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' > </iframe>");
					}else{//iframe modal
					$("#TB_overlay").unbind();
						$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#TB_window").css("display") != "flex"){
						if(params['modal'] != "true"){//ajax no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>"+closeText+"</a> "+escKeyText+"</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#TB_overlay").unbind();
						$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#TB_closeWindowButton").click(tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"flex"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#TB_window").css({display:"flex"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						$("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						$("#TB_window").css({display:"flex"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"flex"});
}

function tb_remove() {
 	$("#TB_imageOff").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
	$("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	document.onkeydown = "";
	document.onkeyup = "";
	return false;
}

// function tb_position() {
// $("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
// 	if ( !(jQuery.browser.msie )) { // take away IE6
// 		$("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
// 	}
// }
function tb_position() {
  $("#TB_window").css({backgroundColor: 'transparent' , alignItems : 'center', justifyContent: 'center', left: '0', right: '0', bottom: '0',top:'0'});
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}

function hideStyles(elementID){	
if (elementID) {
		elementID.visibility="hidden";
	}
	AlphaFadeWithImage();

	tb_show('', '#TB_inline?left=2000&top=0&height=100&width=150&inlineId=hiddenModalContent&modal=true', null);
	}
function AlphaFadeForOverlay(headerMessage,processMessage)
{
	var yWithScroll, xWithScroll, d=document;
	if (window.innerHeight && window.scrollMaxY)
 	{// Firefox
	   	yWithScroll = window.innerHeight + window.scrollMaxY;
		xWithScroll = window.innerWidth + window.scrollMaxX;
    } else if (document.body.scrollHeight > document.body.offsetHeight)
    { // all but Explorer Mac
         yWithScroll = document.body.scrollHeight;
         xWithScroll = document.body.scrollWidth;
    } else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari
         yWithScroll = document.body.offsetHeight;
         xWithScroll = document.body.offsetWidth;
    }
    var hg = (xWithScroll/2) - 80;
    var wt = (document.body.clientWidth/2) - 125 -10;
    try
    {
           //construct the wait panel
       var lPanel = document.createElement("div");
       lPanel.id ="lPanel";
       lPanel.style.cursor = "wait";
       var iWidth = (window.screen.width/2) - (125+10);
       var iHeight = (window.screen.height/2) - 80;
       
       lPanel.style.left =  iWidth;
       lPanel.style.top =  iHeight;
       lPanel.align="center";
       lPanel.style.width = "250";
       lPanel.style.height = "80";
       lPanel.style.position = "absolute";
       lPanel.style.border ='1 solid #000000';
       lPanel.style.filter = "progid:DXImageTransform.Microsoft.Shadow(direction=45,color=#000000,strength=5)";
       lPanel.style.backgroundColor = "#eeeeee";
       lPanel.style.zIndex = "201";
       var loadPWait = '<table border=1 bordercolor=666666 width=100% height=100% cellpadding=0 cellspacing=0><tr><td bgcolor=#666666 style="color:white;font-family:verdana;font-size:8pt;font-weight:600;" height=10>&nbsp;'+headerMessage+'</td></tr><tr><td style="color:#666666;font-family:verdana;font-size:8pt;" bgcolor=#ffffff align=center>'+processMessage+'</td></tr></table>';
       lPanel.innerHTML = loadPWait;
       //  document.body.appendChild(transPanel);
       document.body.appendChild(lPanel);
   }
   catch(Exception){}
}
function AlphaFadeWithImage()
{
	var yWithScroll, xWithScroll, d=document;
	if (window.innerHeight && window.scrollMaxY)
 	{// Firefox
	   	yWithScroll = window.innerHeight + window.scrollMaxY;
		xWithScroll = window.innerWidth + window.scrollMaxX;
    } else if (document.body.scrollHeight > document.body.offsetHeight)
    { // all but Explorer Mac
         yWithScroll = document.body.scrollHeight;
         xWithScroll = document.body.scrollWidth;
    } else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari
         yWithScroll = document.body.offsetHeight;
         xWithScroll = document.body.offsetWidth;
    }
    var hg = (xWithScroll/2) - 80;
    var wt = (document.body.clientWidth/2) - 125 -10;
    try
    {
           //construct the wait panel
       var lPanel = document.createElement("div");
       lPanel.id ="lPanel";
    //    lPanel.style.cursor = "wait";
    //    var iWidth = (window.screen.width/2) - (125+10);
    //    var iHeight = (window.screen.height/2) - 80;
       
    //    lPanel.style.left =  iWidth;
    //    lPanel.style.top =  iHeight;
    //    lPanel.align="center";
    //    lPanel.style.width = "208";
    //    lPanel.style.height = "13";
    //    lPanel.style.position = "absolute";
    //    lPanel.style.border ='1 solid #000000';
    //    lPanel.style.filter = "progid:DXImageTransform.Microsoft.Shadow(direction=45,color=#000000,strength=5)";
    //    lPanel.style.backgroundColor = "#eeeeee";
       lPanel.style.zIndex = "201";
	    lPanel.style.position = "fixed";
	    lPanel.style.top =  '0';
       lPanel.style.display = "flex";
	   lPanel.style.justifyContent = "center";
	   lPanel.style.alignItems = "center";
		lPanel.style.width = "100%";
       lPanel.style.height = "100%";
       //var loadPWait = '<table border=0 bordercolor=666666 width=100% height=100% cellpadding=0 cellspacing=0><tr><td bgcolor=#666666 style="color:white;font-family:verdana;font-size:8pt;font-weight:600;" height=10>&nbsp;'+headerMessage+'</td></tr><tr><td style="color:#666666;font-family:verdana;font-size:8pt;" bgcolor=#ffffff align=center>'+processMessage+'</td></tr></table>';
       var loadPWait = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" xml:space="preserve">'+
	   '<circle cx="50" cy="50" r="40" class="avThickboxLoader"/></svg>';
	   
       lPanel.innerHTML = loadPWait;
       //  document.body.appendChild(transPanel);
       document.body.appendChild(lPanel);
	   
	   
   }
   catch(Exception){}
}

/**
 * Function added for refreshing parent window from Overlay
 * @param iUpdated
 * @param headerMessage
 * @param processMessage
 * @return none
 */
function fnRefresh(iUpdated,headerMessage,processMessage)
{
	tb_remove();
	if(iUpdated == 1)
	{
		var url = window.location.href;
		AlphaFadeForOverlay(headerMessage,processMessage);
		window.location.href = url;
	}
	
}

function fnRefreshParent(iUpdated,headerMessage,processMessage)
{
	tb_remove();
	if(iUpdated == 1)
	{
		var url = window.location.href;
		AlphaFadeForOverlay(headerMessage,processMessage);
		window.location.href = url;
	}
	
}
