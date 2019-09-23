# JS Cheatsheet
You could either put your JavaScript inside a `<script>` tag in your HTML or create a new file that ends with `.js` and connect it to your HTML like this:

```html
<script src="script.js"></script>
```

The name of the file could be anything. Mine is `script.js`, as long as it ends with `.js`.

## Variables
Variables are pieces of data that can be passed around and manipulated.

Declare a variable (create)
```js
var name = 'Sina';
var age = 12;
```

Reassign the value of a variable
```js
var name = 'Sina';
name = 'Jack';
```

### Variable types
Number
```js
var age = 10;
```

String
```js
var name = 'Sina';
```
###### (Remember: string value must be in 'single' or "double" quotes)

Boolean
```js
var coder = true;
// could be true or false
```

Array
```js
var friends = ['Kalen', 'George', 'Tim'];
```

Object
```js
var person = {
  name: 'Sina',
  age: 33,
  coder: true,
  friends: ['Jim', 'Karen']
};
```

## Functions
Functions are pizza! 🍕 We use functions to isolate repetitive work so we can delegate the work to it later instead of repeating ourselves.

Delcare a function (create)
```js
function myFunction () {
  // This is a function. All the logic will go here
}
```

Function that returns something
```js
function myFunction () {
  // This function returns a string with the value of 'banana'
  return 'banana';
}
```

Function that accept one parameter
```js
function myFunction (a) {
  // This function accepts one parameter called 'a' and logs it into the console
  console.log(a);
}
```

Function that accept multiple parameters
```js
function myFunction (num1, num2) {
  // This function accepts two parameters, num1 and num2, adds them together and returns the total value
  return num1 + num2;
}
```
