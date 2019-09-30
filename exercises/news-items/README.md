# News Items
This exercise includes looping through an Array of objects that include news details and adding them to the DOM.


### What to do 
- Clone this repo and cd into this directory (`cd exercises/news-items`).
- `npm install`
- `npm start`
- Open your `script.js` and `index.html` files.
- I have already created 4 news items for you inside `data.js`. This file is being loaded into the `index.html` already so you don't need to do anything. The array is called `newsItems`, so you can access it that way. These news items include a `author`, `summary`, `date`, `image` and `link`.
- Create a list item (`<li>`) for each news item including:
  - `<h4>` containing the `date`
  - `<h6>` containing the `author`
  - `<p>` containing the `summary`


### NOTE:
- Please do _not_ modify the `data.js` file.
- You must use a `for` loop for this exercise.
- If you see repetition in your code, try to use functions.
- You are free to add any CSS you'd like (don't be afraid to get creative).

### Bonus 1:
- Append an `<img>` element inside each `li` that contains the `image`. (Be sure to limit your image to `50px` height).
- Style your news items to match the `greeting-news` exercise. This may require restructuring on your HTML.

### Bonus 2:
- Allow the user to click on news items and navigate them to the `link` property in the object.

_GOOD LUCK!!!_