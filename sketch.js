const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var airground,airground2;
var engine, world;
var block;
//var backgroundImg,platform;
var hexagon, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    airground = new Ground(900,250,300,20);
    airground2 = new Ground(600,450,300,20);

   // blockex = new Block(550,0,50,100);

   //1
    blockex2 = new Block(575,110,50,50);
  //  blockex3 = new Block(625,100,50,100);
    
   // blockex4 = new Block(500,200,50,100);
    block = new Block(550,210,50,50);
    block1 = new Block(600,210,50,50);

    block2 = new Block(525,310,50,50);
    block3 = new Block(575,310,50,50);
    block4 = new Block(625,310,50,50);
    //block5 = new Block(675,300,50,5);

    //block6 = new Block(450,400,50,100);
    block7 = new Block(500,410,50,50);
    block8 = new Block(550,410,50,50);
    block9 = new Block(600,410,50,50);
    block10 = new Block(650,410,50,50);


    //2
      blockex3 = new Block(875,35,50,50);
      //blockex3 = new Block(625,100,50,100);
     // blockex4 = new Block(500,200,50,100);
      block11 = new Block(850,70,50,50);
      block12 = new Block(900,70,50,50);
  
      block13 = new Block(825,110,50,50);
      block14 = new Block(875,110,50,50);
      block15 = new Block(925,110,50,50);
      //block5 = new Block(675,300,50,100);
  
      //block6 = new Block(450,400,50,100);
      block16 = new Block(800,210,50,50);
      block17 = new Block(850,210,50,50);
      block18 = new Block(900,210,50,50);
      block19 = new Block(950,210,50,50);
      //box2 = new Box(920,320,70,70);
      //pig1 = new Pig(810, 350);
      //log1 = new Log(810,260,300, PI/2);

      //box3 = new Box(700,240,70,70);
      //box4 = new Box(920,240,70,70);
      //pig3 = new Pig(810, 220);

      //log3 =  new Log(810,180,300, PI/2);

      //box5 = new Box(810,160,70,70);
      //log4 = new Log(760,120,150, PI/7);
      //log5 = new Log(870,120,150, -PI/7);

      hexagon = new Hexagon(100,400,0,20);

      //log6 = new Log(230,180,80, PI/2);

      slingShot = new SlingShot(hexagon.body,{x:200,y:400});
}

function draw(){
    background(200);
    Engine.update(engine);
    strokeWeight(4);

    //blockex.display();

    blockex2.display();
    //blockex3.display();

    //blockex4.display();
    block.display();
    block1.display();

    block2.display();
    block3.display();
    block4.display();
    //block5.display();

    //block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();


    //box2.display();
    ground.display();
    airground.display();
    airground2.display();

      blockex3.display();
      
      block11.display(); 
      block12.display(); 
  
      block13.display(); 
      block14.display(); 
      block15.display(); 
  
      block16.display();
      block17.display();
      block18.display();
      block19.display(); 

    //pig1.display();
    //log1.display();

       /* box3.display();
        box4.display();
    //    pig3.display();
      //  log3.display();

        box5.display();
        log4.display();
        log5.display();*/

    hexagon.display();
    //platform.display();
   // log6.display();
   slingShot.display();    
}


function mouseDragged(){

    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){

    slingShot.fly();

}
