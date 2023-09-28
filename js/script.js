// Insert string in paragraph
function insertStringInEquation(string) {
	var equation = document.getElementById("equation");
	if (equation.innerHTML == "0" && string != ".") {
		equation.innerHTML = "";
	}
	var operators = ["*", "/", "+", "-", "^"]
	if (operators.includes(string)) {
		if (equation.innerHTML == "") {
			var previousResult = document.getElementById("result").innerHTML;
			equation.innerHTML = previousResult;
		}
		if (operators.includes(equation.innerHTML.slice(-1))) {
			equation.innerHTML = equation.innerHTML.slice(0, -1);
		}
	}
	equation.innerHTML += string;

};

document.querySelectorAll(".btn.number,.btn.operator,.btn.separator").forEach(function (button) {
	button.addEventListener("click", function () {
		var value = this.textContent;
		insertStringInEquation(value);
	});
});

document.getElementsByClassName("btn clear")[0].addEventListener("click", function () {
	var equation = document.getElementById("equation");
	equation.innerHTML = "0";
	var result = document.getElementById("result");
	result.innerHTML = "0";
});

document.getElementsByClassName("btn delete")[0].addEventListener("click", function () {
	var equation = document.getElementById("equation");
	equation.innerHTML = equation.innerHTML.slice(0, -1);
	if (equation.innerHTML == "") {
		equation.innerHTML = "0";
	}
});

document.getElementsByClassName("btn equal")[0].addEventListener("click", function () {
	var equation = document.getElementById("equation");
	var result = document.getElementById("result");
	result.innerHTML = evaluateStringAsMathematicalExpression(equation.innerHTML);
	equation.innerHTML = "0";
});

// Evaluate string as mathematical expression
function evaluateStringAsMathematicalExpression(string) {
	var operators = ["*", "/", "+", "-", "^"]
	var numbers = string.split(/[\+\-\*\/\^]/);
	var operators = string.split(/[0-9\.]+/);
	var result = parseFloat(numbers[0]);
	for (var i = 1; i < numbers.length; i++) {
		if (operators[i] == "*") {
			result *= parseFloat(numbers[i]);
		} else if (operators[i] == "/") {
			result /= parseFloat(numbers[i]);
		} else if (operators[i] == "+") {
			result += parseFloat(numbers[i]);
		} else if (operators[i] == "-") {
			result -= parseFloat(numbers[i]);
		} else if (operators[i] == "^") {
			result = Math.pow(result, parseFloat(numbers[i]));
		}
	}
	return result;
};