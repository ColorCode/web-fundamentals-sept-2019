// Below is the structure for a for loop

// for ([initialExpression]; [condition]; [incrementExpression]) {
// insert code here
// }

// An example of a for loop is below
// This example will output in the console 0 to 99

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// Another example of a for loop that is more advanced but builds on the format above

for (let i = 0, j = 20; i < 20 && j < 100; i++, j += 5) {
  console.log("i ", i);
  console.log("j ", j);
}

// Let's add an if conditonal inside! Please look up Javascript operators to understand %
for (let i = 0; i < 100; i++) {
  let isCurrentValueEven = function() {
    return i % 2 == 0;
  };

  // The above can also be written in ES6 syntax. Comment out the above code and comment in the code below
  // let isCurrentValueEven = () => i % 2 == 0;

  if (isCurrentValueEven()) {
    console.log("evens ", i);
  }
}
