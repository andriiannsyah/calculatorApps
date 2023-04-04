const numbers = document.querySelectorAll(".number");
const screen = document.querySelector("input");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = "";
let calculationOperator = "";
let currNumber = "0";

const updateScreen = (number) => {
  screen.value = number;
};

const inputNumber = (number) => {
  if (currNumber === "0") {
    currNumber = number;
  } else {
    currNumber += number;
  }
};

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currNumber);
      break;
    default:
      break;
  }
  currNumber = result;
  calculationOperator = "";
};

const allClear = () => {
  prevNumber = "";
  calculationOperator = "";
  currNumber = "0";
};

clearBtn.addEventListener("click", () => {
  allClear();
  updateScreen(currNumber);
});
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currNumber);
});

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
});

const inputDecimal = (dot) => {
  currNumber += dot;
  updateScreen(currNumber);
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currNumber);
  });
});

const inputOperator = (operator) => {
  if ((calculationOperator = " ")) {
    prevNumber = currNumber;
  }

  calculationOperator = operator;
  currNumber = "";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});
