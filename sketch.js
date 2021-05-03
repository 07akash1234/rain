const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder1,thunder2,thunder3,thunder4 
var drops=[]
function preload(){
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")
}

function setup(){
   var canvas = createCanvas(500,1000);
   engine=Engine.create()
   world=engine.world

   umbrella=new Umbrella(253,821)

if (frameCount%101 == 0){
   for ( var i=0; i<100;i++){
   drops.push(new Raindrops(random(0,400),random(0,500)))
     

   }
}   


   
   
}

function draw(){
    Engine.update(engine)

background(0)
rand = Math.round(random(1,4))
if (frameCount%100 == 0){
   thunder=createSprite(random(20,380),20,20)
   switch(rand){
      case 1:thunder.addImage(thunder1)
      break
      case 2:thunder.addImage(thunder2) 
      break
      case 3:thunder.addImage(thunder3)
      break
      case 4:thunder.addImage(thunder4)
      break
   }
   thunder.scale=random(0.2,0.6)
   thunder.lifetime=10


}
umbrella.display();
for ( var i=0; i<100;i++){
   drops[i].display()
drops[i].update()
}
drawSprites(); 
}

