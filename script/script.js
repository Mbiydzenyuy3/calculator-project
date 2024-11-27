const display = document.getElementById ('display')

function appendToDisplay (input) {
  display.appendToDisplay += input;
}

function clearDisplay () {
  display.clearDisplay = '';
}

function calculate () {
  display.calculate = Function('"use strict";return (' + display.value + ")") ();
}
