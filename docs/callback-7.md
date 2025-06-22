# Ejemplo de Callback #7

```html
<p id="ele"></p>
```

```js
const greet = function (name, callback) {
  callback(name);
}

const greeting = function (name) {     
   document.getElementById("ele").textContent = `Hello ${name} !!`;
}

greet("Jhon White", greeting);
```

https://codepen.io/ejimenez123/pen/vYGJBXe

## 07 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const greet = (name, callback) => callback(name)

const greeting = name => document.getElementById("ele").textContent = `Hello ${name} !!`  

greet("Jhon White", greeting)
```

https://codepen.io/ejimenez123/pen/oNxevYZ
