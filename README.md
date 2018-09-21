# TwoInOne - Image Splitter

## Installation
___
#### Install jquery
```html
<script src="jquery-3.3.1.min.js"></script>
<script src="jquery-ui.min.js"></script>
```
#### Install TwoInOne
```html
<link rel="stylesheet" href="twoInOne.min.css">
<script src="twoInOne.min.js"></script>
```
## Using
___
#### Adding a Image Splitter 
```javascript
App.add('#container', 'img1.png', 'img2.png');
```
#### Changing default spacer position
```javascript
App.add('#container', 'img1.png', 'img2.png', 'center');
```
#### Adding a spacer image 
```javascript
App.add('#container', 'img1.png', 'img2.png', 'center', 'spacer.png');
```
#### Stylizing a spacer bar 
```css
#container .tio-stick{
  background-color: white;
  border: 2px dotted red;
}
```
## Mini-Documentation
___
#### App.add(firstImage, secondImage, spacerPosition, spacerIcon)
- firstImage
  - String
  - Example ```'img.png'```
- secondImage
  - String
  - Example ```'img2.png'```
- spacerPosition (optional)
  - String
  - Example ```'left'``` ```'center'``` ```'right'```
- spacerIcon
  - String
  - Example ```'spacer-icon.png'```
## Simple and Easy 👌👍😆❤️❤️
