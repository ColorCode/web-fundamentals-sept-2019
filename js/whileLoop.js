// The below code reads like this. We are going to declare a variable called currentNumber
// Then we are going to increment the currentNumber by one, and then console.log() it
let currentNumber = 0;
while (currentNumber < 5) {
  currentNumber++;
  console.log(currentNumber);
}

// The below code reads like this. We are going to declare a variable called n and x
// The below reads in english as "While n is less than three, increment n by one and then add n to x"

let n = 0;
let x = 0;
while (n < 5) {
  console.log("n ", n);
  console.log("x ", x);
  n++;
  x += n;
}
