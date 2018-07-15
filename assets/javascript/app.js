// global variables

 var timerVariable = 10; 
 // var timerRunning = false;
 var totalQuestions = 5;
 var totalScore = 0;     // increment with each correct answer
 var radioValue = [];
 var answerArray = ["a", "b", "c", "a", "b"];
 

 var questionArray =["Which person below is NOT currently on the Supreme Court?", 
                    "Which person below is a professional soccer player?", 
                    "Which person below was a former Vice President of the USA?", 
                    "Which person below was the first Secretary of the Treasury?", 
                    "Which person below is a former Prime Minister of the UK?"];


 // insert questions from array

 $(document).ready(function() {

    
    for (i=0; i < totalQuestions; i++) {
        $("#q" + (i + 1).toString()).html(questionArray[i]);
        // $("#q1").html(questionArray[i]);
        console.log(questionArray[i]);

    }

   

	// executes when document is ready
});

 

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
    for (i=0; i < totalQuestions; i++) {
        var stringTest = "q" + (i + 1);
        console.log(stringTest);
        radioValue[i] = $("input[name=" + stringTest + "]:checked").val();
        console.log(radioValue[i]);

    }
    
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

	
