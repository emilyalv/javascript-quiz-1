//questions list
const questionsArray = [
  {answerChoices: ["pizza", "popcorn", "ice cream", "banana"],
  quizQuestion: ["What is the best food to eat while coding?"],
  correctChoice: ["ice cream"]
},
{answerChoices: ["7am", "1pm", "10pm", "1am"],
  quizQuestion: ["What is the best time of day to code?"],
  correctChoice: ["7am"]
},
{answerChoices: ["12", "24", "100", "20"],
  quizQuestion: ["How many weeks is coding bootcamp?"],
  correctChoice: ["24"]
},
{answerChoices: ["CSS", "Bitbucket", "JavaScript", "HTML"],
  quizQuestion: ["What is not a real coding language?"],
  correctChoice: ["Bitbucket"]
}
]
let i =0;
const q = questionsArray[i];
var currentQuestion;
questionEl = document.querySelector ('#questionsP');

//timer variables
var timerCount = 15;
var timer;
var timerElement = document.querySelector(".timer-count");

//scoring variables
var userSelection;
var currentCorrectChoice;
var score = 0;
var scoreElement = document.querySelector(".scoreDiv");

//run quiz function
function runQuiz () {
  //select current question
  let currentQuestion = questionsArray[i].quizQuestion;
  console.log (currentQuestion);
  let currentCorrectChoice = questionsArray[i].correctChoice;
  //display current question as text
  let QuestionText = $("<h2>").text(questionsArray[i].quizQuestion);
  QuestionText.addClass('question-text');
  $('.questionsDiv').append(QuestionText);

  //select current choices
    let currentChoices = questionsArray[i].answerChoices;
    console.log (currentChoices);
  //display current choices as buttons

  //Loop through choices & create a button for each 
  for (var c = 0; c < currentChoices.length; c++) {
    console.log (currentChoices[c]);
     // Create button
    var choiceBtn = $("<button>");
    // Assign style to the button
    choiceBtn.addClass('choice-btn btn-primary');
    // Assign the choice to the data-choice attribute
    choiceBtn.attr('data-choice', currentChoices[c]);
    // Display the choice
    choiceBtn.text(currentChoices[c]);
    // Attach the choice element
    answerchoicesEl = $('.answerChoicesDiv');
    answerchoicesEl.append(choiceBtn);    
  };
  //store user selection & hide choice buttons
  $(".choice-btn").click(function() {
    let userSelection = (this).textContent; 
    $( ".choice-btn" ).remove();
    $(".nextBtn").show ();
    //check user's answer
    console.log ("user chose " + userSelection);
    console.log ("correct choice " + currentCorrectChoice);
    if (userSelection == currentCorrectChoice) {
      score++;
      console.log ("score " + score);
    }
    else {console.log ("nope!")};
  }
  );
  //on to next question!
    i++;
  console.log (i);
  
}


//what happens when Next button is clicked
  $(".nextBtn").click(function() {
  $( ".question-text" ).remove();
  if (i < questionsArray.length){
  runQuiz ();
  }
  else (console.log ("else"))
  
})

//timer function
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Time Left: " + timerCount + " seconds";
    if (timerCount >= 0) {
      // Tests if finished condition is met
      if ( i === 4 && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        showFinalScore();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // timerElement.textContent = ("Time's up!");
      showFinalScore();
    }
  }, 1000);
}

function showFinalScore () {
  $(".question-text" ).remove();
  $(".nextBtn").remove ();
  $(".choice-btn" ).remove();
  $(".timer-count").remove();
  let scoreElement = $("<h2>").text("Final Score: " + score + "/4");
  scoreElement.addClass('final-score');
  $('.scoreDiv').append(scoreElement);
  saveScore ()
}


function init () {
  $(".nextBtn").hide ();
}

init ();

//what happens when start button clicked
$(".startBtn").click(function() {
  $(".startBtn").hide ();
    runQuiz ();
    startTimer ();
  }
)