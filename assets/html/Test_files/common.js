// JavaScript Document
function ChangeMe()
{
document.getElementById("name").value="";
}
function show_campaign_tbl(){
	document.getElementById("this_campaign_tbl").style.display="block";
	document.getElementById("my_dashboard").style.display="none";
	document.getElementById("limited_offers_tbl").style.display="none";
}

function show_dashboard_tbl(){
	document.getElementById("this_campaign_tbl").style.display="none";
	document.getElementById("my_dashboard").style.display="block";
	document.getElementById("limited_offers_tbl").style.display="none";
}

function show_limited_offers_tbl(){
	document.getElementById("this_campaign_tbl").style.display="none";
	document.getElementById("my_dashboard").style.display="none";
	document.getElementById("limited_offers_tbl").style.display="block";
}