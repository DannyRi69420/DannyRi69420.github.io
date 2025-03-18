let particles = []; // for array of dots
        let colors = ["red", "blue", "green", "yellow", "purple"]; // diff colour array

        function setup() {
            createCanvas(600, 400);
        }

        function draw() {
            background(220);
            
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].show();
                
                // will remove dot once times up
                if (particles[i].lifespan <= 0) {
                    particles.splice(i, 1); 
                }
            }
        }

        function mousePressed() {
            let color = random(colors); 
            particles.push(new Particle(mouseX, mouseY, color)); 
        }// this creates dot with ran colour at mouse x,y 

        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.vx = random(-2, 2);
                this.vy = random(-2, 2);
                this.color = color;
                this.lifespan = 255;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.lifespan -= 5;
            }// updating life and makes dot move once dot is created

            show() {
                fill(this.color);
                noStroke();
                ellipse(this.x, this.y, 20);
            }
        }