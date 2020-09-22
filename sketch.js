const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var pinko1,pinko2,pinko3,pinko4,pinko5;
var particles1;
var divider1,divider2,divider3,divider4,divider5,divider6;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground=Ground(240,240,480,480,20);
  pinko1=Pinkos(10,20,50);
  pinko2=Pinkos(30,20,50);
  pinko3=Pinkos(50,20,50);
  pinko4=Pinkos(80,20,50);
  pinko5=Pinkos(110,20,50);

  particles1=Particles(280,0,50);

  divider1=Divison(80,800,5,200);
  divider2=Divison(160,800,5,200);
  divider3=Divison(280,800,5,200);
  divider4=Divison(360,800,5,200);
  divider5=Divison(440,800,5,200);
  divider6=Divison(478,800,5,200);

  


  createSprite(400, 200, 50, 50);
}
var pinkos=[];
var particles=[];
var divisions=[];
var diviseHeight=200;
for(k=0;k<=width; k=k+80){
  divison.push(new divisions(k,height,diviseHeight/2,10,diviseHeight));
}
for(var j=50;j<=width;j=j+50){
  pinkos.push(new pinkos(j,75));
}

for(var j=15;j<=width;j=j+60){
  pinkos.push(new pinkos(j,175));
}

for(var j=0;j<particles.length;j++){
  particles[j].display();
}
for(var k=0;k<divisions.length;k++){
  division[k].display();
}


function draw() {
  background(255,255,255); 
  ground.display();
  pinko1.display();
  pinko2.display();
  pinko3.display();
  pinko4.display();
  pinko5.display();

  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  
  pacticles1.display();
  drawSprites();
}
