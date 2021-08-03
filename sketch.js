const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine,world;
var ground;

var ball;

function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world;
var groundOption={
  isStatic:true,
}
ground=Bodies.rectangle(200,300,600,20,groundOption);
World.add(world,ground);
var ballOption={
  restitution:1.0
}
ball=Bodies.circle(200,100,50,ballOption);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,600,20);
ellipse(ball.position.x,ball.position.y,50,50);
  drawSprites();

}