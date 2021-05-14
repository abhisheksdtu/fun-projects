function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
	// console.log(typeof choice);
	return choice === this.answer;
};
