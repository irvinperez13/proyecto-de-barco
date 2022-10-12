var barco;
var mar;
var varco;
var mar2;
function preload(){
 barco = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 mar = loadImage("sea.png");
 


}

function setup(){
  createCanvas(400,400);
  mar2 = createSprite(200,250);
 mar2.addImage(mar);
 mar2.scale =0.3;
 varco = createSprite(200,200);  
 varco.addAnimation("navegador",barco);
 varco.scale =0.3;
}

function draw() {
  background("blue");
 drawSprites()
}