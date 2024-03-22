//--randomize quote------------*//
var urls = [
	"./quotes/Quote (1).html", 	"./quotes/Quote (10).html",	"./quotes/Quote (11).html",
	"./quotes/Quote (12).html", 	"./quotes/Quote (13).html", 	"./quotes/Quote (14).html",
	"./quotes/Quote (15).html",	"./quotes/Quote (16).html",	"./quotes/Quote (17).html", 
	"./quotes/Quote (2).html", 	"./quotes/Quote (3).html",	"./quotes/Quote (4).html",
	"./quotes/Quote (5).html",	"./quotes/Quote (6).html",	"./quotes/Quote (7).html",
	"./quotes/Quote (8).html",	"./quotes/Quote (9).html"
	];
var myIframe = document.getElementById("quoteIframe");

function displayRandomFile() 
	{
		var randomSelectedUrl = urls[Math.floor(Math.random() * urls.length)];
		myIframe.src = randomSelectedUrl;
	}

displayRandomFile();
setInterval(displayRandomFile, 20000);
//--END randomize quote--------*//



