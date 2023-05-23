/*const screen = document.getElementById("screen");

function One(v) {
  val.value += v;
}

function cls() {
  val.value = "";
}

function exe() {
  val.value = eval(val.value);
}

function cancel() {
  val.value = val.value.substr(0, val.value.length - 1);
}
const One = document.getElementById("One");

var button = document.getElementById("One");
var hiddenContent = document.getElementById("hiddenContent");

if (isNaN(query.value)) {
  alert("Please enter a number");
  cf.reset();
} else {
  result.value = selector.options[selector.selectedIndex].value * query.value;
}

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Toggle the visibility of the hidden content
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
  } else {
    hiddenContent.style.display = "none";
  }
});*/

function appendToDisplay(value) {
  // Append the clicked value to the display
  document.getElementById("screen").value += value;
}

function calculate() {
  try {
    // Evaluate the expression in the display and display the result
    var expression = document.getElementById("screen").value;
    var result = eval(expression);
    document.getElementById("screen").value = result;
  } catch (error) {
    // Handle any errors during calculation
    document.getElementById("screen").value = "Error";
  }
}

function clearDisplay() {
  // Clear the display
  document.getElementById("screen").value = "";
}
