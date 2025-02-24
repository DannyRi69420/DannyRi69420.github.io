let bgColor = 0;
let circleColor = 0;//1
let timesbounce = 0;
let limit = 3;//new
var velocity = 0;
acceleration = 0.1;
var ballY = 20; //2
//large canvas centered
function setup() {
  createCanvas(1500, 1000);
  bgColor = random(255); 
  circleColor = random(255);
  rectMode(CENTER);
}//1
//make circle start pos
function draw() {
    console.log();
background(bgColor); 
  fill(circleColor);//1
  ellipse(width/2, ballY, 10, 10);// 2
//bounce phys + bounce count
    if (ballY > height) {
    velocity =  -velocity*0.9;
     ballY = height;//2
     timesbounce++; 
     console.log(timesbounce)//new
}
//acceleration
   velocity += acceleration;
   ballY += velocity;//2
// making the ball change color
    if (ballY >= 900 && ballY <= 1000 && velocity < 0 && !colorChanged) {  
    circleColor = color(random(255), random(255), random(255));//1
    console.log("Color changed at ballY:", ballY);
    colorChanged = true; 
}
    if (ballY < 900 || ballY > 1000) {
    colorChanged = false; 
    // making the the bounce reset
}
    if (timesbounce > limit) {
        ballY = 0; 
        timesbounce = 0;
    
} //new


 }//new
function mouseClicked() {
  bgColor = color(random (255), random(255), random(255)); 
  circleColor = color(random (255), random(255), random(255)); //1
console.log("works");
}

// line 1,2,10-19,33,49-51 is from https://editor.p5js.org/ivymeadows/sketches/B1PpMXlsZ 
//line 5-7, 20-24, 29-30 is from https://editor.p5js.org/Alizarin/sketches/1Gfsnas9A

// numbered 1 is for having it where if you click the screen the color of both the canvas and the ball changes

// numbered 2 is for the ball bouncing releastically with the acceleration decreasing over time

 

