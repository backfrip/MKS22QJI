var svg = document.getElementById('vimage');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var clearButton = document.getElementById('clear');
var startDVDButton = document.getElementById('start-dvd');
startButton.addEventListener('click', startCircle);
stopButton.addEventListener('click', stop);
clearButton.addEventListener('click', clear);
startDVDButton.addEventListener('click', startDVD);

var intervalID;
var increment = 1;
var vector = [1, 1];

function startCircle() {
  var c = document.createElementNS(
    'http://www.w3.org/2000/svg', 'circle');
  c.setAttribute('r', 10);
  c.setAttribute('cx', 250);
  c.setAttribute('cy', 250);
  c.setAttribute('fill', 'black');
  svg.appendChild(c);
  intervalID = window.setInterval(animateCircle, 16);
}

function startDVD() {
  var img = document.createElementNS(
    'http://www.w3.org/2000/svg', 'image');
  img.setAttribute('width', 120);
  img.setAttribute('height', 80);
  img.setAttributeNS('http://www.w3.org/1999/xlink','href', 'logo_dvd.jpg');
  img.setAttribute('x', 10);
  img.setAttribute('y', 10);
  svg.appendChild(img);
  intervalID = window.setInterval(animateDVD, 16);
}

function animateCircle() {
  var c = document.getElementsByTagName('circle')[0];
  var radius = parseInt(c.getAttribute('r'));
  
  radius += increment;
  if (svg.width.animVal.value / 2 <= radius || radius <= 0)
    increment *= -1;
  
  c.setAttribute('r', radius);
}

function animateDVD() {
  var img = document.getElementsByTagName('image')[0];
  
  var x = parseInt(img.getAttribute('x'));
  var y = parseInt(img.getAttribute('y'));
  var w = parseInt(img.getAttribute('width'));
  var h = parseInt(img.getAttribute('height'));
  if (x <= 0 || x + w >= parseInt(svg.getAttribute('width')))
    vector[0] *= -1;
  if (y <= 1 || y + h >= parseInt(svg.getAttribute('height')))
    vector[1] *= -1;
  
  // Change that pos.
  img.setAttribute('x', x + vector[0]);
  img.setAttribute('y', y + vector[1]);
}

function stop() {
  window.clearInterval(intervalID);
}

function clear() {
  stop();
  svg.innerHTML = '';
}

