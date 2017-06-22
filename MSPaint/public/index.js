var app = function () {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

// canvas.addEventListener('click', )  

var isMouseDown = false;
var currentShape = "s";

canvas.addEventListener('mousedown', function(event) {
   isMouseDown = true;
 })

canvas.addEventListener('mouseup', function(event) {
   isMouseDown = false;
 })

canvas.addEventListener('mousemove', function(event) {
  console.log("before if mousemove and mousedown");
  if ( isMouseDown ) {
    draw( circle, event.x-25, event.y-25 ) 
    if (currentShape == "s") {
     draw(square, event.x-25, event.y-25 );
    } else if (currentShape == "c")  {
     draw( circle, event.x-25, event.y-25 )
    }
  }  
 });

  var circle = function(x, y) {
    context.beginPath();
    context.arc(x, y, 10, 0, 2*Math.PI);
    context.fillStyle = 'black'
    context.fill()
  }

  var square = function(x, y) {
    context.fillStyle = 'black';
    context.fillRect(x, y, 25, 25);
  }

  // This is to change the brush type
  var squareButton = document.getElementById('square-button');
  squareButton.addEventListener('click', handlesSquareButton);

  var circleButton = document.getElementById('circle-button');
  circleButton.addEventListener('click', handlesCircleButton);

}

var draw = function (shape, x, y) {
    shape(x,y)
}  
  
var handlesSquareButton = function() {
  currentShape = "s"
  console.log("square selected");
}

var handlesCircleButton = function() {
  currentShape = "c"
  console.log("circle selected");
}

window.addEventListener('load', app);