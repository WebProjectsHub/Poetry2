//*---Search Script-------------------------------*/
var UL = document.getElementById("poemList");

UL.style.display = "none";				/*---Hide the list by default---*/
var searchBox = document.getElementById("iSearch");
function searchfunc() 					/*---Search function	--------*/
{
	var input, filter, ul, li, a, i;
	input = document.getElementById("iSearch");
	ul = document.getElementById("poemList");
	filter = input.value.toUpperCase();

	/*---if the input is empty hide the list------------*/
	if
	(filter.trim().length < 1) 
		{
		ul.style.display = "none";
 		return false;
		} 
		else 
			{
        		ul.style.display = "block";
    			}
    
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) 
	{
	a = li[i].getElementsByTagName("a")[0];
        
	/*---This is when you want to find words that contain the search string------*/
	/*---if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
		{ 
		li[i].style.display = "";
		}
		else
			{
			li[i].style.display = "none";
			}------*/
    
	/*---This is when you want to find words that start the search string------*/
	if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
		{ 
                a.innerHTML = a.innerHTML.replace(new RegExp(filter,"gi"), function(match){
                    return "<mark>" + match + "</mark>";
                });
		li[i].style.display = "";
		}
	else
			{
			li[i].style.display = "none";
			a.innerHTML = a.innerHTML.replace(/<mark>|<\/mark>/gi, "");
			}
    }
}
//*---END Search Script---------------------------*/
