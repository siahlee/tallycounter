let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

plus.addEventListener("click", addUp);

function addUp() {
 let currentNumber = number.innerHTML;
 number.innerHTML = Number(currentNumber) + 1;
}

minus.addEventListener("click", minusDown);

function minusDown() {
 let currentNumber = number.innerHTML;
 if (currentNumber > 0) {
   number.innerHTML = Number(currentNumber) - 1;
 }
}

reset.addEventListener("click", goBack);

function goBack() {
 number.innerHTML = 0;
}

document.addEventListener("keydown", keyListener);

function keyListener(event) {
  if (event.key === "a" || event.key === "+") {
    addUp();
  } else if (event.key === "s" || event.key === "-") {
    minusDown();
  } else if (event.key === "r" || event.key === "0") {
    goBack();
  }
}
