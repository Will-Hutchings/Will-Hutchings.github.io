//import fetch from 'node-fetch';

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="yAalLg2aJXJrvLzNyAvV1mFL79n6OfaP";analytics.SNIPPET_VERSION="4.13.2";
  analytics.load("");
  //analytics.load("");
  analytics.reset();
  
  }}();

;
  async function optout(){
	var url = "";
	//var url = "";
	const body = {
		//"subscription_group_id": "",
		"subscription_group_id": "",
  		"subscription_state": "unsubscribed",
  		"external_id": "",
 	   	"email": ""
		//"subscription_state": "subscribed"
	};

	const response = await fetch(url, {
		method: 'POST',
    	headers: {'Content-Type': 'application/json',
    	'Authorization': ''},
		body: JSON.stringify(body)
	
	});	  
	return response.json();

	//console.log(data);
  }
  
  
  function sendTrack(){
	  var uid = document.getElementById("UID").value;
	  var gameid = document.getElementById("GID").value;
	  var gameName = document.getElementById("GN").value;
	  var amnt = document.getElementById("AMNT").value;
	  if( uid != ""){
		  analytics.identify(uid,{
	  });}
	  analytics.identify();	  
      if(amnt = ""){
        amnt = null;
        
    }else{
        amnt = amnt;
    }
	  analytics.track("Bet Placed", {
		  game_id: gameid,
		  game_name: gameName,
		  bet_amount:amnt
	  });
	  analytics.reset();
	  
	  setTimeout('SubmitF("testForm")',5000);
  }

function SubmitF(){
	document.getElementById("testForm").submit();
}

function sendLinkclick(){
	var link = document.getElementById("segment_link");
	analytics.track("Clicked Segment link", {
		
	});
}
