# TwoInOne - Image Splitter

## How to install?
___
#### Install jquery
###### Local
```html
<script src="jquery-3.3.1.min.js"></script>
<script src="jquery-ui.min.js"></script>
```
###### Hosted
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
```
#### Install TwoInOne
###### Local
```html
<link rel="stylesheet" href="twoInOne.min.css">
<script src="twoInOne.min.js"></script>
```
###### Hosted
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/Macylion/TwoInOne---Image-Splitter/4e231387/TwoInOne/twoInOne.min.css">
<script src="https://cdn.rawgit.com/Macylion/TwoInOne---Image-Splitter/4e231387/TwoInOne/twoInOne.min.js"></script>
```
### Example
[Example at codepen.io](https://codepen.io/maciejkubus/pen/KxEeLQ)
## How to use?
___
#### Adding a Image Splitter 
```javascript
App.add('#container', 'img1.png', 'img2.png');
```
#### Changing default spacer position
```javascript
App.add('#container', 'img1.png', 'img2.png', 'center');
```
#### Adding a spacer icon
```javascript
App.add('#container', 'img1.png', 'img2.png', 'center', 'spacer.png');
```
#### Stylizing a spacer 
```css
.tio-stick{
  background-color: white;
  border: 2px dotted red;
}
```
## Mini-Documentation
___
#### App.add(containerDiv, firstImage, secondImage, spacerPosition, spacerIcon)
- containerDiv
  - String
  - Example ```'#cont'```
- firstImage
  - String
  - Example ```'img.png'```
- secondImage
  - String
  - Example ```'img2.png'```
- spacerPosition (optional)
  - String
  - Example ```'left'``` ```'center'``` ```'right'```
- spacerIcon (optional)
  - String
  - Example ```'spacer-icon.png'```
## Simple and Easy
