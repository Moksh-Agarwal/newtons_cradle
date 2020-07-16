
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var constraint;
var con2, con3,con4,con5;
var ball,ball1,ball2,ball3,ball4, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,100,200,10);
	ball = new paper(400,300,30);
	ball1 = new paper(430,300,30);
	ball2 = new paper(460,300,30);
	ball3 = new paper(370,300,30);
	ball4 = new paper(340,300,30);
	Engine.run(engine);
	constraint= new chain(ball.body,ground.body,0,0);
	
    con2= new chain(ball2.body,ground.body,60,0);
	con3= new chain(ball3.body,ground.body,-30,0);
	con4= new chain(ball4.body,ground.body,-60,0);
	con5= new chain(ball1.body,ground.body,30,0);
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
 
  constraint.display();
  con2.display();
  con3.display();
  con4.display();
  con5.display();

  ground.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
  drawSprites();
 
}

function keyPressed()
  {
    if(keyCode === UP_ARROW)
    {
      Matter.Body.applyForce(ball.body, ball.body.position,{x:-50, y:-45})
    }
  }

