var ul = document.getElementsByTagName('ul')[0];

for (var i = 0; i < newsItems.length; i++) {
  var item = newsItems[i];

  // Create list item
  var li = document.createElement('li');

  // Date Element
  var date = document.createElement('h4');
  date.innerText = item.date;
  li.appendChild(date);
  
  // Author Element
  var author = document.createElement('h6');
  author.innerText = item.author;
  li.appendChild(author);
  
  // Summary Element
  var summary = document.createElement('p');
  summary.innerText = item.summary;
  li.appendChild(summary);

  // Image Element
  var image = document.createElement('img');
  image.src = item.image;
  li.appendChild(image);

  // Add list item to list
  ul.appendChild(li);
};