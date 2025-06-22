# Ejemplo de Callback #6

Para ilustrar este ejemplo, primero mostramos un elemento `<p>` identificado como `"ele"`.

```html
<p id="ele"></p>
```

Luego, declaramos una función llamada `greet`, que recibe dos argumentos, el primero denominado `name` y el segundo denominado `callback` quien recibe una función que será ejecutada como devolución de llamada dentro de la misma función `greet`. Tenga en cuenta que el parámetro `name` a su vez es pasado como argumento cuando se invoca la función `callback` dentro de la función `greed`.

```js
// Declare the greet function
const greet = function (name, callback) {
  callback(name);
}

// Execute the greet function
greet("Jhon White", function (name) {
  document.getElementById("ele").textContent = `Hello ${name} !!`;
});
```

Tenga en cuenta que despues de declarar la función `greet`, luego la ejecutamos pasando una cadena de caracteres como primer argumento y una función anónima como segundo argumento. Esta función anónima, que será ejecutada como devolución de llamada, recibe un argumento denominado denominado `name`. 

Al refrescar el navegador, el resultado será el siguiente.
```sh
Hello Jhon White !!
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/YzqxKqQ).**

Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.

```js
const greet = (name, callback) => callback(name)

greet("Jhon White", name => {
  document.getElementById("ele").textContent = `Hello ${name} !!`
})
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/GRZvKqy).**
