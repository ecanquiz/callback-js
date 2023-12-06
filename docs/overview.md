# Callbacks

## 01 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const doSomething = function (callback) {
  callback();
}

doSomething(function () {
  document.getElementById("ele").textContent = "Hello Word !!";
});
```

```sh
Hello Word !!
```

https://codepen.io/ejimenez123/pen/VwamPva

## 01 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const doSomething = callback => callback ()

doSomething ( 
  () => document.getElementById("ele").textContent = 'Hello Word !!'
)
```

```sh
Hello Word !!
```

https://codepen.io/ejimenez123/pen/dyMONjv

## 02 - Callbacks (Function)

```html
<p id="ele"></p>
```

```js
const doSomething = function (callback) {
  callback('Hello Word !!');
}

doSomething(function(valueThatTheySetMe){
  document.getElementById("ele").textContent = valueThatTheySetMe;
});
```

```sh
Hello Word !!
```

https://codepen.io/ejimenez123/pen/BaKpoMx

## 02 - Callbacks (Arrow)

```html
<p id="ele"></p>
```

```js
const doSomething = callback => callback('Hello Word !!')

doSomething(
  valueThatTheySetMe => document.getElementById("ele").textContent = valueThatTheySetMe
)
```

```sh
Hello Word !!
```

https://codepen.io/ejimenez123/pen/KKzadEJ

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

## 04 - Callbacks (Function)

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

## 06 - Callbacks (Function)

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

## 07 - Callbacks (Function)

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

16. Sync / Callbacks / Function / 08

https://codepen.io/ejimenez123/pen/bGprbgm

17. Sync / Callbacks / Arrow / 08

https://codepen.io/ejimenez123/pen/OJNjLmw

18. Sync / Callbacks / Function / 09

https://codepen.io/ejimenez123/pen/OJNjLjo

19. Sync / Callbacks / Arrow / 09

https://codepen.io/ejimenez123/pen/wvGqwqQ

20. Sync / HowDoPromisesWorkInJS / Function / 01

https://codepen.io/ejimenez123/pen/abNEWeb

21. Sync / HowDoPromisesWorkInJS / Arrow / 01

https://codepen.io/ejimenez123/pen/yLOpXBZ

22. Sync / HowDoPromisesWorkInJS / Function / 02

https://codepen.io/ejimenez123/pen/vYGpZEx

23. Sync / HowDoPromisesWorkInJS / Arrow / 02

https://codepen.io/ejimenez123/pen/qBZpjOZ

24. Sync / HowDoPromisesWorkInJS / Function / 03

https://codepen.io/ejimenez123/pen/NWNXgxB

25. Sync / HowDoPromisesWorkInJS / Arrow / 03

https://codepen.io/ejimenez123/pen/dyMJRXN

26. Sync / HowDoPromisesWorkInJS / Function / 04

https://codepen.io/ejimenez123/pen/oNxpwzY

27. Sync / HowDoPromisesWorkInJS / Arrow / 04

https://codepen.io/ejimenez123/pen/YzqYQpQ
