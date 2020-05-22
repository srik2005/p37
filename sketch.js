var ball,position,database,beta,clear;

function setup() {
  createCanvas(400,400);
  background("white")
  ball = createSprite(250, 250, 10, 2);
position = [];
database = firebase.database();

clear = createButton('clear') ;
clear.position(200, 500);
clear.mousePressed(cleardrawing)
}

function draw() {
 background(0);
  ball.visible = false;
 
beginShape();
  stroke("blue");
  strokeWeight(50);
 noFill();


for(i = 0 ; i<position.length; i++ ){
vertex(position[0], position[1])
console.log(position)
endShape();
}
  
  


  drawSprites();
}
function mouseDragged(){
 
  ball.x = mouseX;
  ball.y = mouseY; 
  position = [ball.x,ball.y]
  

}
function cleardrawing(){
position = [];


}