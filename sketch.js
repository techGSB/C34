const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,Ground,Ball,Rope;



function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    Ground = new ground (600,600,2000,20);
    b1 = new box (900,100,70,70);
    b2 = new box (900,100,70,70);
    b3 = new box (900,100,70,70);
    b4 = new box (900,100,70,70);
    b5 = new box (900,100,70,70);
    b6 = new box (900,100,70,70);
    b7 = new box (800,100,70,70);
    b8 = new box (800,100,70,70);
    b9= new box (800,100,70,70);
    b10 = new box (800,100,70,70);
    b11 = new box (800,100,70,70);
    b12 = new box (800,100,70,70);
    b13 = new box (700,100,70,70);
    b14 = new box (700,100,70,70);
    b15 = new box (700,100,70,70);
    b16 = new box (700,100,70,70);
    b17= new box (700,100,70,70);
    b18 =  new box (700,100,70,70);
    b19 = new box (700,100,70,70);
    b20 = new box (700,100,70,70);
    Ball = new ball (200,200,80,80);
    Rope = new rope (Ball.body,{x:500,y:50});
     
}
 function draw(){
    
   background("lightgreen");
  Engine.update(engine);

   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
   b17.display();
   b18.display();
   b19.display();
   b20.display();
   Ball.display();
   Ground.display();
   Rope.display();
   

   

  
 }

 function mouseDragged(){
Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY});
 }