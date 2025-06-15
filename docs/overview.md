# Callbacks JavaScript

En programación, un callback (o función de devolución de llamada) es una función que se pasa como argumento a otra función, y que se ejecuta dentro de la función que la recibe, en un momento específico. En otras palabras, es una función que se llama después de que otra función termine su ejecución.

## Función de orden superior

Las funciones que aceptan otras funciones como argumentos se llaman **funciones de orden superior**. Los callbacks son comunes en funciones de orden superior.

## Asincronía

Los callbacks son especialmente útiles para manejar operaciones asíncronas, como solicitudes de red o temporizadores, donde la respuesta no está disponible inmediatamente. 

## Sintaxis

En diferentes lenguajes, la sintaxis para definir y usar callbacks puede variar, pero la idea central es la misma: pasar una función como parámetro. 

## Ventajas

- Flexibilidad: Permiten crear código más modular y reutilizable. 
- Manejo de eventos: Son esenciales para manejar eventos y acciones del usuario.
- Asincronía: Facilitan la ejecución de tareas en segundo plano sin bloquear el hilo principal de la aplicación. 
- Extensiones: Los callbacks son una parte importante de muchos frameworks y bibliotecas. 

En resumen, los callbacks son una herramienta poderosa en programación que permiten una mayor flexibilidad y dinamismo en el manejo de la ejecución del código.

En este tutorial, veremos de qué se tratan los callbacks. Comenzaremos con ejemplos sencillos y avanzaremos a ejemplos más avanzados, lo que nos llevará al llamado callbacks hell (infierno de las devoluciones de llamadas).

:::info 
**callback hell** es una situación en la que la anidación excesiva de callbacks dificulta la comprensión y el mantenimiento del código, especialmente en programación asíncrona. Es importante buscar alternativas como promesas o async/await para evitar este problema. 
:::

Los **callback hell** dio lugar para que JavaScript ofreciera una solución más propicia que facilita la asincronia. Las **Promise JavaScript**

Pasemos al primer ejemplo:

## 02 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const doSomething = function (callback) {
  callback('Hello Word !!');
}

doSomething(function(valueThatTheySetMe){
  document.getElementById("ele").textContent = valueThatTheySetMe;
});
```

```sh
Hello Word !!
```

https://codepen.io/ejimenez123/pen/BaKpoMx

## 02 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const doSomething = callback => callback('Hello Word !!')

doSomething(
  valueThatTheySetMe => document.getElementById("ele").textContent = valueThatTheySetMe
)
```

```sh
Hello Word !!
```

https://codepen.io/ejimenez123/pen/KKzadEJ

## 03 - Callbacks (Function)

```html
<input type="text" id="a"/>
<input type="text" id="b"/>

<button type="button" id="operate">Add</button>

<p id="ele"></p>
```

```js
const add = function (a, b, callback) { 
  return callback(a + b);
}

document.getElementById("operate").addEventListener('click', function() {
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value);
  add(a, b, function(r) {
    document.getElementById("ele").textContent = 'The result is: ' + r;
  })
})
```

https://codepen.io/ejimenez123/pen/MWyJvXK

## 03 - Callbacks (Arrow)

```html
<input type="text" id="a"/>
<input type="text" id="b"/>

<button type="button" id="operate">Add</button>

<p id="ele"></p>
```

```js
const add = (a, b, callback) => callback(a + b)

document.getElementById("operate").addEventListener('click', () => {
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value)
  add(a, b, r => document.getElementById("ele").textContent = 'The result is: ' + r )
})
```

https://codepen.io/ejimenez123/pen/yLOgoxY

## 04 - Callbacks (Function)

```html
<button type="button" id="btn">Press this button</button>
```

```js
const greet = function (name) {
  alert('Hello ' + name);
}

const processUserInput = function (callback) {
  let name = prompt('Please enter your name');
  callback(name);
}

document.getElementById("btn").addEventListener('click', function() {
  processUserInput(greet);  
})
```

https://codepen.io/ejimenez123/pen/vYGgJbz

## 04 - Callbacks (Arrow)

```html
<button type="button" id="btn">Press this button</button>
```

```js
const greet = name => alert('Hello ' + name)

const processUserInput = callback => {
  let name = prompt('Please enter your name')
  callback(name)
}

document.getElementById("btn").addEventListener('click', () => processUserInput(greet))
```

https://codepen.io/ejimenez123/pen/GRZrveP

## 05 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const greet = function (callback) {
  callback();
}
 
greet(function () {
  document.getElementById("ele").textContent = "Hello Jhon White !!";
});
```

https://codepen.io/ejimenez123/pen/jOqwgMY

## 05 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const greet = function (callback) {
  callback();
}
 
greet(function () {
  document.getElementById("ele").textContent = "Hello Jhon White !!";
});
```

https://codepen.io/ejimenez123/pen/KKzqOgQ

## 05 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const greet = callback => callback()

greet(() => {
  document.getElementById("ele").textContent = "Hello Jhon White !!"
})
```

https://codepen.io/ejimenez123/pen/abNweBM

## 06 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const greet = function (name, callback) {
  callback(name);
}

greet("Jhon White", function (name) {
  document.getElementById("ele").textContent = `Hello ${name} !!`;
});
```

https://codepen.io/ejimenez123/pen/YzqxKqQ

## 06 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const greet = (name, callback) => callback(name)

greet("Jhon White", name => {
  document.getElementById("ele").textContent = `Hello ${name} !!`
})
```

https://codepen.io/ejimenez123/pen/GRZvKqy

## 07 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const greet = function (name, callback) {
  callback(name);
}

const greeting = function (name) {     
   document.getElementById("ele").textContent = `Hello ${name} !!`;
}

greet("Jhon White", greeting);
```

https://codepen.io/ejimenez123/pen/vYGJBXe

## 07 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const greet = (name, callback) => callback(name)

const greeting = name => document.getElementById("ele").textContent = `Hello ${name} !!`  

greet("Jhon White", greeting)
```

https://codepen.io/ejimenez123/pen/oNxevYZ

## 08 - Callbacks (Function)

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

## 09 - Callbacks (Function)

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

## 01 - HowDoPromisesWorkInJS (Function)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = function(data) {
  document.getElementById("myContent").textContent = data;
}

const getData = function(callback) {
  setText('Requesting authorization ...');
  setTimeout(function() {
    callback(true);
  }, 2000);
}

const showData = function(callback) {
  setText('... Waiting to show the information ...');
  setTimeout(function() {
    callback({name: '... Jhon White.'});
  }, 2000);
}

document.getElementById("btn").addEventListener('click', function() {
  getData(function(authorization) {
    if (authorization) {
      showData(function(user) {
        setText(user.name);
      });
    }
  });
});
```

https://codepen.io/ejimenez123/pen/abNEWeb

## 01 - HowDoPromisesWorkInJS (Arrow)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = data =>
  document.getElementById("myContent").textContent = data  

const getData = callback => {
  setText('Requesting authorization ...')
  setTimeout(() => callback(true), 2000)
}

const showData = callback => {
  setText('... Waiting to show the information ...')
  setTimeout(() => callback({name: '... Jhon White.'}), 2000)
}

document.getElementById("btn").addEventListener('click', () => {
  getData(authorization => {
    if (authorization)
      showData(user => setText(user.name))      
  })
})
```

https://codepen.io/ejimenez123/pen/yLOpXBZ

## 02 - HowDoPromisesWorkInJS (Function)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = function(data) {
  document.getElementById("myContent").textContent = data;
}

const getData = function() {
  return new Promise(function(resolve, reject) {
    setText('Requesting authorization ...');
    setTimeout(function() {
      resolve(true);
    }, 2000);
  });
}

const showData = function() {
  return new Promise(function(resolve, reject) {
    setText('... Waiting to show the information ...');
    setTimeout(function() {
      resolve({name: '... Jhon White.'});
    }, 2000);
  })
}

document.getElementById("btn").addEventListener('click', function() {
  getData().then(function(authorization) {
    if (authorization) {
      showData().then(function(user) {
        setText(user.name);
      });
    }
  });
});
```

https://codepen.io/ejimenez123/pen/vYGpZEx

## 02 - HowDoPromisesWorkInJS (Arrow)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = data =>
    document.getElementById("myContent").textContent = data

const getData = () => {
  return new Promise((resolve, reject) => {
    setText('Requesting authorization ...')
    setTimeout(() => resolve(true), 2000)
  })
}

const showData = () => {
  return new Promise((resolve, reject) => {
    setText('... Waiting to show the information ...')
    setTimeout(() => resolve({name: '... Jhon White.'}), 2000)
  })
}

document.getElementById("btn").addEventListener('click', () => {
  getData().then(authorization => {
    if (authorization) {
      showData().then(user => setText(user.name))
    }
  })
})
```

https://codepen.io/ejimenez123/pen/qBZpjOZ

## 03 - HowDoPromisesWorkInJS (Function)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = function(data) {
  document.getElementById("myContent").textContent = data;
}

const getData = function() {
  return new Promise(function(resolve, reject) {
    setText('Requesting authorization ...');
    setTimeout(function() {
      resolve(true);
    }, 2000);
  });
}

const showData = function() {
  return new Promise(function(resolve, reject) {
    setText('... Waiting to show the information ...');
    setTimeout(function() {
      resolve({name: '... Jhon White.'});
    }, 2000);
  });
}

document.getElementById("btn").addEventListener('click', function() {
  getData().then(function(authorization) {
    if (authorization) {
      return showData();
    }
  }).then(function(user) {
    setText(user.name);
  });
});
```

https://codepen.io/ejimenez123/pen/NWNXgxB

## 03 - HowDoPromisesWorkInJS (Arrow)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = data => 
  document.getElementById("myContent").textContent = data

const getData = () => {
  return new Promise((resolve, reject) => {
    setText('Requesting authorization ...')
    setTimeout(() => resolve(true), 2000)
  })
}

const showData = () => {
  return new Promise((resolve, reject) => {
    setText('... Waiting to show the information ...')
    setTimeout(() => resolve({name: '... Jhon White.'}), 2000)
  })
}

document.getElementById("btn").addEventListener('click', () => {
  getData().then(authorization => {
    if (authorization) {
      return showData()
    }
  }).then(user => setText(user.name))
})
```

https://codepen.io/ejimenez123/pen/dyMJRXN

## 04 -  HowDoPromisesWorkInJS (Function)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = function(data) {
  document.getElementById("myContent").textContent = data;
}

const getData = function() {
  return new Promise(function(resolve, reject) {
    setText('Requesting authorization ...');
    setTimeout(function() {
      resolve(true);
    }, 2000);
  });
}

const showData = function() {
  return new Promise(function(resolve, reject) {
    setText('... Waiting to show the information ...');
    setTimeout(function() {
      resolve({name: '... Jhon White.'});
    }, 2000);
  });
}

document.getElementById("btn").addEventListener('click', async function() {    
  const authorization = await getData();
  if (authorization) {
    let user = await showData();
    setText(user.name);
  }
});
```

https://codepen.io/ejimenez123/pen/oNxpwzY

## 04 - HowDoPromisesWorkInJS (Arrow)

```html
<div id="myContent"></div>
<button id="btn">Execute</button>
```

```js
const setText = data =>
  document.getElementById("myContent").textContent = data

const getData = () => {
  return new Promise((resolve, reject) => {
    setText('Requesting authorization ...')
    setTimeout(() => resolve(true), 2000)
  })
}

const showData = () => {
  return new Promise((resolve, reject) => {
    setText('... Waiting to show the information ...')
    setTimeout(() => resolve({name: '... Jhon White.'}), 2000)
  })
}

document.getElementById("btn").addEventListener('click', async () => {    
  const authorization = await getData()
  if (authorization) {
    let user = await showData()
    setText(user.name)
  }
})
```

https://codepen.io/ejimenez123/pen/YzqYQpQ
