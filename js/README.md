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

## Conditionals (if statement)
Conditionals allow us to compare two pieces of data, including variables.

```js
// Checking to see if a variable is smaller than 21
var age = 19;
if (age < 21) {
  console.log('You are too young to drink.');
}
```

```js
// Checking to see if a variable is smaller than 10
var howManyTimeYouCoded = 14;
if (howManyTimeYouCoded > 10) {
  console.log('You are a serious coder!');
} else {
  console.log('Just beginning, thats cool!');
}
```

```js
// Checking to see if it's morning, afternoon or evening
var hour = 19;
if (hour < 12) {
  console.log('good morning');
} else if (hour < 18) {
  console.log('good afternoon');
} else {
  console.log('good evening');
}
```

#### AN EXPLANATION OF FOR LOOP SYNTAX
```js
if (IF THIS CONDITION IS TRUE, DO WHAT IS INSIDE THE CURLIES) {
  // Do the following
}
```

```js
if (IF THIS CONDITION IS TRUE, DO WHAT IS INSIDE THE CURLIES) {
  // Do the following
} else if (OTHERWISE, IF THIS OTHER CONDITION IS TRUE)
  // Do the following
} else {
  // In all other case do this.
}
```

## Loops (for)
Loops or 'iterators' are used to perform operations on lists. Say we have an array of people and we want to `console.log` all their names. We could do it two ways:

The not so great way:
```js
var people = ['Alexander', 'George', 'Eliza', 'Angelica'];
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
console.log(people[3]);
```

Or we could use a `for` loop, which is waaaaaay better:
```js
var people = ['Alexander', 'George', 'Eliza', 'Angelica'];

for (var i = 0; i < people.length; i++) {
  console.log(people[i]);
}
```

We could even reverse the order in which we log starting from the end of the array:
```js
var people = ['Alexander', 'George', 'Eliza', 'Angelica'];

for (var i = people.length - 1; i >= 0; i--) {
  console.log(people[i]);
}
```

#### AN EXPLANATION OF FOR LOOP SYNTAX
```js
for (Start from this index, Continue as long as this condition is true, Do this after each iteration) {
  // Do this to each element
}
```



