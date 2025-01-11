const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
    angle = (angle + 2) % 360; // Increment angle by 2 degrees, reset after a full rotation
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Center and rotate
}

// Rotate the line every 20ms
setInterval(rotateLine, 20);
