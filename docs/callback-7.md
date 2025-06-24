# Ejemplo de Callback #7

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

// Declare the greeting function
const greeting = function (name) {     
   document.getElementById("ele").textContent = `Hello ${name} !!`;
}

// Execute the greet function
greet("Jhon White", greeting);
```

Tenga en cuenta que, a diferencia del ejemplo anterior, en vez de pasar una función anónima como devolución de llamada, la declaramos antes de pasarla como la constante `greeting`.

Al refrescar el navegador, el resultado será el siguiente.
```sh
Hello Jhon White !!
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/vYGJBXe).**

Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.

```js
const greet = (name, callback) => callback(name)

const greeting = name => document.getElementById("ele").textContent = `Hello ${name} !!`  

greet("Jhon White", greeting)
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/oNxevYZ).**
