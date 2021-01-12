/**
 * As part of Omniture Redesign - JSON implementation is done instead of s_code implementation 
 * Implementation of few methods are removed along with its references 
**/

function getParamValue(url,param){
   	if (url.indexOf(param+"=")>-1){
		startIndex=url.indexOf(param+"=")+param.length+1;
    	endIndex=url.indexOf("&",startIndex);
    	if (endIndex<0){
                     endIndex=url.length;
    	}
    	return url.substring(startIndex,endIndex);
   	}
   	return "";
}

function setSubmitOrderEvent(obj, productslist, purchaseId)
{
	if(purchaseId != "")
		AvonAnalyticsObjex.ShopCart.orderID=purchaseId;
	if(productslist != ""){
		var products=trimProductsList(productslist);
		AvonAnalyticsObjex.ShopCart.orderProducts=products;
		}
	//_satellite.track('setSubmitOrderEvent');
}

function saveOrderEvent(obj, productslist, pagename)
{
   if(productslist != ""){
	  var products=trimProductsList(productslist);
	  AvonAnalyticsObjex.ShopCart.orderProducts=products;
		}
   //_satellite.track('saveOrderEvent');
}

function addToOrderEvent(obj, productslist, pagename)
{
	if(productslist != ""){
	var products=trimProductsList(productslist);
	AvonAnalyticsObjex.ShopCart.orderProducts=products;
	}
	//_satellite.track('addToOrderEvent');
}

function addCustomerEvent(obj){
		//_satellite.track('addCustomerEvent');
}

function addToOrderEventForDemo(obj, productslist)
{
	if (productslist != ""){
		 var products=trimProductsList(productslist);
		 AvonAnalyticsObjex.ShopCart.orderProducts=products;
		}
               
	// _satellite.track('addToOrderEventForDemo');
}


function trimProductsList(obj)
{
	var str=obj;
	str = str.replace(/,,/g, ",");
	if(str.indexOf(",") == 0)
	{
		str = str.substring(str.indexOf(",")+1);
	}
	if(str.lastIndexOf(",")== (str.length-1))
	{
		str = str.substring(0,str.lastIndexOf(","));
	}
	return str;
}

function addToOrderEventForVariants(obj, productslist,offerType)
{
   if (productslist != ""){
	   var products=trimProductsList(productslist);
	   AvonAnalyticsObjex.ShopCart.orderProducts=products;
   }
                        
   //_satellite.track('addToOrderEventForVariants');
}

function setIOItems(obj){

}

	function refreshFunc(){
		if(arg1==null && arg2==null) {
		
		if(0 == elem.localeCompare('fastOrder.page')) {
			changeCustomerAndSubmit(elem);
		} else {
			submitForm(elem);
		}
		} else {
			refreshFunPend();
		
		}
	}
	function refreshFunPend() {
		if(arg1=="null" && arg2=="null")
		Submission(null,null,'dashboardOrder.page');
		else
			Submission(arg1,arg2,'dashboardOrder.page');
	}




