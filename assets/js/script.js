//START Quiz Questions
const questions = [
  {
    prompt: "Javascript first appeared in 1995",
    answer: "correct",
  },
  {
    prompt: "Event bubbling and event capturing are the same",
    answer: "incorrect",
    /*With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
    
         With capturing, the event is first captured by the outermost element and propagated to the inner elements.*/
  },
  {
    prompt: "Event delegation uses event bubbling",
    answer: "correct",
  },
  {
    prompt: "the <link> tag is used to link the HTML to the javascript file",
    answer: "incorrect",
    /* <script> tag is used */
  },
  {
    prompt: "let, const, and var can all be used to define variables",
    answer: "correct",
  },
  {
    prompt: "there will be no errors if you redefine a constant",
    answer: "incorrect",
    /* a const variable can't be redefined */
  },
  {
    prompt: "There are six data types in JS",
    answer: "incorrect",
    /* there are five: string, number, object, undefined, Boolean */
  },
  {
    prompt: "three equal signs is the strict equality operator",
    answer: "correct",
  },
  {
    prompt: "backslash in the escape character in JS",
    answer: "correct",
  },
];
//END QUIZ QUESTIONS
//----------------------------------------------------------------------------

//setting global variables
const startBtnElement = document.getElementById("startBtn");
const saveHighScoreButtonElement = document.getElementById("saveHighScoreButton")
const highScoreInitialInputElement = document.getElementById("highScoreInitialInput")
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const btnGridElement = document.getElementById("btnGrid");
const localStorageFeatureElement = document.getElementById(
  "localStorageFeature"
);
const scoreDisplayElement = document.getElementById("scoreDisplay")
const correctEl = document.querySelector("#trueBtn");
const incorrectEl = document.querySelector("#falseBtn");
const scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
// initializing variables for userinput answer, score, and timer
let answer;
let scoreToSave;
var score = 0;
var timeLeft = 85;
// var questionIndex holds total number of questions
var questionIndex = questions.length;
var myInterval;

//initialize local storage that holds city names that have been searched
if (localStorage.getItem("highScoreLocalStorage") == undefined) {
  localStorage.setItem("highScoreLocalStorage", JSON.stringify({}));
}


// Listens for the start button to be clicked, starts countdown and game
startBtn.addEventListener("click", () => {
  myInterval = setInterval(myTimer, 1000);
  startGame();
});

//Listens for save button to be clicked, saves initials to local storage
saveHighScoreButton.addEventListener("click", () => {

localStorage.setItem(highScoreInitialInputElement.value, scoreToSave)
saveHighScoreButtonElement.classList.add("hide");
})

//---------------------------------------------------
//START: TRUE BUTTON LOGIC

// Attach event listener to TRUE button element
correctEl.addEventListener("click", function () {
  //if there are no more questions, end game
  if (questionIndex == 0) {
    endGame();
    return;
  }

  //user input submits answer to question
  answer = "correct";

  //if the user input is the correct answer
  //then increase the score, decrement the questionIndex and posit a new question
  if (answer == questions[questionIndex - 1].answer) {
    score++;
    questionIndex--;

    //if there are no more questions, end game
    if (questionIndex == 0) {

      endGame();
      return;
    }
    document.getElementById("question").innerHTML =
      questions[questionIndex - 1].prompt;
  }
  //if the user input is the incorrect answer
  //subtract five seconds from the timer, decrement the questionIndex and posit a new question
  else {
    timeLeft = timeLeft - 5;
    questionIndex--;
    //if there are no more questions, end game
    if (questionIndex == 0) {
      endGame();
      return;
    }
    document.getElementById("question").innerHTML =
      questions[questionIndex - 1].prompt;
  }
});
//END: TRUE BUTTON LOGIC
//------------------------------------------------

//------------------------------------------------
//START: FALSE BUTTON LOGIC

// Attach event listener to FALSE button element
incorrectEl.addEventListener("click", function () {
  //if the user input is the correct answer
  //then increase the score, decrement the questionIndex and posit a new question
  answer = "incorrect";
  if (answer == questions[questionIndex - 1].answer) {
    score++;
    questionIndex--;

    //if there are no more questions, end game
    if (questionIndex == 0) {
      endGame();
      return;
    }
    document.getElementById("question").innerHTML =
      questions[questionIndex - 1].prompt;
  }

  //if the user input is the incorrect answer
  //subtract five seconds from the timer, decrement the questionIndex and posit a new question
  else {
    timeLeft = timeLeft - 5;
    questionIndex--;

    //if there are no more questions, end game
    if (questionIndex == 0) {
      endGame();
      return;
    }
    document.getElementById("question").innerHTML =
      questions[questionIndex - 1].prompt;
  }
});

//END: FALSE BUTTON LOGIC
//--------------------------------------------------

//setting interval outside of function
// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds

//countdown timer
function myTimer() {
  // As long as the `timeLeft` is greater than 1
  if (timeLeft > 1) {

    // Set the `textContent` of `timerEl` to show the remaining seconds
    timerEl.innerHTML = timeLeft + " seconds remaining";

    // Decrement `timeLeft` by 1
    timeLeft--;
  } else if (timeLeft === 1) {

    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    timerEl.innerHTML = timeLeft + " second remaining";
    timeLeft--;
  } else {

    // Once `timeLeft` gets to 0, set `timerEl` to time is up to tell user game is over
    timerEl.innerHTML = "Time is up.";

    //end game
    endGame();
  }}

// Starts the game
function startGame() {
  //hides start button after it is clicked
  startBtn.classList.add("hide");

  //shows question and true false buttons after start is clicked
  localStorageFeatureElement.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  scoreEl.classList.add("hide");

  timerEl.classList.remove("hide");
  //displays first question
  document.getElementById("question").innerHTML =
    questions[questionIndex - 1].prompt;
}

//end game function hides questions, stops timer, presents local storage feature, and displays the start button
function endGame() {
  //hide the question Element, which includes buttons
  questionContainerElement.classList.add("hide");

  //posts score
  scoreEl.classList.remove("hide");
  document.getElementById("score").innerHTML = "your score is " + score;
  //unhides the start button
  startBtn.classList.remove("hide");

  //hides the timer
  timerEl.classList.add("hide");

  highScoreLocalStorage = JSON.parse(
    localStorage.getItem("highScoreLocalStorage")
  );
document.getElementById("scoreDisplay").innerHTML = score;
  //unhides the localStorageFeature
  localStorageFeatureElement.classList.remove("hide");

  clearInterval(myInterval);
  scoreToSave = score;
  score = 0;
  timeLeft = 85;
  questionIndex = questions.length;
}
