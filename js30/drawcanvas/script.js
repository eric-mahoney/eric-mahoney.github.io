// create canvas element and append it to document body
var canvas = document.querySelector(".draw-canvas");

// get canvas 2D context and set him correct size
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#000000";
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
document.addEventListener("mouseup", removeStroke);
document.addEventListener("keydown", handleKeyPress);

// new position from mouse event
function setPosition(e) {
  console.log(e);
  pos.x = e.clientX - canvas.offsetLeft;
  pos.y = e.clientY - canvas.offsetTop;
}

function removeStroke() {
  ctx.closePath();
}

// resize canvas
function resize() {
  if (window.innerWidth < 800) {
    ctx.canvas.width = window.innerWidth * 0.9;
    ctx.canvas.height = window.innerHeight * 0.9;
  } else {
    ctx.canvas.width = window.innerWidth * 0.5;
    ctx.canvas.height = window.innerHeight * 0.5;
  }
}

function setStroke(color) {
  ctx.strokeStyle = color;
}

function handleKeyPress(e) {
  switch (e.key) {
    case "0":
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      break;
    case "1":
      setStroke("#E54B4B");
      break;
    case "2":
      setStroke("#006cba");
      break;
    case "3":
      setStroke("#44CF6C");
      break;
    case "4":
      setStroke("#F4D35E");
      break;
    case "5":
      setStroke("#151515");
      break;
  }
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}
