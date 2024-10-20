// Poster Slideshow
let posters = ["devara_poster1.jpg", "devara_poster2.jpg", "devara_poster3.jpg"];
let currentPoster = 0;

function changePoster() {
    currentPoster = (currentPoster + 1) % posters.length;
    document.getElementById('poster').src = posters[currentPoster];
}

setInterval(changePoster, 3000);

// Quote of the Day
const quotes = [
    "Courage is not the absence of fear, but the triumph over it.",
    "A leader is one who knows the way, goes the way, and shows the way.",
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "In the face of adversity, the hero rises."
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
}

window.onload = displayRandomQuote;

// Trivia Quiz
const quizQuestions = [
    {
        question: "What is the role of Junior NTR in the movie Devara?",
        choices: ["Warrior", "King", "Devara", "Spy"],
        correct: "Devara"
    },
    {
        question: "In which year is the movie Devara set to be released?",
        choices: ["2022", "2023", "2024", "2025"],
        correct: "2024"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const choicesList = document.getElementById('choices');
    choicesList.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        let li = document.createElement('li');
        li.textContent = choice;
        choicesList.appendChild(li);
        li.addEventListener('click', () => checkAnswer(choice, currentQuestion.correct));
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + correct);
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    loadQuestion();
});

window.onload = function() {
    displayRandomQuote();
    loadQuestion();
};
