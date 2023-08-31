//--randomize quote------------*//
var urls = [
	"../Poetry/quotes/Quote (1).html", 	"../Poetry/quotes/Quote (10).html",	"../Poetry/quotes/Quote (11).html",
	"../Poetry/quotes/Quote (12).html", 	"../Poetry/quotes/Quote (13).html", 	"../Poetry/quotes/Quote (14).html",
	"../Poetry/quotes/Quote (15).html",	"../Poetry/quotes/Quote (16).html",	"../Poetry/quotes/Quote (17).html", 
	"../Poetry/quotes/Quote (2).html", 	"../Poetry/quotes/Quote (3).html",	"../Poetry/quotes/Quote (4).html",
	"../Poetry/quotes/Quote (5).html",	"../Poetry/quotes/Quote (6).html",	"../Poetry/quotes/Quote (7).html",
	"../Poetry/quotes/Quote (8).html",	"../Poetry/quotes/Quote (9).html"
	];
var myIframe = document.getElementById("quoteIframe");

function displayRandomFile() 
	{
		var randomSelectedUrl = urls[Math.floor(Math.random() * urls.length)];
		myIframe.src = randomSelectedUrl;
	}

displayRandomFile();
setInterval(displayRandomFile, 20000);
