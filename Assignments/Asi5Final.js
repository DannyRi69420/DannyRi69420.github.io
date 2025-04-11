let cols = 10, rows = 10, cellSize = 40;
let grid = [], stack = [], player, timer = 30, gameOver = false;

function setup() {
    createCanvas(cols * cellSize, rows * cellSize);
    frameRate(30);
    createGrid();
    generateMaze();
    player = createVector(0, 0);
    setInterval(() => {
        if (timer > 0 && !gameOver) timer--;
        else if (timer === 0) {
            gameOver = true;
            alert("Time's Up! You Lose!");
        }
    }, 1000);
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.walls = { top: true, right: true, bottom: true, left: true };
        this.visited = false;
    }
    show() {
        let x = this.x * cellSize, y = this.y * cellSize;
        stroke(255);
        if (this.walls.top) line(x, y, x + cellSize, y);
        if (this.walls.right) line(x + cellSize, y, x + cellSize, y + cellSize);
        if (this.walls.bottom) line(x, y + cellSize, x + cellSize, y + cellSize);
        if (this.walls.left) line(x, y, x, y + cellSize);
    }
}

function createGrid() {
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            grid.push(new Cell(x, y));
        }
    }
}

function getCell(x, y) {
    return grid.find(c => c.x === x && c.y === y);
}

function getNeighbors(cell) {
    let neighbors = [];
    let directions = [
        { x: 0, y: -1, wall: "top", opposite: "bottom" },
        { x: 1, y: 0, wall: "right", opposite: "left" },
        { x: 0, y: 1, wall: "bottom", opposite: "top" },
        { x: -1, y: 0, wall: "left", opposite: "right" }
    ];
    directions.forEach(dir => {
        let neighbor = getCell(cell.x + dir.x, cell.y + dir.y);
        if (neighbor && !neighbor.visited) {
            neighbors.push({ neighbor, ...dir });
        }
    });
    return neighbors;
}

function generateMaze() {
    let start = getCell(0, 0);
    start.visited = true;
    stack.push(start);

    while (stack.length > 0) {
        let current = stack[stack.length - 1];
        let neighbors = getNeighbors(current);
        if (neighbors.length > 0) {
            let { neighbor, wall, opposite } = neighbors[floor(random(neighbors.length))];
            current.walls[wall] = false;
            neighbor.walls[opposite] = false;
            neighbor.visited = true;
            stack.push(neighbor);
        } else {
            stack.pop();
        }
    }
}

function draw() {
    background(0);
    grid.forEach(cell => cell.show());
    fill(0, 0, 255);
    noStroke();
    rect(player.x * cellSize + 5, player.y * cellSize + 5, cellSize - 10, cellSize - 10);
}

function keyPressed() {
    if (gameOver) return;
    let current = getCell(player.x, player.y);
    let next;
    if (keyCode === UP_ARROW) next = getCell(player.x, player.y - 1);
    if (keyCode === DOWN_ARROW) next = getCell(player.x, player.y + 1);
    if (keyCode === LEFT_ARROW) next = getCell(player.x - 1, player.y);
    if (keyCode === RIGHT_ARROW) next = getCell(player.x + 1, player.y);
    if (next && !current.walls[keyCode === RIGHT_ARROW ? "right" : keyCode === LEFT_ARROW ? "left" : keyCode === DOWN_ARROW ? "bottom" : "top"]) {
        player.x = next.x;
        player.y = next.y;
    }
    if (player.x === cols - 1 && player.y === rows - 1) {
        gameOver = true;
        alert("You Win!");
    }
}
