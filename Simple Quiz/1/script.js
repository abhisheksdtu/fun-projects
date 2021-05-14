let questions = [
	new Question(
		'Which one is not an object oriented programming language?',
		['Java', 'C#', 'C++', 'C'],
		'C'
	),
	new Question(
		'Which language is used for styling web pages?',
		['HTML', 'JQuery', 'CSS', 'XML'],
		'CSS'
	),
	new Question(
		'There are ____ main components of object oriented programming.',
		['1', '6', '2', '4'],
		'4'
	),
	new Question(
		'Which language is used for web apps?',
		['PHP', 'Python', 'Javascript', 'All'],
		'All'
	),
	new Question(
		'MVC is a ____.',
		['Language', 'Library', 'Framework', 'All'],
		'Framework'
	),
];

let quiz = new Quiz(questions);

populate();

function populate() {
	if (quiz.isEnded()) {
		// SHOW SCORES
		showScores();
	} else {
		// SHOW QUESTIONS
		let ques = document.getElementById('question');
		// console.log(quiz.getQuestionIndex());
		ques.innerHTML = quiz.getQuestionIndex().text;

		// SHOW CHOICES
		let choices = quiz.getQuestionIndex().choices;

		for (let i = 0; i < choices.length; i++) {
			let choice = document.getElementById(`choice-${i}`);

			// console.log(choice);

			choice.innerHTML = choices[i];

			guess(`btn-${i}`, choices[i]);
		}

		showProgress();
	}
}

function showScores() {
	let gameOverHtml = `<h1>Result</h1>
    <h2 id="score">Your Score : ${quiz.score}</h2>`;

	let quizElem = document.getElementById('quiz');
	quizElem.innerHTML = gameOverHtml;
}

function guess(id, guess) {
	let button = document.getElementById(id);
	// button.addEventListener('click', function () {
	// 	quiz.guess(guess);

	// 	populate();
	// });

	button.onclick = function () {
		quiz.guess(guess);

		populate();
	};
}

function showProgress() {
	let currentQuestionNumber = quiz.questionIndex + 1;

	let progress = document.getElementById('progress');
	progress.innerHTML = `Question of ${currentQuestionNumber} of ${quiz.questions.length}`;
}
