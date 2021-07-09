var sea
var shipmoving;

function preload(){
sea= loadImage ("sea.png")
shipmoving.loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
//creating ship
ship=createSprite (50,160,50,100);
ship.addAnimation("moving",shipmoving);

//scale and position of ship
ship.scale=0.5;
ship.x=50

//creating sea
sea=createSprite(200,180,400,20);
sea.addImage(sea)

}

function draw() {

background("white")

  if (sea.x<0){
    sea.x=sea.width/2;
  }

  sea.velocityX=-15;
  console.log(sea.x);
 
//stop the ship from falling
ship.collide(sea);

}