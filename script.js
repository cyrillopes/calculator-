const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
let operandTextElement = document.querySelector("#calcValue");

let insertedValue = "";
let operationBtn = "";

const numberClick = function (numbers, operations) {
  numbers.forEach((button) => {
    button.addEventListener("click", function (e) {
      let buttonText = e.target.innerText;
      insertedValue += buttonText;
      operandTextElement.value = insertedValue;
    });
  });
  operations.forEach((opButton) => {
    opButton.addEventListener("click", function (e) {
      if (
        operandTextElement.value.includes(opButton.innerText) ||
        operandTextElement.value === ""
      )
        return;
      let operationText = e.target.innerText;
      insertedValue += operationText;
      operationBtn = operationText;
      operandTextElement.value = insertedValue;
    });
  });
};

const calculations = function () {
  equalsButton.addEventListener("click", () => {
    const prev = operandTextElement.value.toString().split(operationBtn)[0];
    const next = operandTextElement.value.toString().split(operationBtn)[1];
    switch (operationBtn) {
      case "+":
        operandTextElement.value = +prev + +next;
        insertedValue = operandTextElement.value;

        break;
      case "-":
        operandTextElement.value = +prev - +next;
        insertedValue = operandTextElement.value;

        break;
      case "/":
        operandTextElement.value = +prev / +next;
        insertedValue = operandTextElement.value;

        break;
      case "*":
        operandTextElement.value = +prev * +next;
        insertedValue = operandTextElement.value;

        break;
      default:
        return;
    }
  });
};

const deleteDigits = function () {
  deleteButton.addEventListener("click", function (e) {
    let deletedNum = operandTextElement.value.toString().slice(0, -1);
    if (deletedNum === operationBtn) {
      operandTextElement.value = "";
      insertedValue = "";
    } else {
      operandTextElement.value = +deletedNum;
      insertedValue = +deletedNum;
    }
  });
  allClearButton.addEventListener("click", () => {
    operandTextElement.value = "";
    insertedValue = "";
  });
};

const init = function () {
  numberClick(numberButtons, operationButtons);
  calculations();
  deleteDigits();
};
init();
