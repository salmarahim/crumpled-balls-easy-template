
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
//create ground variable


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
//Create the ball body Here and add it to the world



//create ground here



//create left side and right side here using the ground class



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  // display the ground


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	//write code here to apply force on ball body
  
	}
}


