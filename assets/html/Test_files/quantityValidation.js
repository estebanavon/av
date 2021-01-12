var focusCount=0;
var checkForError=0;
var flagCheck=0;
var validating=false;
var alertInProgress = false;

/******************************************************************************
Function	:fnCheckNumber()
Describtion	:validates numeric data
Input Parameters:Data to be validated
Return		:True if validated else false
		
*****************************************************************************/
function fnCheckNumber(number)
{
    var pattern = /^[0-9]+$/;
    var result = number.match(pattern);    
    if(result!=null){
			if(number > 0){
				return true;
			}
			else{
				return false;
			}
    }
    else
    {
			return false;
    }	
		
}
/******************************************************************************
Function	:fnCheck()
Describtion	:validates numeric data of a given field and positions the cursor
						 accordingly.
Input Parameters:field to be validated 
								 error message to be displayed
Return		:True if validated else false
		
*****************************************************************************/
function fnCheck(field,errorMessage)
{
		idflag=fnCheckNumber((field.value))

			if(idflag==false)
			{
					//alert(errorMessage);
					checkForError=1;
					focusCount=1;
					field.value=1;
					setTimeout(function(){showError(field, errorMessage);},0);
					focusCount=0;
					return false;
			}			
			else{
				checkForError=0;
				return true;
			}
		
}

function showError(obj, msg)
{
	 if (validating) {
        return;
    }
    try {
        validating = true;
        alert(msg);
        obj.focus();
        obj.select();
    } finally {
        validating = false;
    }
}
function fnNewCheck(field,maxQuantity,errorMsg1,errorMsg2,errorMsg3)
{
	if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
	if(focusCount==0)
	{
		if(field.value!=""){
			
			return validateQuantity(field,maxQuantity,errorMsg1,errorMsg2,errorMsg3);
			
		}
		else{
			return false;
		}
	}
	else{
		focusCount=0;
		return false;
	}
	}
    finally
    {
    	validating=false;
    }
}
/******************************************************************************
Function	:validateQuantityBridge() 
Describtion	:validates a fields value against a maximum number
Input Parameters:field to be validated 
								 maximum quantity
								 error messages to be displayed
Return		:True if validated else false
		
*****************************************************************************/
function validateQuantityBridge(field,maxQuantity,lineNumber,errorMsg1,errorMsg2,errorMsg3,errorMsg4,errorMsg5,errorMsg6,productType){
	if(errorMsg6!=''){
		return validateQuantityDemo(field,maxQuantity,lineNumber,errorMsg1,errorMsg2,errorMsg3,errorMsg6,errorMsg4,errorMsg5)
	}	
	else{
		return validateQuantity(field,maxQuantity,errorMsg1,errorMsg4,errorMsg5)
	}
}
/******************************************************************************
Function	:validateQuantity() 
Describtion	:validates a fields value against a maximum number, used for non 
						 demo products
Input Parameters:field to be validated 
								 maximum quantity
								 error messages to be displayed
Return		:True if validated else false
		
*****************************************************************************/

function validateQuantity(field,maxQuantity,errorMsg1,errorMsg2,errorMsg3){
	if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
	if(focusCount ==0)
	{
	 	qFlag = fnCheck(field,errorMsg1);
		if(qFlag==true){
			if(parseInt(field.value,10) >= maxQuantity){
				field.style.color="red";
				field.style.fontWeight = 'bold';
				conFlag=confirm(errorMsg2 + ' '+field.value+' '+errorMsg3)
				if(conFlag==true){
					focusCount=0;
					return true;
				}
				else{
				if(field.value>1) {
					setDirtyValue();
				}

				
					focusCount=1;
					field.value="1";							
					setTimeout(function(){field.focus();},0);							
					focusCount=0;
					field.style.color="#646464";
					field.style.fontWeight = 'normal';
					return false;
				}
			}
			else{
				field.className="linearFormInputQty";
				focusCount=0;
				return true;
			}
		}
	}
	else{
		focusCount=0;
		return false;
	}
	return false;
	}
    finally
    {
    	validating=false;
    }
}
/******************************************************************************
Function	:validateRetReplQuantity() 
Describtion	:validates a fields value against a maximum number, used for non 
						 returns and replacements products
Input Parameters:field to be validated 
								 maximum quantity
								 error messages to be displayed
Return		:True if validated else false
		
*****************************************************************************/

function validateRetReplQuantity(field,maxQuantity,errorMsg1,errorMsg2,errorMsg3){
	if(focusCount ==0 && !alertInProgress)
	{
		alertInProgress = true;
	 	qFlag = fnCheck(field,errorMsg1);
		if(qFlag==true){
			if(parseInt(field.value,10)  > maxQuantity){
				focusCount=1;
                                field.focus();field.value=maxQuantity;
                                setTimeout(function(){alert(errorMsg2);field.focus();field.value=maxQuantity;},10);
				focusCount=0;
				alertInProgress = false;
				return false;
			}	
		}
	}
	alertInProgress = false;
	return false;
}
/******************************************************************************
Function	:validateQuantityDemo() 
Describtion	:validates a fields value against a maximum number, used for
						 demo products
Input Parameters:field to be validated 
								 maximum quantity
								 line number
								 error messages to be displayed
Return		:True if validated else false
		
*****************************************************************************/
function validateQuantityDemo(field,maxQuantity,lineNumber,errorMsg1,errorMsg2,errorMsg3,errorMsg4,errorMsg5,errorMsg6){
      if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
   if(errorMsg5=='enabled'){
    	if(focusCount ==0)
	{
	 	qFlag = fnCheck(field,errorMsg1);
		if(qFlag==true){
			if(field.value >= maxQuantity){
				field.style.color="red";
				field.style.fontWeight = 'bold';
				conFlag=confirm(errorMsg6 + ' '+field.value+' '+errorMsg4)
				if(conFlag==true){
					focusCount=0;
					return true;
				}
				else{
					focusCount=1;
					field.value="1";						
					setTimeout(function(){field.focus();},0);							
					focusCount=0;
					return false;
				}
			}
			else{
				field.className="linearFormInputQty";
				focusCount=0;
				return true;
			}
		}
	}
	else{
		focusCount=0;
		return false;
	}
	return false;
	}
 else
   {
      if(focusCount ==0)
      {
      	qFlag = fnCheck(field,errorMsg1);
      	if(qFlag==true){
        	    if(field.value > maxQuantity){
        	    	  if(errorMsg4!=null && errorMsg5=='enabled'){
        	    	  alert(errorMsg4);
        	    	  }
        	    	  else{
            	      alert(errorMsg2 + ' '+lineNumber+' '+errorMsg3);
            	      }
                	  field.value = maxQuantity;
                  	focusCount=0;
            	 }
	            else{
    	        	  focusCount=0;
        	          return true;
            	}
  	     }
      }
      else{
            focusCount=0;
            return false;
      }
      return false;  
}
}
    finally
    {
    	validating=false;
    }
}


/******************************************************************************
Function	:fnCheckMail() 
Describtion	:validates a fields value against a valid mail
Input Parameters:field to be validated 
								
								 error message to be displayed
Return		:True if validated else false
		
*****************************************************************************/

function fnCheckMail(field,error1)
{
    if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
    var mail=field.value;
    if(mail.length!=0){
		if(focusCount==0){	
		
    		var pattern = /^[a-zA-Z0-9_\.]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]+$/;
    		var pattern_1=/^[a-zA-Z0-9_\.\-]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]+$/;
    		var pattern_2=/^[a-zA-Z0-9_\.\-]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]+$/;
    		
    		var result = mail.match(pattern); 
    		var result_1 = mail.match(pattern_1);  
    		var result_2 = mail.match(pattern_2); 
    		 
    		if(result!=null)
    		{
    			focusCount=0;
				return true;
    		}
    		
    		else if(result_1!=null)
    		{
    			focusCount=0;
				return true;
    		}
    		
    		else if(result_2!=null)
    		{
    			focusCount=0;
				return true;
    		}
    		else
    		{
    			alert(error1);
    			focusCount=1;
    			setTimeout(function(){field.focus();field.select();},0);
    			focusCount=0;
				return false;
    		}	
    	}
    }
    }
    finally
    {
    	validating=false;
    }

}
/******************************************************************************
Function	:fnCheckNumberOfCust
Describtion	:validates numeric data
Input Parameters:Data to be validated
Return		:True if validated else false
		
*****************************************************************************/

function fnCheckNumberOfCust(number,key)
{

    var pattern = /^[0-9]+$/;
    var result = number.match(pattern);    
    if(result!=null){
    		if(key=="disabled")
    		{
			if(number > 0){
				return true;
			}
			else{
				return -1;
			}
			}else{
			if(number > 0 || number == 0){
				return true;
			}
			else{
				return -1;
			}
			}
    }
    else
    {
			return false;
    }	
		
}

/******************************************************************************
Function	:fnCheckNoOfCust
Describtion	:validates numeric data of a given field and positions the cursor
						 accordingly.
Input Parameters:field to be validated 
								 error message to be displayed
Return		:True if validated else false
		
*****************************************************************************/

function fnCheckNoOfCust(field,errorMessage,errorMessage2,key)
{
		idflag=fnCheckNumberOfCust((field.value).trim(),key)

			if(idflag==false)
			{
					alert(errorMessage);
					checkForError=1;
					focusCount=1;
					setTimeout(function(){field.focus();field.select();},0);
					focusCount=0;
					return false;
			}
			else if(idflag == -1)
			{
					alert(errorMessage2);
					checkForError=1;
					focusCount=1;
					setTimeout(function(){field.focus();field.select();},0);
					focusCount=0;
					return false;			
			}			
			else{
				checkForError=0;
				return true;
			}
		
}
/******************************************************************************
Function	:fnCheckCount() 
Describtion	:validates a fields value valid number
Input Parameters:field to be validated 
								
								 error message to be displayed
Return		:True if validated else false
		
*****************************************************************************/
function fnCheckCount(field,error1,error2,key){
	if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
	var custCount=field.value;
    if(custCount.length!=0){
		if(focusCount==0){	
			return fnCheckNoOfCust(field,error1,error2,key);
		}
	}
	}
    finally
    {
    	validating=false;
    }
}

function fnBroCheck(field,maxQuantity,errorMsg1,errorMsg2,errorMsg3)

{
	  if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
      if(focusCount==0)

      {

            if(field.value!="" && field.value!=0){

                  

                  return validateQuantity(field,maxQuantity,errorMsg1,errorMsg2,errorMsg3);

                  

            }

      }

      else{

            focusCount=0;

      }

 
	}
    finally
    {
    	validating=false;
    }
}

/******************************************************************************
Function	:validateQuantityForFireFox() 
Describtion	:validates a fields value against a maximum number, used for 
						 demo products
Input Parameters:field to be validated 
								 maximum quantity
								 error messages to be displayed
Return		:True if validated else false
		
*****************************************************************************/

function validateQuantityForFireFox(field,maxQuantityDemo,maxQuantity,type,status){
	 	if(validating)
   		{
   		return true;
   		}
   try
   {
   validating=true;
	 	fireFlag = fnCheckNumber((field.value).trim());
	 if(status=='enabled'){
		 return true;
	 }
      else	if(fireFlag==true){
        	    if(field.value > maxQuantityDemo && type=='DEMO'){
            	     return false;
            	 }
            	 if(field.value > maxQuantity && type!='DEMO'){
            	     return true;
            	 }            	            	     	  
        	     return true;            	
  	     }
  	     else{
  	     	return false;
  	     }
}
    finally
    {
    	validating=false;
    }
}

/******************************************************************************
Function	:textCounter() 
Describtion	:set the maxlength of textarea.
*****************************************************************************/

function textCounter(field, maxlimit)
{
	if(validating)
   {
   		return true;
   }
   try
   {
   validating=true;
	if(field!=null) {
		var typedStr = field.value;
		var newlineCount = 0;
		var strLength = 0;
		var totalLength = 0;
		var count = 0;
		for(i=0;i<typedStr.length;i++){
			strLength++;
			count++;
			if(strLength < maxlimit && (typedStr.charAt(i)=="\n" || ((strLength - Math.floor(strLength/20)*20) == 0) && (i != (typedStr.length-1)) &&(typedStr.charAt(i+1)!="\n"))){
				newlineCount++;
				if (typedStr.charAt(i)=="\n") {
					if (count==22) {
						newlineCount = newlineCount -1;
					}
					count = 0;
				}
				totalLength = 40 * newlineCount;
				strLength = 0;
			}
		}
		strLength = strLength + totalLength;
		if (strLength > maxlimit){
			strLength = maxlimit;
			if(field.value.length < maxlimit){
				field.value = field.value.substring(0, field.value.length-2);
			} else{
				field.value = field.value.substring(0, maxlimit);
			}
		}

	}        
	}
    finally
    {
    	validating=false;
    }
}

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}
