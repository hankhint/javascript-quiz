

var score = 0;

const startBtn = document.getElementById("startBtn");
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('prompt');
const btnGridElement = document.getElementById('btnGrid')

// these two variables need to be redefined later, so use let: 
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log("here")
  startBtn.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
questionElement.innerText = question.prompt;

}
function selectAnswer() {}

function resetState {
    
}

const questions = [
    {
      prompt: "Javascript first appeared in 1995",
      answer: "True",
    },
    {
      prompt: "Event bubbling and event capturing are the same",
      answer: "False",
  
      /*With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
  
       With capturing, the event is first captured by the outermost element and propagated to the inner elements.*/
    },
    {
      prompt: "Event delegation uses event bubbling",
      answer: "True",
    },
    {
      prompt: "the <link> tag is used to link the HTML to the javascript file",
      answer: "False",
      /* <script> tag is used */
    },
    {
      prompt: "let, const, and var can all be used to define variables",
      answer: "True",
    },
    {
      prompt: "there will be no errors if you redefine a constant",
      answer: "False",
      /* a const variable can't be redefined */
    },
    {
      prompt: "There are six data types in JS",
      answer: "False",
      /* there are five: string, number, object, undefined, Boolean */
    },
    {
      prompt: "three equal signs is the strict equality operator",
      answer: "True",
    },
    {
      prompt: "backslash in the escape character in JS",
      answer: "True",
    },
  ];