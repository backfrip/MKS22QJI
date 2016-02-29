var svg = document.getElementById('vimage');

function change(e) {
  e.preventDefault();
  this.setAttribute('fill', 'green');
}

function drawDot(x, y) {
  var c = document.createElementNS(
    'http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', 30);
    c.setAttribute('fill', 'yellow');
    c.setAttribute('stroke', 'black');
    c.addEventListener('click', change);
    svg.appendChild(c);
}

function clicked(e) {
  if (e.toElement == this) {
    drawDot(e.offsetX, e.offsetY);
  }
}

svg.addEventListener('click', clicked);
