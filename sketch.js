const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint



function preload()
{
	
}


function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

  groundshwn = createSprite(750, 740 ,1000, 20)
  groundshwn.shapeColor = "blue"
	

	//Create the Bodies Here.
  
	ground = Bodies.rectangle(750, 740, 10000, 20,{isStatic:true})
	World.add(world, ground)

	tree = new Tree(1150, 440, 2)

	boy = new Boy(300, 645, 2)

	stone = new Stone(200, 540, 60)

	mango1 = new Mango(1200, 200, 35)
	mango2 = new Mango(1200, 250, 35)
	mango3 = new Mango(1100, 200, 35)
	mango4 = new Mango(1050, 400, 35)
	mango5 = new Mango(1400, 350, 35)
	mango6 = new Mango(1000, 350, 35)
	mango7 = new Mango(930, 330, 35)
	mango8 = new Mango(1300, 300, 35)
	mango9 = new Mango(1100, 300, 35)
	mango10 = new Mango(1030, 280, 35)
	mango11 = new Mango(1250, 380, 35)
	mango12 = new Mango(1200, 155, 35)
	mango13 = new Mango(1150, 300, 35)
	mango14 = new Mango(1250, 250, 35)

	chain1 = new chain(stone.body,{x:200, y:540})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  tree.display()
  
  boy.display()

  stone.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display() 
  mango11.display()
  mango12.display()
  mango13.display()
  mango14.display()

  chain1.display()

  detectCollision(stone, mango1)
  detectCollision(stone, mango2)
  detectCollision(stone, mango3)
  detectCollision(stone, mango4)
  detectCollision(stone, mango5)
  detectCollision(stone, mango6)
  detectCollision(stone, mango7)
  detectCollision(stone, mango8)
  detectCollision(stone, mango9)
  detectCollision(stone, mango10)
  detectCollision(stone, mango11)
  detectCollision(stone, mango12)
  detectCollision(stone, mango13)
  detectCollision(stone, mango14)

  drawSprite()
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    chain1.fly()
}




function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:200, y:540})
		chain1.attach(stone.body)
	}
}
