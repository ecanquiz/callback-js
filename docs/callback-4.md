# Ejemplo de Callback #4

Para ilustrar este ejemplo, primero mostramos un elemento `<button>` identificado como `"btn"`.

```html
<button type="button" id="btn">Press this button</button>
```

---

Luego, declaramos una función llamada `greet`, que recibe el argumento `name`.

Después, declaramos una función llamada `processUserInput`, que recibe un argumento llamado `callback` quien recibe una función que será ejecutada como devolución de llamada dentro de la misma función `processUserInput`.

```js
// Declare the greet function
const greet = function (name) {
  alert('Hello ' + name);
}

// Declare the greet processUserInput
const processUserInput = function (callback) {
  let name = prompt('Please enter your name');
  callback(name);
}

// Configure the addEventListener method
document.getElementById("btn").addEventListener('click', function() {
  processUserInput(greet);  
})
```

Tenga en cuenta que dentro de la función `processUserInput` se le solicitará que, por favor, introduzca su nombre, el cual se pasará como argumento al `callback`.

También configuramos el método `addEventListener`, el cual se llamará cada vez que se haga `click` en el elemento `btn`, con una función  anonima que a su vez invoca la función `processUserInput` pasando la función `greet` como argumento.

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/vYGgJbz).**

Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.

```js
const greet = name => alert('Hello ' + name)

const processUserInput = callback => {
  let name = prompt('Please enter your name')
  callback(name)
}

document.getElementById("btn").addEventListener('click',
  () => processUserInput(greet)
)
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/GRZrveP).**
