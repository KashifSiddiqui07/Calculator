let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(val) {
  if (displayValue === '0') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch(error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
