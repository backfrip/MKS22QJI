console.log("Animation thing is in the other thing that does the thing. Woo!");

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#909090';

var circleButton = document.getElementById('circle');
var fastCircleButton = document.getElementById('fast-circle');
var stopCirclesButton = document.getElementById('stop');
var dvdButton = document.getElementById('dvd');
circleButton.addEventListener('click', animateNormalCircle);
fastCircleButton.addEventListener('click', animateFastCircle);
stopCirclesButton.addEventListener('click', stopStuff);
dvdButton.addEventListener('click', animateDVD);

var logo = new Image();
logo.src = './logo_dvd.jpg';
var ratio = logo.width.toFixed(2) / (canvas.width.toFixed(2) / 10.00);
logo.width = logo.width * ratio;
logo.height = logo.height * ratio;


var radius = 1;
var increment = 1;
var request = null;

function animateDVD() {
  stopStuff();
  ctx.drawImage(logo, 0, 0, logo.width, logo.height);
}

function animateCircle() {
  stopStuff();
  
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  
  if (radius <= 0 || radius >= canvas.width/2)
    increment *= -1;
  
  radius += increment;
  if (radius < 0)
    radius = 0;
  
  request = window.requestAnimationFrame(animateCircle);
}

function animateNormalCircle() {
  setIncrement(1);
  animateCircle();
}

function animateFastCircle() {
  setIncrement(3);
  animateCircle();
}

function stopStuff() {
  if (request != null) {
    window.cancelAnimationFrame(request);
    request = null;
  }
  clear();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setIncrement(n) {
  increment = increment / Math.abs(increment) * n;
}