var x = 0;
var y = 0;
function setup(){
    createCanvas(720,480);
    
}

function draw(){
    background("#c4c7b9");
    rect(x,y,10,10);
    x = x + 1;
    x = x % 700;
    y = y + 1;
    y = y % 400;
}
console.log(x);