var ul = document.getElementsByTagName("ul")[0];
var data;

getData();

async function getData() {
  var apiKey = "55a4dab1f5ca429791695c0827736162";
  var url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
    apiKey;
  var request = new Request(url);
  var response = await fetch(request);
  var responseBody = await response.json();
  data = responseBody.articles;
  addItemsToPage();
}

function addItemsToPage() {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    // Create list item
    var li = document.createElement("li");
    li.className = "news-item";
    li.id = "item" + i;

    // Create Network h5
    var network = document.createElement("div");
    network.className = "news-item__network";
    network.innerText = item.author;
    li.appendChild(network);

    // Create Div for Details (h5)
    var detailsDiv = document.createElement("div");
    detailsDiv.className = "news-item__details";
    li.appendChild(detailsDiv);

    // Add image to div detail
    var img = document.createElement("img");
    img.src = item.urlToImage;
    img.className = "news-item__image";
    detailsDiv.appendChild(img);

    // Create Div for text
    var textDiv = document.createElement("div");
    textDiv.className = "news-item__text";
    detailsDiv.appendChild(textDiv);

    // Create Date container (p)
    var date = document.createElement("p");
    date.innerText = item.publishedAt;
    date.className = "news-item__date";
    textDiv.append(date);

    // Create Title container (p)
    var title = document.createElement("p");
    title.innerText = item.title;
    textDiv.append(title);

    // Add list item to list
    ul.appendChild(li);
  }
}
