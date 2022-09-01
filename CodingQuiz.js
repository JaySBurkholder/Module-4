// button when pressed needs to bring up questions in the html that ask about code and then have four clickable options
// start quiz code here
var questionDiv = document.getElementById("Question")
var answers1 = document.getElementById("answers1")
var answers2 = document.getElementById("answers2")
var answers3 = document.getElementById("answers3")
var answers4 = document.getElementById("answers4")

var button = document.getElementById("button1")
// my start quiz button getting a variable here
var timeholder = document.getElementById("timer")
// timer getting variable
var timeleft = 60
// timer starts at 60
var Questions = [
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
    var Timer = setInterval(function() {
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
function rightAnswer(selectedAnswer) {
    var currentcorrectAnswer = Questions[currentIndex].correctAnswer;
    if(selectedAnswer === currentcorrectAnswer) {
        // add time
        alert("You are correct!")
        // score = +10
    }
    else {
        // subtract time
        alert("Incorrect!")
        // score = -10
    }
    // if(selectedAnswer === correctAnswer) {
        // go to next question
    // }
    if(currentIndex === Questions.length -1) {
        // alert("Your score is concat."score"")
        // call quiz end function

    }
    else {
        currentIndex ++ ;
        createQuestions
    }
}

answers1.addEventListener("click", function() {
    rightAnswer(answers1.textContent);
});
answers2.addEventListener("click", function() {
    rightAnswer(answers2.textContent);
});
answers3.addEventListener("click", function() {
    rightAnswer(answers3.textContent);
});
answers4.addEventListener("click", function() {
    rightAnswer(answers4.textContent);
});

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

