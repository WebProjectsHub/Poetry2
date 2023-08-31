//--Surprise me----------------*//
// An array of random URLs
var urls3 = 
	[
	"./poems/An Empty Meadow.html",
	"./poems/Do Not Go Gentle Into That Good Night.html",
	"./poems/Into the Fray.html", 
	"./poems/Mad Girl's Love Song.html",
	"./poems/The Visitor.html"
	];

// A function to get a random URL from the array
function getRandomUrl3() 
	{
 	var index = Math.floor(Math.random() * urls3.length);
  	return urls3[index];
	}

// A function to open and load a random page
function openRandomPage() 
	{
	// Use window.location.href to redirect the current page
	window.location.href = getRandomUrl3();

	// Or use window.open to open a new window or tab
	//window.open(getRandomUrl3());
	}

//--END Surprise me------------*//
