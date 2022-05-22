const questions = {
    q1: [
        "Which of the following is correct about features of JavaScript?",
        "1. JavaScript is a lightweight, interpreted programming language.",
        "2. JavaScript is designed for creating network-centric applications.",
        "3. JavaScript is complementary to and integrated with Java.",
        "4. All of the above.",
    ],
    q2: [
        "What are variables used for in JavaScript Programs?",
        "1. Storing numbers, dates, or other values",
	    "2. Varying randomly",
	    "3. Causing high-school algebra flashbacks",
        "4. None of the above",
    ],
    q3: [
        "The _______ method of an Array object adds and/or removes elements from an array.",
        "1. Reverse",
        "2. Shift",
        "3. Slice",
        "4. Splice",
    ],
    q4: [
        "Which of the following type of variable is visible everywhere in your JavaScript code?",
        "1. global variable",
        "2. local variable",
        "3. Both of the above",
        "4. None of the above",
    ],
    q5: [
        "String values must be enclosed within ____ when being assigned to variables",
        "1. commas",
		"2. curly brackets",
		"3. parenthesis",
        "4. quotes",
    ]
}

let arrLen = Object.keys(questions).length;

for (let i = 0; i < arrLen; i++) {
    let n = Object.keys(questions)[i];
    let x = (questions[n]);
    for (let count = 0; count < x.length; count++) {
        console.log(x[count]);
    }
}
