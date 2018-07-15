// global variables

 var timerVariable = 10; 
 // var timerRunning = false;
 var totalQuestions = 5;
 var totalScore = 0;     // increment with each correct answer
 var radioValue = [];
 var answerArray = ["a", "b", "c", "a", "b"];

 var myVar = setInterval(myTimer, 1000);

 function myTimer() {
    timerVariable--;
    $("#timerStatus").html("Time Left: " + timerVariable);
    if (timerVariable == 0) {
        clearInterval(myVar);
        userInput();
    }
 }

 function userInput() {    
    radioValue[0] = $("input[name='q1']:checked").val();
    console.log(radioValue[0]);
    radioValue[1] = $("input[name='q2']:checked").val();
    console.log(radioValue[1]);
    radioValue[2] = $("input[name='q3']:checked").val();
    console.log(radioValue[2]);
    radioValue[3] = $("input[name='q4']:checked").val();
    console.log(radioValue[3]);
    radioValue[4] = $("input[name='q5']:checked").val();
    console.log(radioValue[4]);

    compareAnswers();

   
    }

 function compareAnswers() {
    for(i=0; i < totalQuestions; i++) {
        if (radioValue[i] == answerArray[i]) {
            totalScore++;
            
        }
    }

    alert("You correctly answered: " + totalScore + " out of: " + totalQuestions);
 }

	
