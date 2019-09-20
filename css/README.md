# CSS Cheatsheet

## Display
The Display property in CSS is responsible for how an elements sits in our HTML. You can overwrite this value in CSS but by default every element has its own display behavior. Below are the most common behaviors:

#### display: block
Block level elements take up the whole row, no matter what the size of the content. Example: `<p>` or `<div>`.

#### display: inline
Inline elements take up only as much as they need for their content. Example: `<a>` or `<span>`. Attempting to resize an inline element using `width` and `height` will have no effect on their sizing.

#### display: inline-block
`inline-block` is a combination of the two but it's closer to `inline`, meaning by default these elements will only grow as much as their content required, but they can be resized using `width` and `height` in CSS.

## Position
The `position` property can help you move and position elements in a certain way, if the default is not what you want.

#### positon: static
This is the default. Nothing changes and you don't even have to add this to your CSS.

#### positon: relative
Once an element is relative then it will be accepting `top`, `right`, `bottom` and `left` values if you want to move it slightly in any direction (in relation to their current place), as well as the `z-index` property for depth.

#### positon: absolute
This will also allow you to change the `top`, `right`, `bottom` and `left` properties but this time in relation to the first parent that is `position: relative`. So CSS will go up the chain of parents until it finds one. If none is found then the body will used as the frame to which the given element is positioned to.

#### positon: fixed
Same as `absolute` except the position will always be in relation to the main window and will not change while the user is scrolling.

## Box Model
Box Model is one of the most important concepts in HTML/CSS. It is the foundation of all elements and their spacing and sizing.
![alt text](https://github.com/ColorCode/web-fundamentals-sept-2019/blob/master/css/box-model.png "Box Model")

## Colors
There are many ways to use colors in CSS. You can apply any of the following methods to any CSS property that accepts color:
```
// English
background: red;

// HEX
background: #ff0000;

// RGB
background: rgb(255, 0, 0);
```

## Size
There are many ways to use sizes in CSS. More on sizes on [W3Schools](https://www.w3schools.com/cssref/css_units.asp).

#### Absolute Sizes
Absolute sizes are always the same, no matter what happens around them.
```
// PIXELS
font-size: 16px;
```

#### Relative Sizes
Absolute sizes are relative to some other size. Normally relative sizes are relative to the parent's size or the root element.
```
// PERCENTAGE
width: 50%;

// EM
font-size: 1em;

// REM
font-size: 1rem;
```

## Fonts
You can change your font and its style using the following properties. Be sure to try [Google Fonts](https://fonts.google.com/).
```
font-family: Arial, sans-serif;
font-weight: bold;
```

## Overflow
Here is a video from when I was young and scrappy, where I explain what overflow is:
[https://www.youtube.com/watch?v=26s5Ipd2zeM](https://www.youtube.com/watch?v=26s5Ipd2zeM)

This property will allow you to decide what to do with your content if there is too much of it within its container. Take this for example:

```
<ul>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ul>

ul {
  height: 10px;
}
```

Clearly there is too much content and 10px height is not enough to contain all of it. Here are options:

#### overflow: visible
It shows all of the content even if it spills out of the container. Bad option as it results in many ugly visual bugs.

#### overflow: hidden
It just hides any content that falls below the 10px height of the container.

#### overflow: scroll
It creates a scrollbar so that the user can scroll within the container and see the rest of the content.

#### overflow: auto
Basically the same thing as `scroll`. It creates the scroll ability only if there is too much content.

## Selectors and Psuedo Selectors
[Selectors and Psuedo Selectors on W3Schools](https://www.w3schools.com/cssref/css_selectors.asp). Lots of good examples there.

## Specificity
[CSS Specificity explanation in detail](https://css-tricks.com/specifics-on-css-specificity/) with lots of explanation and examples.

[CSS Specificity Calculator](https://specificity.keegan.st/), super dope.