//--Surprise me----------------*//
// An array of random URLs
var urls3 = 
	[
	"../poems/An Empty Meadow.html",
	"../poems/Deep-sea Soundings.html",
	"../poems/Desiderata.html",
	"../poems/Do Not Go Gentle Into That Good Night.html",
	"../poems/Fire and Ice.html",
	"../poems/Hello, Dracula.html",
	"../poems/I Am the Only Being Whose Doom.html",
	"../poems/If.html",
	"../poems/Immortality.html",
	"../poems/Into the Fray.html", 
	"../poems/Later Today.html",
	"../poems/Mad Girl's Love Song.html",
	"../poems/See What I See.html",
	"../poems/She Walks in Beauty.html",
	"../poems/Sonnet 18 Shall I compare thee to a summer’s day.html",
	"../poems/Stopping by Woods on a Snowy Evening.html",
	"../poems/Time Does Not Bring Relief; You All Have Lied.html",
	"../poems/The Bells.html",
	"../poems/The Journey.html",
	"../poems/The Night is Darkening Round Me.html",
	"../poems/The Visitor.html",
	"../poems/Untitled.html",
	"../poems/Wild nights - Wild nights.html"
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
