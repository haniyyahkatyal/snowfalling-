var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies;
 var snow=[]
var backgroundImg
var engine , world
function preload(){
 backgroundImg=loadImage("snow2.jpg") 
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
createSprite(400, 200, 50, 50);

}

function draw() {
  background(backgroundImg); 
  Engine.update(engine) 
  if(frameCount%10===0){
snow.push(new Snow(random(0,800),0,30))
  }
  for (var i=0;i<snow.length; l++){
    snow[i].display()
  }
  
  drawSprites();
}