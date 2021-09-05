
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var wall1;
var wall2;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball = Bodies.circle(200,100,10,ball_options);
    ground =new Ground(500,390,1000,10);
    wall1 = new Ground(600,350,10,70);
	wall2 = new Ground(800,350,10,70);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,10);
  ground.show();
  wall1.show();
  wall2.show();
 // rect(ground.position.x,ground.position.y,1000,20);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:9,y:8})
	}
}


