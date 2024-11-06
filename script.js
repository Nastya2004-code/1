// створюємо змінні, робимо пошук за класом .display та тегом button
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let currentOperand = "0";
let previousOperand = null;
let currentOperation = null;
// створюємо функцію
buttons.forEach((button) => {
  // додаємо прослуховування за кліком
  button.addEventListener("click", () => {
    handleButtonClick(button.textContent);
  });
});
// створюємо функцію
function handleButtonClick(value) {
  if (value === "C") {
    currentOperand = "0";
    previousOperand = null;
    currentOperation = null;
  } else if (value === "=") {
    performCalculation();
  } else if (value === "÷" || value === "×" || value === "-" || value === "+") {
    handleOperation(value);
  } else {
    if (currentOperand === "0") {
      currentOperand = value;
    } else {
      currentOperand += value;
    }
  }
  updateDisplay();
}
// створюємо функцію
function handleOperation(operator) {
  if (currentOperation !== null) {
    performCalculation();
  }
  previousOperand = currentOperand;
  currentOperation = operator;
  currentOperand = "0";
}
// створюємо функцію
function performCalculation() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  // використовуємо медод switch(пишемо, що робити у випадках ділення, множення,віднімання, додавання)
  switch (currentOperation) {
    case "÷":
      result = prev / current;
      break;
    case "×":
      result = prev * current;
      break;
    case "-":
      result = prev - current;
      break;
    case "+":
      result = prev + current;
      break;
    default:
      return;
  }
  // розраховуємо результа
  currentOperand = result.toString();
  previousOperand = null;
  currentOperation = null;
}
// виводимо результат до клієнта
function updateDisplay() {
  display.textContent = currentOperand;
}
