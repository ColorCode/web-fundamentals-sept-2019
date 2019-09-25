// Similar to a for in loop, but this one is better for Arrays

const animals = ["cat", "dog", "cat-dog"];

// Don't use the below for arrays
// for (let i in animals) {
//   console.log(i); // logs "0", "1", "2"
// }

for (let i of animals) {
  console.log(i); // logs 'cat', 'dog', 'cat-dog'
}
