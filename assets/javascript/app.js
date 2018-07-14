// need a trivia theme + backgrounds & style

// global variables

 var totalSeconds = 60;
 var timerVariable = 60; // why do I need this?
 var timerRunning = false;
 var totalQuestions = 5;
 var totalScore = 0;     // increment with each correct answer

 var myVar = setInterval(myTimer, 1000);

 function myTimer() {
    var d = new Date();
    document.getElementById("timerStatus").innerHTML = d.toLocaleTimeString();
 }

 myTimer();
 







//$("#randomScore").html("Score needed: " + gameRandom);
	
