//--Sort Table function---------//
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("contents").getElementsByTagName("table")[0];
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
//--END Sort Table function-----//

//--featured poem--------------*//
var urls2 = [
	"./featured/Do Not Go Gentle Into That Good Night.html",
	"./featured/If.html",
	"./featured/Into the Fray.html",
	"./featured/The Road Not Taken.html", 
	"./featured/Mad Girl's Love Song.html",
	"./featured/The Journey.html",
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
//--END featured poem----------*//

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
//--END randomize quote--------*//



//--Surprise me----------------*//
// An array of random URLs
var urls3 = 
	[
	"./poems/An Empty Meadow.html",
	"./poems/Do Not Go Gentle Into That Good Night.html",
	"./poems/If.html",
	"./poems/Into the Fray.html", 
	"./poems/Mad Girl's Love Song.html",
	"./poems/The Journey.html",
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


