let mover;

function setup() {
    createCanvas(600, 400);  
    mover = new Mover();     
}

function draw() {
    background(255);  
    mover.update();    
    mover.display();  
}


class Mover {
    constructor() {
        this.x = width / 2;     
        this.y = height / 2;
        this.radius = 30;       
        this.xSpeed = 2;        
        this.ySpeed = 3;        
    }

   
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        
        if (this.x > width - this.radius || this.x < this.radius) {
            this.xSpeed *= -1;  
        }

        if (this.y > height - this.radius || this.y < this.radius) {
            this.ySpeed *= -1;  
        }
    }

    
    display() {
        fill(100, 150, 255); 
        noStroke();            
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);  
    }
}