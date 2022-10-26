const previousOperationsText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationsText, currentOperationText) {
    this.previousOperationsText = previousOperationsText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  //add digit to calculator screen
  addDigit(digit) {
    // check if current operation already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new Calculator(previousOperationsText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      console.log("Op: " + value);
    }
  });
});
