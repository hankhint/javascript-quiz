// Quiz Questions
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

//seting global variables
const startBtnElement = document.getElementById("startBtn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const btnGridElement = document.getElementById("btnGrid");
const correctEl = document.querySelector("#trueBtn");
const incorrectEl = document.querySelector("#falseBtn");

// timer
let answer;
var score = 0;
var timeLeft;

//timer

var timerEl = document.getElementById("timer");

function countdown() {
  var timeLeft = 85;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      console.log(timeLeft);
      timerEl.textContent = "Time is up.";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Listens for the start button to be clicked, starts countdown and game

startBtn.addEventListener("click", () => {
  countdown();
 startGame();
});

// Attach event listener to TRUE button element
correctEl.addEventListener("click", function () {
  answer = "correct";
});

// Attach event listener to FALSE button element
incorrectEl.addEventListener("click", function () {
  answer = "incorrect";
});

// Starts the game
function startGame() {
  //hides start button after it is clicked
  startBtn.classList.add("hide");

   //shows question and true false buttons after start is clicked
  questionContainerElement.classList.remove("hide");

 /* // loop
  for (let gameState = 0; timeLeft > 0; gameState++) {
    //push question
    
    //listen for answer

    //check answer

    //push new question */
}
