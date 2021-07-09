var sea, ship;
var shipmoving;
var seaImage;

function preload(){
seaImage= loadImage ("sea.png")
shipmoving= loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
}

function setup(){
  createCanvas(400,400);
  
//creating sea
sea=createSprite(400,200);
sea.addImage(seaImage)

//sea scale
sea.scale= 0.5;

//creating ship
ship=createSprite (130,200,30,30);
ship.addAnimation("moving",shipmoving);

//scale and position of ship
ship.scale=0.5;


}

function draw() {

background (0);

  if (sea.x<0){
    sea.x=sea.width/8;
  }

  sea.velocityX=-15;
  //console.log(sea.x);
  console.log(ship.x);
 
//stop the ship from falling
ship.collide(sea);

drawSprites(); 

}