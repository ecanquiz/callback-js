# Ejemplo de Callback Hell #1

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

add(8, 5, function (resultAdd) {    
  document.getElementById("ele1").textContent = `Sum of 2 numbers: ${resultAdd}`;
  square(resultAdd, function (resultSquare) {
    document.getElementById("ele2").textContent = `Square of the sum: ${resultSquare}`;
    divide(resultSquare, function (resultDivide) {        
      document.getElementById("ele3").textContent = `Square division: ${resultDivide}`;
      subtract(resultDivide, function (resultSubtract) {
        document.getElementById("ele4").textContent = `Subtract 100: ${resultSubtract}`;	  	  
        isGreaterZero(resultSubtract, function (resultIsGreaterZero) {
          document.getElementById("ele5").textContent = `Is greater than zero: ${resultIsGreaterZero}`;
        });
      });
    });
  });
});
```

https://codepen.io/ejimenez123/pen/bGprbgm

## 08 - Callbacks (Arrow)

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
*/

const add = (num1, num2, callback) => callback(num1 + num2)
const square = (num, callback) => callback(num * num)
const divide = (num, callback) => callback(num / 2)
const subtract = (num, callback) => callback(num - 100)
const isGreaterZero = (num, callback) => callback(num > 0)

add(8, 5, resultAdd => {    
  document.getElementById("ele1").textContent = `Sum of 2 numbers: ${resultAdd}`
  square(resultAdd, resultSquare => {
    document.getElementById("ele2").textContent = `Square of the sum: ${resultSquare}`
    divide(resultSquare, resultDivide => {        
      document.getElementById("ele3").textContent = `Square division: ${resultDivide}`
      subtract(resultDivide, resultSubtract => {
        document.getElementById("ele4").textContent = `Subtract 100: ${resultSubtract}`	  	  
        isGreaterZero(resultSubtract, resultIsGreaterZero => {
          document.getElementById("ele5").textContent = `Is greater than zero: ${resultIsGreaterZero}`
        })
      })
    })
  })
})
```

https://codepen.io/ejimenez123/pen/OJNjLmw