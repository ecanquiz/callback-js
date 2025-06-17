# Ejemplo de Callback #4

```html
<button type="button" id="btn">Press this button</button>
```

```js
const greet = function (name) {
  alert('Hello ' + name);
}

const processUserInput = function (callback) {
  let name = prompt('Please enter your name');
  callback(name);
}

document.getElementById("btn").addEventListener('click', function() {
  processUserInput(greet);  
})
```

https://codepen.io/ejimenez123/pen/vYGgJbz

## 04 - Callbacks (Arrow)

```html
<button type="button" id="btn">Press this button</button>
```

```js
const greet = name => alert('Hello ' + name)

const processUserInput = callback => {
  let name = prompt('Please enter your name')
  callback(name)
}

document.getElementById("btn").addEventListener('click', () => processUserInput(greet))
```

https://codepen.io/ejimenez123/pen/GRZrveP