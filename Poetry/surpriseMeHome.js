//--Surprise me----------------*//
// An array of random URLs
var urls3 = 
	[
	"./poems/A Birthday.html",
	"./poems/A Child Of Mine.html",
	"./poems/A Father's Prayer.html",
	"./poems/A Man's Requirements.html",
	"./poems/A Prayer.html",
	"./poems/A Word to Husbands.html",
	"./poems/Advice To A Son.html",
	"./poems/An Empty Meadow.html",
	"./poems/Are You There.html",
	"./poems/Be The Best Of Whatever You Are.html",
	"./poems/Because I Could Not Stop for Death.html",
	"./poems/Calypso.html",
	"./poems/Courage.html",
	"./poems/Courage_JS.html",
	"./poems/Deep-sea Soundings.html",
	"./poems/Denouement Villanelle.html",
	"./poems/Desiderata.html",
	"./poems/Do Not Go Gentle Into That Good Night.html",
	"./poems/Faith.html",
	"./poems/Fire and Ice.html",
	"./poems/For My Daughter.html",
	"./poems/For the Traveler.html",
	"./poems/Freedom.html",
	"./poems/Go to the Limits of Your Longing.html",
	"./poems/Have You Earned Your Tomorrow.html",
	"./poems/Hearthside.html",
	"./poems/Hello, Dracula.html",
	"./poems/How Do I Love Thee.html",
	"./poems/I Am the Only Being Whose Doom.html",
	"./poems/I Do Not Love You Except Because I Love You.html",
	"./poems/I Love You.html",
	"./poems/I Slept, And Dreamed That Life Was Beauty.html",
	"./poems/I Want A Life Measured.html",
	"./poems/I Want To Be.html",
	"./poems/If.html",
	"./poems/If God Says Yes.html",
	"./poems/If I Can Stop One Heart From Breaking.html",
	"./poems/If I Could Tell You.html",
	"./poems/Immortality.html",
	"./poems/Into the Fray.html", 
	"./poems/Invictus.html", 
	"./poems/Keep Going.html", 
	"./poems/Later Today.html",
	"./poems/Let Her Remember.html",
	"./poems/Love's Language.html",
	"./poems/Mad Girl's Love Song.html",
	"./poems/May She Always Know.html",
	"./poems/My Creed.html",
	"./poems/Myself.html",
	"./poems/Not.html",
	"./poems/Our Little Ghost.html",
	"./poems/Pain Ends.html",
	"./poems/Perfect Woman.html",
	"./poems/Provisions.html",
	"./poems/Remember.html",
	"./poems/Sea Fever.html",
	"./poems/See It Through.html",
	"./poems/See What I See.html",
	"./poems/She Walks in Beauty.html",
	"./poems/Song of the Open Road.html",
	"./poems/Sonnet 18 Shall I compare thee to a summer’s day.html",
	"./poems/Sonnet 116 Let Me Not To The Marriage of True Minds.html",
	"./poems/Sonnet VII.html",
	"./poems/Still I Rise.html",
	"./poems/Stopping by Woods on a Snowy Evening.html",
	"./poems/Sweet Sixteen.html",
	"./poems/The Bells.html",
	"./poems/The Comfort Zone.html",
	"./poems/The Guy in the Glass.html",
	"./poems/The Invitation.html",
	"./poems/The Journey.html",
	"./poems/The Night is Darkening Round Me.html",
	"./poems/The Road Not Taken.html",
	"./poems/The Spring And The Fall.html",
	"./poems/The Summer Girl.html",
	"./poems/The True Meaning Of Life.html",
	"./poems/The Visitor.html",
	"./poems/Time Does Not Bring Relief; You All Have Lied.html",
	"./poems/To A Little Girl.html",
	"./poems/To My Daughter, With Love.html",
	"./poems/To My Valentine.html",
	"./poems/Travel.html",
	"./poems/Trees.html",
	"./poems/Untitled.html",
	"./poems/What Life Should Be.html",
	"./poems/What Lips My Lips Have Kissed.html",
	"./poems/Wild nights - Wild nights.html",
	"./poems/You Start Dying Slowly.html",
	"./poems/You Took Away My Innocence.html",
	"./poems/You Were Born with Potential.html"
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
	window.top.location.href = getRandomUrl3();

	// Or use window.open to open a new window or tab
	//window.open(getRandomUrl3());
	}

//--END Surprise me------------*//


