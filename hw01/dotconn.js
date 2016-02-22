// Clear Canvas Button Setup
var button = document.getElementById('button');
button.addEventListener('click', clearCanvas);

// Canvas Setup
var c = document.getElementById('playground');
var ctx = c.getContext('2d');
c.addEventListener('click', function(e) { drawDot(e.offsetX, e.offsetY); });
ctx.strokeStyle = '#000000';
ctx.fillStyle = '#999999';

// Last drawn dot location, [x, y]
var lastDot = null;

// Clear the canvas and reset lastDot
function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
    lastDot = null;
}

// Draw a connecting line from lastDot to a
//  new dot at the point (x, y). Set lastDot
//  to [x, y].
function drawDot(x, y) {
    if (lastDot) {
        ctx.beginPath();
        ctx.moveTo(lastDot[0], lastDot[1]);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, 5, 0*Math.PI, 2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    lastDot = [x, y];
}