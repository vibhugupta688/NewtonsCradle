const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5,sling1,sling2,sling3,sling4,sling5;
var bg1Image;
function preload(){
bg1Image = loadImage("newtons-cradle-2.jpg")
}


function setup(){
  createCanvas(550,550);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Pendulum(150,300,"crimson")
  bob2 = new Pendulum(210,300,"yellowgreen")
  bob3 = new Pendulum(270,300,"yellow")
  bob4 = new Pendulum(330,300,"turquoise")
  bob5 = new Pendulum(390,300,"darkorchid")
  sling1 = new Sling(bob1.body,{x:150,y:50})
  sling2 = new Sling(bob2.body,{x:210,y:50})
  sling3 = new Sling(bob3.body,{x:270,y:50})
  sling4 = new Sling(bob4.body,{x:330,y:50})
  sling5 = new Sling(bob5.body,{x:390,y:50})
  
  Engine.run(engine)
}

function draw(){
  background("black")

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  fill("white");
  textSize(30);
   textFont("Goudy Stout Regular");
 text("Newton's Cradle",20,400);
 fill("white");
 textFont("Ink Free Regular")
 text("(Drag the left bob to experiment the law; ",10,450);
 text("Conservation of Energy by Newton)",50,480);
 text("- Vibhu",400,530);

  Engine.update(engine)
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
 
}