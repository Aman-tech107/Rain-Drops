const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrop;

var array = [];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
raindrop = new Raindrop(5,5,5,50);
  //createSprite(400, 200, 50, 50);
  /*for (var a = 1; a<10; a++){
    //
  }*/
}

function draw() {
  background(255,255,255);  
  for(var a = 1; a < 100; a++){
    var xCordinate = random(0,400);
    array["rain"+a] = new Raindrop(xCordinate, 200, 5, 10);
  }
  Engine.update(engine);
  for(var a = 1; a<100;a++){
    
    var r = Math.round(random(0,99));
    var g = Math.round(random(0,99));
    var b = Math.round(random(0,99));
    fill("#"+r+g+b);
    
    array["rain"+a].display();
  }
  raindrop.display();
  drawSprites();
}