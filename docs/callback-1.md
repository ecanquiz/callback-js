# Ejemplo de Callback #1

En este ejemplo mostramos un elemento HTML `<p>` identificado con la propiedad `id` definida como `"ele"`.
```html
<p id="ele"></p>
```

Luego declaramos una función llamada `doSomething` que recibe un argumento denominado `callback`. Como su nombre lo indica, `callback` recibe una función que será ejecutada dentro de la misma función `doSomething`.

```js
// Declare the doSomething function
const doSomething = function (callback) {
  callback();
}

// Execute the doSomething function
doSomething(function () {
  document.getElementById("ele").textContent = "Hello Word !!";
});
```
Tenga en cuenta que despues de declarar la función `doSomething`, luego la ejecutamos pasando una función anónima como argumento.

Al refrescar el navegador, el resultado será el siguiente.
```sh
Hello Word !!
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/VwamPva).**

Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.

```js
// Declare the doSomething function
const doSomething = callback => callback ()

// Execute the doSomething function
doSomething ( 
  () => document.getElementById("ele").textContent = 'Hello Word !!'
)
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/dyMONjv).**