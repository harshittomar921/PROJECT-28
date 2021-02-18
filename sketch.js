
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var world,boy;
var stone1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone1=new stone(250,460,23);
	mango1=new mango(1100,100,30);
	mango2=new mango(940,150,28);
	mango3=new mango(970,170,33);
	mango4=new mango(1005,225,30);
	mango5=new mango(1110,185,22);
	mango6=new mango(920,250,28);
	mango7=new mango(1000,50,25);
	mango8=new mango(1220,119,20);
	mango9=new mango(1120,231,34);
	 
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

 
  
  treeObj.display();
  stone1.display();
  mango1.display();
  mango3.display();
  mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
  groundObject.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
}
function mouseDragged(){
   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	attach.fly();
}
function keyPressed(){
	if(keyCode === 32){
	Matter.body.setPosition(stone1.body,{x:100,y:465})
	attach.Launch(stone1.body);
}
}
function detectCollision(lstone,lmango)
{
 mangoBodyPosition=lmango.body.position
 stone1BodyPosition=lstone.body.position

 var distance = dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if (distance<=lmango.r+lstone.r)
 {
	 Matter.Body.setStatic(lmango.body,false)
 }
}