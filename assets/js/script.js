/** This is the first script that will load when the webpage is loaded 
 * and it is impotant to have this run otherwise the page will not work
 * */

document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				alert("You clicked submit!");
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

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

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