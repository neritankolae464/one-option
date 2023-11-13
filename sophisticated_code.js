// filename: sophisticated_code.js

/* 
This code generates a sophisticated and elaborate pattern using HTML5 canvas and JavaScript.
It is a visual representation of a scientific concept - the Mandelbrot Set.
The code is quite complex and uses advanced mathematics and programming techniques.
*/

// Canvas settings
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Mandelbrot settings
const MAX_ITERATIONS = 1000;
const ZOOM = 250;
const OFFSET_X = -2.5;
const OFFSET_Y = -1.5;
const COLORS = [
  '#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999'
];

// Function to check if a point is in the Mandelbrot Set
function isInMandelbrotSet(x, y) {
  let zx = x;
  let zy = y;
  let i = 0;

  while (i < MAX_ITERATIONS && zx * zx + zy * zy < 4) {
    const temp = zx * zx - zy * zy + x;
    zy = 2 * zx * zy + y;
    zx = temp;
    i++;
  }

  return i === MAX_ITERATIONS;
}

// Function to render the Mandelbrot Set
function renderMandelbrotSet() {
  for (let px = 0; px < WIDTH; px++) {
    for (let py = 0; py < HEIGHT; py++) {
      const x = (px / ZOOM) + OFFSET_X;
      const y = (py / ZOOM) + OFFSET_Y;

      if (isInMandelbrotSet(x, y)) {
        const colorIndex = Math.floor((COLORS.length - 1) * (px / WIDTH));
        ctx.fillStyle = COLORS[colorIndex];
      } else {
        ctx.fillStyle = '#000000';
      }

      ctx.fillRect(px, py, 1, 1);
    }
  }
}

// Clear canvas
ctx.clearRect(0, 0, WIDTH, HEIGHT);

// Render Mandelbrot Set
renderMandelbrotSet();