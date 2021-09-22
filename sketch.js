const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall;
 

var myengine, myworld;

function preload(){

}


function setup(){
  createCanvas(1600, 700);

  myengine = Engine.create();
  world = myengine.world;

  wall=new wall(80,100,100,200);
}


function draw(){

Engine.update(myengine);

wall.display();
    
}
