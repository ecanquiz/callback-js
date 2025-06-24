# Ejemplo de Callback Hell #2

```html
<p id="ele1"></p>
<p id="ele2"></p>
<p id="ele3"></p>
<p id="ele4"></p>
<p id="ele5"></p>
```

```js
// CALLBACK HELL EXAMPLE

/*
Case of use (instructions)
 1° Add 2 numbers,
 2° The result to square it,
 3° Divide the result by 2,
 4° The result subtract 100,
 5° The result, validate if it is greater than 0
   
Refactor
  Define the functions to parts, and instead of passing 
  the anonymous function we pass the name of the defined function.
*/

const add = function (num1, num2, callback) {
  callback(num1 + num2);
}

const square = function (num, callback) {
  callback(num * num);
}

const divide = function (num, callback) {
  callback(num / 2);
}

const subtract = function (num, callback) {
  callback(num - 100);
}

const isGreaterZero = function (num, callback) {
  callback(num > 0);
}

const callbackIsGreaterZero = function (resultIsGreaterZero) {
  document.getElementById("ele5").textContent = `Is greater than zero: ${resultIsGreaterZero}`;
}

const callbackSubtract = function (resultSubtract) {
  document.getElementById("ele4").textContent = `Subtract 100: ${resultSubtract}`;
  isGreaterZero(resultSubtract, callbackIsGreaterZero);
}

const callbackDivide = function (resultDivide) {
  document.getElementById("ele3").textContent = `Square division: ${resultDivide}`;
  subtract(resultDivide, callbackSubtract);
}

const callbackSquare = function (resultSquare) {
  document.getElementById("ele2").textContent = `Square of the sum: ${resultSquare}`;
  divide(resultSquare, callbackDivide);
}

const callbackAdd = function (resultAdd) {
  document.getElementById("ele1").textContent = `Sum of 2 numbers: ${resultAdd}`;
  square(resultAdd, callbackSquare);
}

add(8, 15, callbackAdd);
```

https://codepen.io/ejimenez123/pen/OJNjLjo

## 09 - Callbacks (Arrow)

```html
<p id="ele1"></p>
<p id="ele2"></p>
<p id="ele3"></p>
<p id="ele4"></p>
<p id="ele5"></p>
```

```js
// CALLBACK HELL EXAMPLE

/*
Case of use (instructions)
 1° Add 2 numbers,
 2° The result to square it,
 3° Divide the result by 2,
 4° The result subtract 100,
 5° The result, validate if it is greater than 0
  
Refactor
  Define the functions to parts, and instead of passing 
  the anonymous function we pass the name of the defined function.
*/

const add = (num1, num2, callback) => callback(num1 + num2)
const square = (num, callback) => callback(num * num)
const divide = (num, callback) => callback(num / 2)
const subtract = (num, callback) => callback(num - 100)
const isGreaterZero = (num, callback) => callback(num > 0)

const callbackIsGreaterZero = resultIsGreaterZero => {
  document.getElementById("ele5").textContent = `Is greater than zero: ${resultIsGreaterZero}`
}

const callbackSubtract = resultSubtract => {
  document.getElementById("ele4").textContent = `Subtract 100: ${resultSubtract}`
  isGreaterZero(resultSubtract, callbackIsGreaterZero)
}

const callbackDivide = resultDivide => {
  document.getElementById("ele3").textContent = `Square division: ${resultDivide}`
  subtract(resultDivide, callbackSubtract)
}

const callbackSquare = resultSquare => {
  document.getElementById("ele2").textContent = `Square of the sum: ${resultSquare}`
  divide(resultSquare, callbackDivide)
}

const callbackAdd = resultAdd => {
  document.getElementById("ele1").textContent = `Sum of 2 numbers: ${resultAdd}`
  square(resultAdd, callbackSquare)
}

add(8, 15, callbackAdd);
```

https://codepen.io/ejimenez123/pen/wvGqwqQ
