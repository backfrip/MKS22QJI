// (Just to make sure it's working.)
console.log("Animation thing is in the other thing that does the thing. Woo!");

// Canvas and context initial setup.
var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#909090';

// Set up ALL the buttons. (I guess this is why they added
// 'onClick' and and stuff, even if it isn't very good practice.)
var circleButton = document.getElementById('circle');
var fastCircleButton = document.getElementById('fast-circle');
var stopCirclesButton = document.getElementById('stop');
var dvdButton = document.getElementById('dvd');
circleButton.addEventListener('click', animateNormalCircle);
fastCircleButton.addEventListener('click', animateFastCircle);
stopCirclesButton.addEventListener('click', stopStuff);
dvdButton.addEventListener('click', animateDVD);

// Get tha logo! (And declare some helpy vars.)
var logo = new Image();
logo.src = './logo_dvd.jpg';
var ratio = null;
var pos = null;
var vector = [2.5, 2];

// Make them circle animation variables.
var radius = 1;
var increment = 1;
var request = null;

// Makes the logo bounce around.
function animateDVD() {
  stopStuff(); // fancy clear() wrapper
  if (ratio == null)
    sizeSetup(); // make logo a decent size
  
  // Draw the picture where it's s-pos-ed to be.
  ctx.drawImage(logo, pos[0], pos[1], logo.width, logo.height);
  
  // Flip the vector if we're on the edge [of glory]
  if (pos[0] <= 0 || pos[0] + logo.width >= canvas.width)
    vector[0] *= -1;
  if (pos[1] <= 1 || pos[1] + logo.height >= canvas.height)
    vector[1] *= -1;
  
  // Change that pos.
  pos[0] += vector[0];
  pos[1] += vector[1];
  
  // Here's my number, you go draw that then call me.
  request = window.requestAnimationFrame(animateDVD);
}

// Should probably be called as an animateDVD wrapper, but for
// now is called within and shoves arbitary sizes into logo.
function sizeSetup() {
  // Why did I have to put this setup in a separate function?
  // I have no idea. JavaScript generally does not behave like
  // I expect it to. Also, the whole 'Number' thing stinks.
  ratio = canvas.width / logo.width / 5;
  logo.width *= ratio;
  logo.height *= ratio;
  pos = [canvas.width/2 - logo.width/2, canvas.height/2 - logo.height/2];
}

// The general function for fancy circlemation.
function animateCircle() {
  stopStuff(); // fancy clear() wrapper
  
  // Draw the circle with radius of radius
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  
  // If the radius plops outside reasonable sizes,
  // go the other way!
  if (radius <= 0 || radius >= canvas.width/2)
    increment *= -1;
  
  // Radius changing happens here.
  radius += increment;
  // Quick-fix zero catching.
  if (radius < 0)
    radius = 0;
  
  // Call me again! (When you have time.)
  request = window.requestAnimationFrame(animateCircle);
}

// animateCircle wrapper that sets a normal ratio
function animateNormalCircle() {
  setIncrement(1);
  animateCircle();
}

// animateCircle wrapper that sets a snazzy ratio
function animateFastCircle() {
  setIncrement(5);
  animateCircle();
}

// Stop the current animation request (assuming it
// was called by a properly implemented function).
function stopStuff() {
  // If there's a thread runnin', kill it!
  if (request != null) {
    window.cancelAnimationFrame(request);
    request = null;
  }
  // And clear for the sake of everyone involved.
  clear();
}

// Clear the canvas!
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Do some wizardry with the increment that makes sure it
// comes out with the same sign after resizing it.
function setIncrement(n) {
  increment = increment / Math.abs(increment) * n;
}