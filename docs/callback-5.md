# Ejemplo de Callback #5

Para ilustrar este ejemplo, primero mostramos un elemento `<p>` identificado como `"ele"`.

```html
<p id="ele"></p>
```

Luego, declaramos una función llamada `greet`, que recibe el argumento denominado `callback` quien recibe una función que será ejecutada como devolución de llamada dentro de la misma función `greet`.

```js
// Declare the greet function
const greet = function (callback) {
  callback();
}

// Execute the greet function
greet(function () {
  document.getElementById("ele").textContent = "Hello Jhon White !!";
});
```

Tenga en cuenta que despues de declarar la función `greet`, luego la ejecutamos pasando una función anónima como argumento.

Al refrescar el navegador, el resultado será el siguiente.
```sh
Hello Jhon White !!
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/jOqwgMY).**

Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.

```js
const greet = callback => callback()

greet(() => {
  document.getElementById("ele").textContent = "Hello Jhon White !!"
})
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/abNweBM).**
