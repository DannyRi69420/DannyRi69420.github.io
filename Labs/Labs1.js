function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // Prevents continuous redrawing
}

function draw() {
    background(30);
    let spacing = 50;
    for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
            fill(random(100, 255), random(100, 255), random(100, 255)); // Random bright colors
            stroke(255);
            strokeWeight(2);
            rectMode(CENTER);
            rect(x, y, 40, 40); // Draw squares
        }
    }
}
