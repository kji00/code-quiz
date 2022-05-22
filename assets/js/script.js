const testQs = [
    { 
        question: "Which of the following is correct about features of JavaScript?",
        answers: [
            "JavaScript is a lightweight, interpreted programming language.",
            "JavaScript is designed for creating network-centric applications.",
            "JavaScript is complementary to and integrated with Java.",
            "All of the above.",
        ],
        correct: "All of the above.",
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answers: [
            "Storing numbers, dates, or other values",
            "Used in calling a function",
            "Varying randomly",
            "None of the above",
        ],
        correct: "Storing numbers, dates, or other values",
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        answers: [ 
            "reverse",
            "shift",
            "slice",
            "splice",
        ],
        correct: "splice",
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        answers: [
            "global variable",
            "local variable",
            "Both of the above",
            "None of the above",
        ],
        correct: "global variable",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        answers: [
            "commas",
            "curly brackets",
            "parenthesis",
            "quotes",
        ],
        correct: "commas",
    },
]

var allQuestionsEl = document.getElementById("all-questions");
var answersEl = document.getElementById("answers");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");

// function getQuestions() {
//     for (let i = 0; i < testQs.length; i++) {
//         var insertQuestionsEl = document.getElementById("questions");
//         insertQuestionsEl.textContent = testQs[i].question;
//     }
// };

// getQuestions();

console.log(testQs[0].answers);
