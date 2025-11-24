// const input1 = document.getElementById("input1");
// const input2 = document.querySelector("input2");
// const input2 = document.querySelectorAll(".input2");
// const input1 = document.getElementsByClassName("input2");
// const input2 = document.getElementsByTagName("input");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const result = document.getElementById("result");

// Get Values
// input1Value = Number(input1.value);
// input2Value = Number(input2.value);

// Add Event Listeners
addBtn.addEventListener("click", () => {
  const sum = add(Number(input1.value), Number(input2.value));
  result.innerHTML = `<p>Result: ${sum}</p>`;
});

addBtn.addEventListener("click", () => {
  const sum = (result.innerText = sum);
});

subtractBtn.addEventListener("click", () => {
  const difference = Number(input1.value) - Number(input2.value);
  result.innerHTML = difference;
});

divideBtn.addEventListener("click", () => {
  try {
    const divid = divide(Number(input1.value), Number(input2.value));
    result.innerHTML = divide;
  } catch (error) {
    result.innerHTML = error;
  }
});



// task create calculator using Js DOM and Event Listeners.