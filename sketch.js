const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint;

var engine,bodies,world;
var ball,ground,box,rope;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world ;

ball = new Ball(400,200,20);
box = new Box(200,300,100,100);
ground = new Ground(400,390,800,20);
rope = new Rope(ball.ball,{x : 400 , y : 5})
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  ball.display();
  ground.display();
  box.display();
  rope.display();
}