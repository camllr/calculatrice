const ecran = document.querySelector(".ecran");
const boutons = document.querySelectorAll(".btn");

let currentValue = "";
let previousValue = "";
let currentOperator = null;

ecran.textContent = "0";

function getDisplayValue() {
  if (previousValue && currentOperator && currentValue) {
    return `${previousValue} ${currentOperator} ${currentValue}`;
  } else if (previousValue && currentOperator) {
    return `${previousValue} ${currentOperator}`;
  } else if (currentValue) {
    return currentValue;
  } else {
    return "0";
  }
}

function updateScreen() {
  ecran.textContent = getDisplayValue();
}

function handleNumber(value) {
  if (value === "." && currentValue.includes(".")) return; // Empêche d'ajouter plusieurs points
  currentValue += value;
  updateScreen(currentValue);
}

function handleOperator(operator) {
  if (currentValue === "" && previousValue === "") {
    return;
  }

  if (previousValue === "") {
    previousValue = currentValue;
  } else if (currentValue !== "") {
    const result = computeResult();
    previousValue = result.toString();
  }

  currentValue = "";
  currentOperator = operator;
  updateScreen(previousValue);
}

function computeResult() {
  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);

  if (isNaN(a) || isNaN(b)) return 0;

  switch (currentOperator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Erreur";
      }
      return a / b;
    default:
      return b;
  }
}

function handleEqual() {
  if (currentOperator === null || currentValue === "") {
    return;
  }

  const result = computeResult();

  if (result === "Erreur") {
    ecran.textContent = "Division par 0";
    currentValue = "";
    previousValue = "";
    currentOperator = null;
    return;
  }

  currentValue = result.toString();
  previousValue = "";
  currentOperator = null;
  updateScreen(currentValue);
}

function handleClear() {
  currentValue = "";
  previousValue = "";
  currentOperator = null;
  updateScreen("0");
}

boutons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value >= "0" && value <= "9") {
      handleNumber(value);
    } else if (value === ".") {
      handleNumber(value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      handleOperator(value);
    } else if (value === "=") {
      handleEqual();
    } else if (value === "C") {
      handleClear();
    }
  });
});
