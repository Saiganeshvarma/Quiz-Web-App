const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Mark Twain",
        b: "William Shakespeare",
        c: "Charles Dickens",
        d: "Jane Austen",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "What is the powerhouse of the cell?",
        a: "Nucleus",
        b: "Ribosome",
        c: "Mitochondria",
        d: "Endoplasmic Reticulum",
        correct: "c"
    },
    {
        question: "Which is the smallest prime number?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "c"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Hg",
        correct: "a"
    },
    {
        question: "Which gas do plants absorb?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Hydrogen",
        correct: "c"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Diamond",
        c: "Iron",
        d: "Ruby",
        correct: "b"
    },
    {
        question: "What is the speed of light?",
        a: "300,000 km/s",
        b: "150,000 km/s",
        c: "400,000 km/s",
        d: "200,000 km/s",
        correct: "a"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const questionProgress = document.getElementById("questionProgress");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const scoreContainer = document.getElementById("scoreContainer");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionProgress.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="label-container">
            <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label>
            <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label>
        </div>
        <div class="label-container">
            <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label>
            <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label>
        </div>
    `;
    submitButton.style.display = "block"; // Show the submit button
    nextButton.style.display = "none"; // Hide the next button
}

function checkAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

startButton.addEventListener("click", () => {
    startButton.style.display = "none";  // Hide start button
    quizContainer.style.display = "block"; // Show quiz container
    loadQuestion();  // Load the first question
    nextButton.style.display = "none"; // Hide next button initially
});

submitButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.style.display = "none";
        submitButton.style.display = "none";
        nextButton.style.display = "none";
        scoreContainer.style.display = "block";
        scoreDisplay.innerText = score + "/" + quizData.length;
    }
});

// Restart quiz functionality
document.getElementById("restartButton").addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = "none";
    startButton.style.display = "block"; // Show start button again
});
