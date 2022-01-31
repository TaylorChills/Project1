const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF0000';
// ctx.fillRect(100, 0, 50, 50);
// ctx.fillRect(300, 0, 50, 50);
// ctx.fillRect(500, 0, 50, 50);

let horse1 = 0;
let horse2 = 0;
let horse3 = 0;

function clearCanvas() {
  ctx.clearRect(0, 0, 1000, 450); // 700 and 450 are canvas width and height
}

function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function updateCanvas() {
  // in order to see animation, let's change speed1,2 and 3 on every call
  horse1 += 1.5;
  horse2 += 1.8;
  horse3 += 1.7;

  // clear the canvas
  clearCanvas();

  // redraw the canvas
  drawCanvas(horse1, 50, 50, 50, 'red');
  drawCanvas(horse2, 100, 50, 50, 'green');
  drawCanvas(horse1, 150, 50, 50, 'yellow');

  requestAnimationFrame(updateCanvas);
}

updateCanvas()