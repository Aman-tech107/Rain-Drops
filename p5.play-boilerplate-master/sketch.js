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
  for(var a = 1; a < 2000; a++){
    var xCordinate = random(0,400);
    var yCordinate = random(0,-600);
    
    var heightrandom = random(5,10);
    
    array["rain"+a] = new Raindrop(xCordinate, yCordinate, 5, heightrandom);
  }
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  //for(var b = 1; b < 3; b--){

    for(var a = 1; a<2000;a++){
      var r = Math.round(random(0,99));
      var g = Math.round(random(0,99));
      var b = Math.round(random(0,99));
      fill("#"+r+g+b);

      array["rain"+a].display();
      //array["rain"+a].yCordinate = 5;
    }
  //}
  
  for(var a = 1; a<2000;a++){
    if(array["rain"+a].body.position.y > 400){
      delete array["rain"+a];
      var xCordinate = random(0,400);
      var yCordinate = random(0,-600);
    
      var heightrandom = random(5,10);
      array["rain"+a] = new Raindrop(xCordinate,yCordinate,5,heightrandom);
    }
  }

  /*raindrop.display();

  if(raindrop.body.position.y > 400){
    raindrop = new Raindrop(5,5,200,10);
    console.log("More than 400");
  }*/
  //console.log("Y Position "+raindrop.body.position.y);
  

//raindrop.display();



  drawSprites();
}