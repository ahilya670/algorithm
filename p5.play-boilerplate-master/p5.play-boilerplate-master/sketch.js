var movingRect, fixedRect;
function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "white";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "white";
}

function draw(){
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2 ){
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";
  }

  else{
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";
  
  }

  drawSprites();
}