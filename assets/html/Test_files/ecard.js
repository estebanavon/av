weekDayName = new Array ("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
monthName = new Array ("January","February","March","April","May","June","July","August","September","October","November","December")

function populateDate()
{
	var str=location.pathname;
	var j=str.lastIndexOf('/');
	var k=str.lastIndexOf('.');
	var currpage=str.substring(j+1,k);
	if(currpage=="fun3"){
		myDate = new Date()
		for (var i = 0; i < 7; i++) {
			var x=myDate.getDate()+ " " + monthName[myDate.getMonth()] + ", " + myDate.getFullYear()
			myDate.setDate(myDate.getDate()+1);
			//document.fun3form.dtSend.options[i].text=x
		}
	
	}
}
	
function setSendDt()
{
	//selDate =new Date()
	//var i=document.fun3form.dtSend.options.selectedIndex;
	//selDate.setDate(selDate.getDate()+i);
	//var dateStr=selDate.getDate()+"-"+(selDate.getMonth()+1)	+"-"+selDate.getFullYear()
	//document.fun3form.selSndDt.value=dateStr

}

