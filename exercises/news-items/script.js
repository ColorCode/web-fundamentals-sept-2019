var ul = document.getElementsByTagName('ul')[0];

for (var i = 0; i < newsItems.length; i++) {
  var item = newsItems[i];

  // Create list item
  var li = document.createElement('li');

  addThisToTheList('h4', item.date, li);
  addThisToTheList('h6', item.author, li);
  addThisToTheList('p', item.summary, li);
  addThisToTheList('img', item.image, li);

  // Add list item to list
  ul.appendChild(li);
};

function addThisToTheList (type, text, container) {
  // Create the element
  var element = document.createElement(type);

  // Add some text to it
  if (type === 'img') {
    element.src = text;
  } else {
    element.innerText = text;
  }

  // Add child to container
  container.appendChild(element);
}





