/* Ahmet Kaan Demirci
   Can Kankılıç 
*/

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function addScore(){
	// Get the name and score from the form, if it is empty or invalid, alert the user
	var name = $("name").value;
	var score = $("score").value;

	if(name != "" && score != "" && score>=0 && score<=100 && !isNaN(score))
	{
		names.push(name);
		scores.push(parseInt(score));
		document.getElementById("name").focus(); 
		//clear form
		document.getElementById("name").value = "";
		document.getElementById("score").value = "";
		
	}
	else {
		alert("Please enter a valid name and score");
		return;
	}

}

function displayResults()
{
	var average = 0;
	var highScore = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
		if(scores[i]>highScore)
		{
			highScore = scores[i];
			recordName = names[i]
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> " + 
	"High score is " + recordName + " with the high score: "+ highScore;
}

function displayScores()
{
	document.getElementById("scores_table").innerHTML="<h2> Scores </h2><br /><tr><th>Name</th><th>Score</th></tr>";

	const parent = document.getElementById("scores_table");
	
	//Add Names and Scores as table elements:
	for(var i=0;i<scores.length;i++)
	{
		const row = document.createElement("tr");
		const name = document.createElement("td");
		const score = document.createElement("td");
		name.innerHTML = names[i];
		score.innerHTML = scores[i];
		row.appendChild(name);
		row.appendChild(score);
		parent.appendChild(row);
	}
	
	
}
