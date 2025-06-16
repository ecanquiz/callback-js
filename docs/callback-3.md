## 03 - Callbacks (Function)

```html
<input type="text" id="a"/>
<input type="text" id="b"/>

<button type="button" id="operate">Add</button>

<p id="ele"></p>
```

```js
const add = function (a, b, callback) { 
  return callback(a + b);
}

document.getElementById("operate").addEventListener('click', function() {
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value);
  add(a, b, function(r) {
    document.getElementById("ele").textContent = 'The result is: ' + r;
  })
})
```

https://codepen.io/ejimenez123/pen/MWyJvXK

## 03 - Callbacks (Arrow)

```html
<input type="text" id="a"/>
<input type="text" id="b"/>

<button type="button" id="operate">Add</button>

<p id="ele"></p>
```

```js
const add = (a, b, callback) => callback(a + b)

document.getElementById("operate").addEventListener('click', () => {
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value)
  add(a, b, r => document.getElementById("ele").textContent = 'The result is: ' + r )
})
```

https://codepen.io/ejimenez123/pen/yLOgoxY