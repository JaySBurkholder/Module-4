// button when pressed needs to bring up questions in the html that ask about code and then have four clickable options
// start quiz code here
let questionDiv = document.getElementById("Question")
let answers1 = document.getElementById("answers1")
let answers2 = document.getElementById("answers2")
let answers3 = document.getElementById("answers3")
let answers4 = document.getElementById("answers4")

let button = document.getElementById("button1")
// my start quiz button getting a variable here
let timeholder = document.getElementById("timer")
// timer getting variable
let timeleft = 60
// timer starts at 60
let Questions = [
    // questions array with answers
    {question: "What is a Function?",
    answers: [
        "a math thingy",
        "right answer",
        "dhlsfjd",
        "asdddad",
    ],
    correctAnswer: "right answer",
},
{question: "What is an Object?",
answers: [
    "a math thingy",
    "right answer",
    "dhlsfjd",
    "asdddad",
],
correctAnswer: "right answer",
},
{question: "What is a code?",
answers: [
    "a math thingy",
    "right answer",
    "dhlsfjd",
    "asdddad",
],
correctAnswer: "right answer",
}
]



// function for timer
function startTimer() {
    let Timer = setInterval(function() {
    if(timeleft <= 0) {
        clearInterval(Timer);
    }
    timeholder.textContent = timeleft
    timeleft-- 
    },1000)
}   
var currentIndex = 0
function createQuestions() {
    var currentQuestion = Questions[currentIndex];
    questionDiv.textContent = currentQuestion.question;
    answers1.textContent = Questions[currentIndex].answers[0];
    answers2.textContent = Questions[currentIndex].answers[1];
    answers3.textContent = Questions[currentIndex].answers[2];
    answers4.textContent = Questions[currentIndex].answers[3];
}

button.addEventListener("click", function() {
// start quiz button is clickable and on click executes function
   var QuestionDiv = document.getElementById("Question")
//    question div appears on click and puts question to dom
    if (QuestionDiv.classList) {
        // returns CSS classnames of elements 
        console.log("this.addEventListener ran")
        // making sure it ran
        QuestionDiv.classList = [];
        // store class names in an array
    }
    button.classList.add("hide")
    // add element with class of hide after button is clicked
    startTimer()
    // calling create ques
    createQuestions()
    // start timer next
})

