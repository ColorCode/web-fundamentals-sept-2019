# CSS Cheatsheet

## Display
The Display property in CSS is responsible for how an elements sits in our HTML. You can overwrite this value in CSS but by default every element has its own display behavior. Below are the most common behaviors:

#### display: block
Block level elements take up the whole row, no matter what the size of the content. Example: `<p>` or `<div>`.

#### display: inline
Inline elements take up only as much as they need for their content. Example: `<a>` or `<span>`. Attempting to resize an inline element using `width` and `height` will have no effect on their sizing.

#### display: inline-block
`inline-block` is a combination of the two but it's closer to `inline`, meaning by default these elements will only grow as much as their content required, but they can be resized using `width` and `height` in CSS.

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