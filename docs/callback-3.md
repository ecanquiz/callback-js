# Ejemplo de Callback #3

Para ilustrar este ejemplo, primero mostramos dos elementos `<input>` identificados como `"a"` y `"b"` respectivamente. Después mostramos un elemento `<button>` identificado como `"operate"`. Y por último, un elemento `<p>` identificado como `"ele"`.

```html
<input type="text" id="a"/>
<input type="text" id="b"/>

<button type="button" id="operate">Add</button>

<p id="ele"></p>
```

---

Luego, declaramos una función llamada `add`, que recibe tres argumentos: `a` y `b` que son valores que provienen de las correspondientes entrada de datos y `callback` quien recibe una función que será ejecutada como devolución de llamada dentro de la misma función `add`.
```js
// Declare the add function
const add = function (a, b, callback) { 
  return callback(a + b);
}

// Configure the addEventListener method
document.getElementById("operate").addEventListener('click', function() {
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value);
  add(a, b, function(r) {
    document.getElementById("ele").textContent = 'The result is: ' + r;
  })
})
```

Tenga en cuenta que configuramos el método `addEventListener`, el cual se llamará cada vez que se haga `click` en el elemento `operate`, con una función  anonima que deberá hacer lo siguiente:

- Asignar el valor del los elementos de entrada `a` y `b` en las correspondientes variables `a` y `b`.
- Llamar la función `add`, que recibe los argumentos `a` y `b` más una **función anónima que será ejecutada como `callback` dentro de la función `add`**.

>Tenga en cuenta que en la función de devolución de llamada se sumará `a` más `b` y mostrará el resultado en `r`.

**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/MWyJvXK).**


Ahora, mostraremos el mismo ejemplo pero esta vez usando Arrow Function.


```js
const add = (a, b, callback) => callback(a + b)

document.getElementById("operate").addEventListener('click', () => {
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value)
  add(a, b, r => document.getElementById("ele").textContent = 'The result is: ' + r )
})
```
**Pruébalo en [CodePen](https://codepen.io/ejimenez123/pen/yLOgoxY).**
