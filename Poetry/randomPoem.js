//--featured poem--------------*//
var urls2 = [
	"./featured/Do Not Go Gentle Into That Good Night.html",
	"./featured/Into the Fray.html",
	"./featured/The Road Not Taken.html", 
	"./featured/Mad Girl's Love Song.html",
	"./featured/The Visitor.html"
	];
var myIframe2 = document.getElementById("poemIframe");

function displayRandomFile2() 
	{
		var randomSelectedUrl2 = urls2[Math.floor(Math.random() * urls2.length)];
		myIframe2.src = randomSelectedUrl2;
	}

displayRandomFile2();
setInterval(displayRandomFile2, 100000);
