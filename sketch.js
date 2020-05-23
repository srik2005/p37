var ball,position,database,beta,clear,allpositions,canvas;

function setup() {
   createCanvas(400,400);
  
  ball = createSprite(250, 250, 10, 2);

position = [];
database = firebase.database();

clear = createButton('clear') ;
clear.position(200, 500);
clear.mousePressed(cleardrawing)
}

function draw() {
  background(0)
  ball.visible = false;
 
beginShape();
  stroke("blue");
  strokeWeight(50);
 noFill();


for(i = 0 ; i<position.length; i++ ){
vertex(position[0], position[1])
console.log(position)
database.ref('/').set({   
  name : position
})
endShape();
}
  
  


  drawSprites();
}
function mouseDragged(){

 
  var point = { x : mouseX, y: mouseY } 
  position.push(point);
  console.log(position)
 
}
function cleardrawing(){
position = [];
database.ref('name').set({   
  name : position
})
console.log(position)
}
