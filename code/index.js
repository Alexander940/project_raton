const canvas = document.getElementById("cuadro");
const lienzo = canvas.getContext("2d");
var line = new Line();

canvas.addEventListener("click", swal("To select a figure first", "Welcome"));

menu = document.getElementById("menu");

getElementsSelection = [
  star_button = document.getElementById("star"),
  line_button = document.getElementById("line"),
  square_button = document.getElementById("square"),
  circle_button = document.getElementById("circle")
]

getElements = [
  red_button = document.getElementById("red"),
  indianred_button = document.getElementById("indianred"),
  lightcoral_button = document.getElementById("lightcoral"),
  salmon_button = document.getElementById("salmon"),
  darksalmon_button = document.getElementById("darksalmon"),
  lightsalmon_button = document.getElementById("lightsalmon"),
  purple_button = document.getElementById("purple"),
  fuchsia_button = document.getElementById("fuchsia"),
  navy_button = document.getElementById("navy"),
  blue_button = document.getElementById("blue"),
  teal_button = document.getElementById("teal"),
  aqua_button = document.getElementById("aqua"),
  green_button = document.getElementById("green"),
]

  star_button.addEventListener("click", colors);
  line_button.addEventListener("click", colors);
  square_button.addEventListener("click",colors)
  circle_button.addEventListener("click",colors)

// This function is the container of the listeners of all buttons

  function colors(md) {
    menu.classList.add("show");
    line.mdType = md;
    red_button.addEventListener("click", listener);
    indianred_button.addEventListener("click", listener)
    lightcoral_button.addEventListener("click", listener);
    salmon_button.addEventListener("click", listener);
    darksalmon_button.addEventListener("click", listener);
    lightsalmon_button.addEventListener("click", listener);
    purple_button.addEventListener("click", listener);
    fuchsia_button.addEventListener("click", listener);
    navy_button.addEventListener("click", listener);
    blue_button.addEventListener("click", listener);
    teal_button.addEventListener("click", listener);
    aqua_button.addEventListener("click", listener);
    green_button.addEventListener("click", listener);
  }

  
// This function listen the actions to the mouse

function listener(md)
{
  line.color = md.target.id
  const toggler = event => line.initialMouse(event)
  canvas.addEventListener("mousedown", toggler);
  canvas.addEventListener("mouseup",() => setTimeout(line.endMouse(event),100))
}

//This function draw a line in the canvas

function drawLine(xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = line.color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function drawCircle(positionInitX, positionInitY, positionEndX, positionEndY, color) {
  let halfpointX = (positionInitX + positionEndX)/2
  let halfpointY = (positionInitY + positionEndY)/2
  let radio = radioForTeoPit(positionInitX, positionInitY, positionEndX, positionEndY)
  lienzo.beginPath()
  lienzo.strokeStyle = color
  lienzo.lineWidth = 3
  lienzo.arc(halfpointX, halfpointY, radio, 0, 2 * Math.PI)
  lienzo.stroke()
  lienzo.closePath()
}


function radioForTeoPit (positionInitX, positionInitY, positionEndX, positionEndY) {
  let a = Math.abs(positionInitX - positionEndX)
  let b = Math.abs(positionInitY - positionEndY)
  let h = Math.sqrt(a ** 2 + b ** 2)/2
  return h
}
