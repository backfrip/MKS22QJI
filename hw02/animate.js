console.log("Animation thing is in the other thing that does the thing. Woo!");

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#909090';

var circleButton = document.getElementById('circle');
var fastCircleButton = document.getElementById('fast-circle');
circleButton.addEventListener('click', animateCircle);
fastCircleButton.addEventListener('click', animateFastCircle);

var radius = 1;
var increment = 1;

function animateCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  
  if (radius <= 0 || radius >= canvas.width/2)
    increment *= -1;
  
  radius += increment;
  if (radius < 0)
    radius = 0;
  
  window.requestAnimationFrame(animateCircle);
}

function animateFastCircle() {
  increment = 3;
  animateCircle();
}