var helicopterIMG, helicopterSprite, packageSprite, packageIMG;

var packageBody,ground, lndZone;

var numberOfTimesBallBounced;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	numberOfTimesBallBounced = 0;

	lndZone = new landZone(400, 670, 20, 150);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	//console.log(numberOfTimesBallBounced);

	if(packageSprite.isTouching(groundSprite)){
		numberOfTimesBallBounced = numberOfTimesBallBounced + 1
  }
  stopAt3Bounces();

	packageSprite.x= packageBody.position.x  
	packageSprite.y= packageBody.position.y 
  
	drawSprites();
  	lndZone.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}

function stopAt3Bounces(){
  if(numberOfTimesBallBounced>=2){
    Matter.Body.setStatic(packageBody, true);
  }
}