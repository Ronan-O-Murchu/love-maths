/** This is the first script that will load when the webpage is loaded 
 * and it is impotant to have this run otherwise the page will not work
 * */

document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
        });
    }
    runGame("addition");
});

/** This is the first loop to run when the webpage is loaded */

function runGame (gameType) {
	/** This code creates 2 random numbers between 1 and 24 */
	let num1 = Math.floor(Math.random() * 25) + 1;
	let num2 = Math.floor(Math.random() * 25) + 1;

/** This is the first loop to run when the webpage is loaded */
	if (gameType === "addition") {
		displayAdditionQuestion(num1, num2);
	} 
/** If the game type does not laod then the below alert will pop up */
	else {
		alert(`Unknown game type: ${gameType}`);
		throw `Unknown game type: $(gameType). Aborting!`;
	}
}

function checkAnswer() {

/** This code calculates the values fo the user input and reponds with an alert
 * to delcare if they got it right or wrong.
 * */

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    	incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer () {

/** This code will calculate the value from the inner text of the operand1 and operand2
 * parseInt = a string "number value"
 * */

	let operand1 = parseInt(document.getElementById('operand1').innerText);
	let operand2 = parseInt(document.getElementById('operand2').innerText);
	let operator = document.getElementById('operator').innerText;

	if (operator === "+") {
		return[operand1 + operand2, "addition"]
	} else {
			alert(`Unimplemented operator ${operator}`);
			throw `Unimplemented operator ${operator}. Aborting!`;
	}

}

function incrementScore () {

/** This code will retrieve the value from the DOM and increase it by 1
 * */

	let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer () {

	let oldScore = parseInt(document.getElementById("incorrect").innerText);
	document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion (operand1, operand2) {
	document.getElementById('operand1').textContent = operand1;
	document.getElementById('operand2').textContent = operand2;
	document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion () {

}