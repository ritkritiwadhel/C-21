function setup() {
  createCanvas(1200,800);
 car =  createSprite(200, 200, 80, 50);  //moving object
 car.shapeColor = "red";
 wall = createSprite(600,200,30,100);   //fixed object
 wall.shapeColor = "blue";
 bike = createSprite(600,200,100,30);
 bike.shapeColor = "brown";
 bike.velocityX = 4;
 fence = createSprite(1000,200,20,80);
fence.shapeColor = "green";

}

function draw() {
  background(0,0,0);
  console.log(car.width/2+wall.width/2)
  car.x = World.mouseX;
  car.y = World.mouseY;

 if(isTouching(bike,fence)){
  bike.shapeColor = "pink";
  fence.shapeColor = "pink";
 }
 else{
  bike.shapeColor = "brown";
  fence.shapeColor = "green";
 }
 bounceOff(bike,fence);
  drawSprites();
}

//when distance is not there to collide
//when car.x-wall.x = car.width/2+wall.width/2