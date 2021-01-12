String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}
 var validating=false;

//Modified - Added a new parameter algorithmTyp to select the checkDigit Algorithm based on the market
function checkDigit(weights,lineNum,algorithmTyp)
{
	var status =true;
	if (validating) {
		return;
    }
    try {
		validating=true;
		if(algorithmTyp == 2){
			status = checkDigit2(weights,lineNum);
			return status;
		}
		if (algorithmTyp == 3){
			status = checkDigit3(weights,lineNum);
			return status;
		}
		if (algorithmTyp == 4){
			status = checkDigit4(weights,lineNum);
			return status;
		}
		if (algorithmTyp == 5){
			status = checkDigit5(weights,lineNum);
			return status;
		}
		if (algorithmTyp == 1) {
			var weightsArr=weights.split("");
			var lineNumArr=lineNum.split("");
			var total=0;
			var idLength=lineNum.length-1;
			for(var i=0;i<idLength;i++)
			{
				var newMultiplyTotal=((weightsArr[i]*1)*(lineNumArr[i]*1));
				var totalDigit=addDigits(newMultiplyTotal);
				total=total+totalDigit;		
			}	
			var nearestTen;
			if((total%10)!=0)
			{
				if(total/10<1)
				{
					nearestTen=10;
				}
				else
				{
					var total1=(total-(total%10))/10
					nearestTen=(total1+1)*10;
				}
			}
			else
			{
				nearestTen=total;
			}			
			var checkDigitValue=nearestTen-total;
			if(checkDigitValue==lineNumArr[idLength])
			{
				status = true;
			}
			else
			{
				status = false;
			}
		}
	} finally {
		validating = false;
	}
	return status;
}

function addDigits(newMultiplyTotal)
{
		var finalMultiplyTotal=0;
		if(newMultiplyTotal/10 >1||newMultiplyTotal/10 ==1)
		{
			newMultiplyTotal=newMultiplyTotal+"";
			var newMultiplyTotalArr=(newMultiplyTotal).split("");
			for(var j=0;j<newMultiplyTotal.length;j++)
			{
				finalMultiplyTotal=finalMultiplyTotal+(newMultiplyTotalArr[j]*1)
				if(finalMultiplyTotal/10>1)
				{
					addDigits(finalMultiplyTotal);
				}
			}	
			return finalMultiplyTotal;
		}
		else
		{
			return newMultiplyTotal;
		}
}
 
 
function checkDigit5(weights,lineNum)
{
	var weightsArr=weights.split("");
	var lineNumArr=lineNum.split("");
	var total=0;
	var checkDigitValue;
	var status = true;
	var idLength=lineNum.length-1;
	for(var i=0;i<idLength;i++)
	{
		var newMultiplyTotal=((weightsArr[i]*1)*(lineNumArr[i]*1));
		total=total+newMultiplyTotal;
	}
	checkDigitValue = total%10;
	if(checkDigitValue==lineNumArr[idLength])
	{
		status = true;
	}
	else
	{
		status = false;
	}
	return status;
}
//Added for Wave G - CheckDigit Algorithm for Puerto Rico
function checkDigit2(weights,lineNum)
{
	var weightsArr=weights.split("");
	var lineNumArr=lineNum.split("");
	var total=0;
	var modulus;
	var status = true;
	var idLength=lineNum.length-1;
	for(var i=0;i<idLength;i++)
	{
		var newMultiplyTotal=((weightsArr[i]*1)*(lineNumArr[i]*1));
		total=total+newMultiplyTotal;
	}
	modulus = total%11;
	if(modulus == 0 || modulus == 1)
	{
		modulus = 11;
	}
	
	var checkDigitValue=11-modulus;
	if(checkDigitValue==lineNumArr[idLength])
	{
		status = true;
	}
	else
	{
		status = false;
	}
	return status;
}

//Added for Wave G - CheckDigit Algorithm for Dominican Republic
function checkDigit3(weights,lineNum)
{
	var weightsArr=weights.split("");
	var lineNumArr=lineNum.split("");
	var sum = 0;
	var idLength=lineNum.length-1;
	var checkDigitValue;
	var status = true;
	
	for(var i=0;i<idLength;i++)
	{
		var newMultiplyTotal=((weightsArr[i]*1)*(lineNumArr[i]*1));
		sum = sum+newMultiplyTotal;
	}	
	var total = 10 - (sum % 10);
	if(total < 10){	
		checkDigitValue = total;
	}
	else{
		checkDigitValue = 0;
	}
	if(checkDigitValue == lineNumArr[idLength])
	{
		status = true;
	}
	else
	{
		status = false;
	}
	return status;
}

//Added for Brazil - CheckDigit Algorithm for Brazil
function checkDigit4(weights,lineNum)
{
	var weightsArr=weights.split("");
	var lineNumArr=lineNum.split("");
	var productsum=0;
	var modulus = 0;
	var status = true;
	var idLength=lineNum.length-1;
	var checkDigitValue;
	for(var i=0;i<idLength;i++)
	{
		var newMultiplyTotal=((weightsArr[i]*1)*(lineNumArr[i]*1));
		productsum=productsum+newMultiplyTotal;
	}

	var total = productsum*10;
	var modulus = total%11;
	if(modulus > 9) {
		checkDigitValue = 0;
	}else{
		checkDigitValue = modulus;
	}
	if(checkDigitValue==lineNumArr[idLength])
	{
		status = true;
	}
	else
	{
		status = false;
	}
	return status;
}
