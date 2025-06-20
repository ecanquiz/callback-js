# Ejemplo de Callback #6

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