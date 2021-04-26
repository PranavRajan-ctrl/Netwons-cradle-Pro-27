
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ground (700,50,500,20);
	Engine.run(engine);
	ball1 =new Ball(200,200,50,50);
	ball2 =new Ball(300,200,50,50);
	ball3 =new Ball(400,200,50,50);
	ball4 =new Ball(500,200,50,50);
	ball5 =new Ball(600,200,50,50);
	
	rope1 =new SlingShot(ball1.body,{x:500,y:50})
	rope2 =new SlingShot(ball2.body,{x:600,y:50})
	rope3 =new SlingShot(ball3.body,{x:700,y:50})
	rope4 =new SlingShot(ball4.body,{x:800,y:50})
	rope5 =new SlingShot(ball5.body,{x:900,y:50})

  

}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50})
	}
}


