// Get all the buttons
const buttons = document.querySelectorAll('.buttons button');
// Get the screen elements
const firstLine = document.querySelector('.firstLine');
const secondLine = document.querySelector('.secondLine');

// Add an event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button value and the current screen value
    const buttonValue = button.textContent;
    const screenValue = secondLine.textContent;

    // Clear button
    if (button.classList.contains('clearBtn')) {
      firstLine.textContent = '';
      secondLine.textContent = '0';
    }

    // Delete button
    else if (button.classList.contains('deleteBtn')) {
      secondLine.textContent = screenValue.slice(0, -1);
    }

    // Equals button
    else if (button.classList.contains('equalsBtn')) {
      // Evaluate the expression on the screen and update the screen value
      const expression = firstLine.textContent + screenValue;
      const result = eval(expression);
      firstLine.textContent = '';
      secondLine.textContent = result;
    }

    // Operator buttons
    else if (button.classList.contains('additionBtn') || 
             button.classList.contains('subtractBtn') || 
             button.classList.contains('multiplyBtn') || 
             button.classList.contains('divideBtn')) {
      // Set the operator on the first line of the screen and update the second line
      firstLine.textContent = screenValue + buttonValue;
      secondLine.textContent = '0';
    }

    // Number buttons
    else {
      // Append the number to the second line of the screen
      if (screenValue === '0') {
        secondLine.textContent = buttonValue;
      } else {
        secondLine.textContent += buttonValue;
      }
    }
  });
});