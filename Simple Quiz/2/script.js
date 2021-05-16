const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
// const= document.getElementById('timer')
const counter = document.getElementById('counter');
// const= document.getElementById('btimeGauge')
const timeGauge = document.getElementById('timeGauge');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('score');

let questions = [
	{
		question: 'What does HTML stand for?',
		imgSrc: 'img/html.png',
		choiceA: 'Correct',
		choiceB: 'Wrong',
		choiceC: 'Wrong',
		correct: 'A',
	},
	{
		question: 'What does CSS stand for?',
		imgSrc: 'img/css.png',
		choiceA: 'Wrong',
		choiceB: 'Correct',
		choiceC: 'Wrong',
		correct: 'B',
	},
	{
		question: 'What does JS stand for?',
		imgSrc: 'img/js.png',
		choiceA: 'Wrong',
		choiceB: 'Wrong',
		choiceC: 'Correct',
		correct: 'C',
	},
];

// VARIABLES
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// RENDERS A QUESTION
function renderQuestion() {
	let q = questions[runningQuestion];

	question.innerHTML = `<p>${q.question}</p>`;
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
}

// RENDERS PROGRESS
function renderProgress() {
	for (let qIdx = 0; qIdx <= lastQuestion; qIdx++) {
		progress.innerHTML += `<div class='prog' id=${qIdx}></div>`;
	}
}

// COUNTER RENDER
function renderCounter() {
	if (count <= questionTime) {
		counter.innerHTML = count;
		timeGauge.style.width = count * gaugeUnit + 'px';
		count++;
	} else {
		count = 0;
		answerIsWrong();

		if (runningQuestion < lastQuestion) {
			runningQuestion++;
			renderQuestion();
		} else {
			// END QUIZ & SHOW SCORE
			clearInterval(TIMER);
            renderScore();
		}
	}
}

start.addEventListener('click', startQuiz);

// START QUIZ
function startQuiz() {
	start.style.display = 'none';

	renderQuestion();

	quiz.style.display = 'block';
	renderProgress();
	renderCounter();
	TIMER = setInterval(renderCounter, 1000);
}

function checkAnswer(answer) {
	if (answer == questions[runningQuestion].correct) {
		score++;
		answerIsCorrect();
	} else {
		answerIsWrong();
	}
	// CHANGE PROGRESS BAR

	count = 0;
	if (runningQuestion < lastQuestion) {
		runningQuestion++;
		renderQuestion();
	} else {
		// END QUIZ & SHOW SCORE
        clearInterval(TIMER);
        renderScore();
	}
}

function answerIsCorrect() {
	document.getElementById(runningQuestion).style.backgroundColor = '#0f0';
}
function answerIsWrong() {
	document.getElementById(runningQuestion).style.backgroundColor = '#f00';
}

// RENDER SCORE
function renderScore() {
	scoreDiv.style.display = 'block';

	// CALCULATE PERCENT

	const scorePercent = Math.round((100 * score) / questions.length);

	// scoreDiv.innerHTML = `<img src='${img}'></img>`
	scoreDiv.innerHTML = `<p>${scorePercent}</p>`;

	console.log(scoreDiv);
}
