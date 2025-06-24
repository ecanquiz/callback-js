# Callbacks JavaScript

:::info Callback
En programación, un **callback** (o función de devolución de llamada) es una función que se pasa como argumento a otra función, y que se ejecuta dentro de la función que la recibe, en un momento específico. En otras palabras, es una función que se llama después de que otra función termine su ejecución.
:::

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
