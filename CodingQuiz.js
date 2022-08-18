// button when pressed needs to bring up questions in the html that ask about code and then have four clickable options
// start quiz code here
let button = document.getElementById("button1")
let timeholder = document.getElementById("timer")
let timeleft = 60
let Questions = [
    {question: "What is a Function?",
    answers: {
        a: "a math thingy",
        b: "right answer",
        c: "dhlsfjd",
        d: "asdddad",
    },
    correctAnswer: "right answer",
    },
    {question: "What is a Function?",
    answers: {
        a: "a math thingy",
        b: "right answer",
        c: "dhlsfjd",
        d: "asdddad",
    },
    correctAnswer: "right answer",
    },
    {question: "What is a Function?",
    answers: {
        a: "a math thingy",
        b: "right answer",
        c: "dhlsfjd",
        d: "asdddad",
    },
    correctAnswer: "right answer",
    },
]

function startTimer() {
    let Timer = setInterval(function() {
    if(timeleft <= 0) {
        clearInterval(Timer);
    }
    timeholder.textContent = timeleft
    timeleft-- 
    },1000)
}   

function createQuestions(question) {
    
}

button.addEventListener("click", function() {
   var QuestionDiv = document.getElementById("Question")
    if (QuestionDiv.classList) {
        console.log("this.addEventListener ran")
        QuestionDiv.classList = [];
    }
    button.classList.add("hide")
    startTimer()
})

