let input, button;
let npcText = "Hello mighty warrior! Will you help me on my quest?";
let playerResponse = "";
let botReply = "";

function setup() {
  createCanvas(600, 400);
  
    input = createInput("");
    input.position(20, 20);
  
  button = createButton("Submit");
  button.position(input.x + input.width + 10, 20);//button's position will be next to textbox
  button.mousePressed(getResponse); //gets answer from npc
}

function draw() {
  background(0);
  fill(255);
  text("Your response: " + playerResponse, 20, 150);
  text("Bot: " + botReply, 20, 200);
  if (botReply ==="") {
    text("Bot: " + npcText, 20, 200)
    }           //the bot will ask question immediately 
}


function getResponse() {
  playerResponse = input.value().toLowerCase();
  if (playerResponse === "yes") {
    botReply = "Lets goooooo, ok so the quest is helping me find love!";
  } else if (playerResponse === "no") {
    botReply = "OH.........I hate you:(";
  } else {
    botReply = "I do not understand sir.";
  }             //the responses bot can give
}
