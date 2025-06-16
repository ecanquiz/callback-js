# Ejemplo de Callback #2

Mostramos un elemento HTML `<p>` identificado con la propiedad `id` definida como `"ele"`.
```html
<p id="ele"></p>
```

Declaramos una función llamada `doSomething` que recibe un argumento denominado `callback`. Como su nombre lo indica, `callback` recibe una función que será ejecutada dentro de la misma función `doSomething`.
```js
// Declare the doSomething function
const doSomething = function (callback) {
  callback('Hello Word !!');
}

// Execute the doSomething function
doSomething(function(valueThatTheySetMe){
  document.getElementById("ele").textContent = valueThatTheySetMe;
});
```
Tenga en cuenta que despues de declarar la función `doSomething`, luego la ejecutamos pasando una función anónima como argumento.

:::tip
A diferencia del [ejemplo anterior](./callback-1.html), esta vez la función anónima recibirá un argumento denominado `valueThatTheySetMe` que será establecido como `'Hello Word !!'` cuando se invocado dentro de la función `doSomething`.
:::

Al refrescar el navegador, el resultado será el siguiente.

```sh
Hello Word !!
```

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/BaKpoMx).**

Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.

```js
const doSomething = callback => callback('Hello Word !!')

doSomething(
  valueThatTheySetMe => document.getElementById("ele").textContent = valueThatTheySetMe
)
```
**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/KKzadEJ).**
