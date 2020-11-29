const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand,object;
var polygon;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  
  object=new Ground();

  stand=new Ground(300,370,280,10);
  stand.shapeColor="yellow";
  box1=new Box(330,330,30,40);
  box1.shapeColor="blue";
  box2=new Box(360,330,30,40);
  box2.shapeColor="blue";
  box3=new Box(390,330,30,40);
  box3.shapeColor="blue";
  box4=new Box(420,330,30,40);
  box4.shapeColor="blue";
  box5=new Box(450,330,30,40);
  box5.shapeColor="blue";
  box6=new Box(480,330,30,40);
  box6.shapeColor="blue";
  box7=new Box(510,330,30,40);
  box7.shapeColor="blue";
  box8=new Box(360,290,30,40);
  box8.shapeColor="white";
  box9=new Box(390,290,30,40);
  box9.shapeColor="white";
  box10=new Box(420,290,30,40);
  box10.shapeColor="white";
  box11=new Box(450,290,30,40);
  box11.shapeColor="white";
  box12=new Box(480,290,30,40);
  box12.shapeColor="white";
  box13=new Box(390,250,30,40);
  box13.shapeColor="lighted";
  box14=new Box(420,250,30,40);
  box14.shapeColor="lightred";
  box15=new Box(450,250,30,40);
  box15.shapeColor="lightred";
  box16=new Box(420,210,30,40);
  box16.shapeColor="grey";

  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new Slingshot(this.polygon,{x:100,y:200});
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  stand.display();
  object.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}