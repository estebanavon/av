//**********************************************************************/
//  BEGIN MODAL POPUP CODE 
//***********************************************************************/
var Nav4 = ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) == 4))

// One object tracks the current modal dialog opened from this window.
var popupWin = new Object()

// Generate a modal popup window.
// Parameters:
//    url -- URL of the page/frameset to be loaded into dialog
//    width -- pixel width of the dialog window
//    height -- pixel height of the dialog window
//    args -- [optional] any data you need to pass to the dialog
function openDGDialog(url, width, height) {

	if (!popupWin.win || (popupWin.win && popupWin.win.closed)) {
		// Initialize properties of the modal dialog object.
		//popupWin.returnFunc = returnFunc
		popupWin.returnedValue = ""
		//popupWin.args = args
		popupWin.url = url
		popupWin.width = width
		popupWin.height = height
		// Keep name unique so Navigator doesn't overwrite an existing dialog.
		popupWin.name = (new Date()).getSeconds().toString()
		
		// Assemble window attributes and try to center the dialog.
		if (Nav4) {
			// Center on the main window.
			popupWin.left = window.screenX + 
			   ((window.outerWidth - popupWin.width) / 2)
			popupWin.top = window.screenY + 
			   ((window.outerHeight - popupWin.height) / 2)
			var attr = "screenX=" + popupWin.left + 
			   ",screenY=" + popupWin.top + ",resizable=no,width=" + 
			   popupWin.width + ",height=" + popupWin.height
		} else {
			// The best we can do is center in screen.
			popupWin.left = (screen.width - popupWin.width) / 2
			popupWin.top = (screen.height - popupWin.height) / 2
			var attr = "left=" + popupWin.left + ",top=" + 
			   popupWin.top + ",resizable=no,width=" + popupWin.width + 
			   ",height=" + popupWin.height
		}
		
		// Generate the dialog and make sure it has focus.
		popupWin.win=window.open(popupWin.url, popupWin.name, attr)
		popupWin.win.focus()
	} else {
		popupWin.win.focus()
	}
}

// Event handler to inhibit Navigator form element 
// and IE link activity when dialog window is active.
function deadend() {
	if (popupWin.win && !popupWin.win.closed) {
		popupWin.win.focus()
		return false
	}
}

// Since links in IE4 cannot be disabled, preserve 
// IE link onclick event handlers while they're "disabled."
// Restore when re-enabling the main window.
var IELinkClicks

// Disable form elements and links in all frames for IE.
function disableForms() {
	IELinkClicks = new Array()
	for (var h = 0; h < frames.length; h++) {
		for (var i = 0; i < frames[h].document.forms.length; i++) {
			for (var j = 0; j < frames[h].document.forms[i].elements.length; j++) {
				frames[h].document.forms[i].elements[j].disabled = true
			}
		}
		IELinkClicks[h] = new Array()
		for (i = 0; i < frames[h].document.links.length; i++) {
			IELinkClicks[h][i] = frames[h].document.links[i].onclick
			frames[h].document.links[i].onclick = deadend
		}
		frames[h].window.onfocus = checkModal
    	frames[h].document.onclick = checkModal
	}
}

// Restore IE form elements and links to normal behavior.
function enableForms() {
	for (var h = 0; h < frames.length; h++) {
		for (var i = 0; i < frames[h].document.forms.length; i++) {
			for (var j = 0; j < frames[h].document.forms[i].elements.length; j++) {
				frames[h].document.forms[i].elements[j].disabled = false
			}
		}
		for (i = 0; i < frames[h].document.links.length; i++) {
			frames[h].document.links[i].onclick = IELinkClicks[h][i]
		}
	}
}

// Grab all Navigator events that might get through to form
// elements while dialog is open. For IE, disable form elements.
function blockEvents() {
	if (Nav4) {
		window.captureEvents(Event.CLICK | Event.MOUSEDOWN | Event.MOUSEUP | Event.FOCUS)
		window.onclick = deadend
	} else {
		disableForms()
	}
	window.onfocus = checkModal
}
// As dialog closes, restore the main window's original
// event mechanisms.
function unblockEvents() {
	if (Nav4) {
		window.releaseEvents(Event.CLICK | Event.MOUSEDOWN | Event.MOUSEUP | Event.FOCUS)
		window.onclick = null
		window.onfocus = null
	} else {
		enableForms()
	}
}

// Invoked by onFocus event handler of EVERY frame,
// return focus to dialog window if it's open.
function checkModal() {
	setTimeout("finishChecking()", 50)
	return true
}

function finishChecking() {
	if (popupWin.win && !popupWin.win.closed) {
		popupWin.win.focus() 
	}
}

function callPopup(url, popupWidth, popupHeight){

	var left = (window.screen.width - popupWidth)/2;
	var top = (window.screen.height - popupHeight)/2;
	var param = "width=" + popupWidth + ", height=" + popupHeight + ", location=no, menubar=no, status=no, toolbar=no, scrollbars=no, resizable=no,left=" + left + ",top=" + top ;
	//popupWin = window.open(url,"_new",param);
	openDGDialog(url, popupWidth, popupHeight);
}
//**************************
//  END MODAL POPUP CODE
//**************************/

