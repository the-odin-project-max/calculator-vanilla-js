// Insert string in paragraph
function insertString(string) {
	var equation = document.getElementById("equation");
	equation.innerHTML += string;
}

document.querySelectorAll(".btn").forEach(function(button) {
	button.addEventListener("click", function() {
		var value = this.textContent;
		console.log(value);
		insertString(value);
	});
});