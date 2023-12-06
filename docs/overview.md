# Callbacks

## Callbacks / Function / 01

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

## Callbacks / Arrow / 01

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

## Callbacks / Function / 02

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

## Callbacks / Arrow / 02

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

## Callbacks / Function / 03

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

## Callbacks / Arrow / 03

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

7. Sync / Callbacks / Function / 04

https://codepen.io/ejimenez123/pen/vYGgJbz

8. Sync / Callbacks / Arrow / 04

https://codepen.io/ejimenez123/pen/GRZrveP

9. Sync / Callbacks / Function / 05

https://codepen.io/ejimenez123/pen/jOqwgMY

10. Sync / Callbacks / Function / 05

https://codepen.io/ejimenez123/pen/KKzqOgQ

11. Sync / Callbacks / Arrow / 05

https://codepen.io/ejimenez123/pen/abNweBM

12. Sync / Callbacks / Function / 06

https://codepen.io/ejimenez123/pen/YzqxKqQ

13. Sync / Callbacks / Arrow / 06

https://codepen.io/ejimenez123/pen/GRZvKqy

14. Sync / Callbacks / Function / 07

https://codepen.io/ejimenez123/pen/vYGJBXe

15. Sync / Callbacks / Arrow / 07

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
