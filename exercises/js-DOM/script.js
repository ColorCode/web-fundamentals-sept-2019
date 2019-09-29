var colors = ['red', 'blue', 'green', 'brown', 'black', 'pink'];


for (var i = 0; i < colors.length; i++) {
  // Create a list item
  var listItem = document.createElement('li');
  // Change the color of the element
  listItem.style.backgroundColor = colors[i];
  // Type in the actual color
  listItem.innerText = colors[i];
  // Find my UL
  var list = document.getElementById('my-list');
  // Add the LI to the UL
  list.appendChild(listItem);
}

// Find the host
var heading = document.getElementById('my-heading');
// Change the content of the host
heading.innerText = 'We have ' + colors.length + ' colors';






