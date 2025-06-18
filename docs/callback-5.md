# Ejemplo de Callback #5

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