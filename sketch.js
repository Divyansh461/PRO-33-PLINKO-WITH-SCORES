const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;



var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var count =0;



var PLAY = 0;
var END = 1;

var gamestate = "PLAY";
var particle; 

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
  
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

  }

 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
textSize(35);
textFont("HARRIGTON");
text("50",13,610);
text("100",93,610);
text("150",173,610);
text("200",253,610);
text("250",333,610);
text("300",413,610);
text("350",493,610);
text("400",573,610);
text("450",653,610);
text("500",733,610);







  push();
  textSize(50);
  fill(255,255,255);
  stroke(0,105,255);
  strokeWeight(5);
  text("SCORE:" + score , 10 , 50);
  pop();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if( gamestate == "END") {
     textSize(90);
     fill("blue")
     text("GAMEOVER",150,300);
   }



   //condition start
   if(particle != null) {

    particle.display();

    if(particle.body.position.y > 620 ) {

      if(particle.body.position.x < 80 ){

        score = score + 50;
        particle = null;
        if(count >= 5) gamestate = "END";
      
      } else if(particle.body.position.x > 80 && particle.body.position.x < 160) {
        score = score + 100;
        particle = null;
        if(count >= 5) gamestate = "END";

      } else if(particle.body.position.x > 160 && particle.body.position.x < 240 ) {
        score = score + 150;
        particle = null;
        if(count >= 5) gamestate = "END";
      }
       else if(particle.body.position.x > 240 && particle.body.position.x < 320 ) {
        score = score + 200;
        particle = null;
        if(count >= 5) gamestate = "END";
      }
       else if(particle.body.position.x > 320 && particle.body.position.x < 400 ) {
        score = score + 250;
        particle = null;
        if(count >= 5) gamestate = "END";
      }
       else if(particle.body.position.x > 400 && particle.body.position.x < 480 ) {
        score = score + 300;
        particle = null;
        if(count >= 5) gamestate = "END";
      }
       else if(particle.body.position.x > 480 && particle.body.position.x < 560 ) {
        score = score + 350;
        particle = null;
        if(count >= 5) gamestate = "END";
      }
       else if(particle.body.position.x > 560 && particle.body.position.x < 640 ) {
        score = score + 400;
        particle = null;
        if(count >= 5) gamestate = "END";
      }
       else if(particle.body.position.x > 640 && particle.body.position.x < 720 ) {
        score = score + 450;
        particle = null;
        if(count >= 5) gamestate = "END";
      }

    }
   }
//condition over


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

  if(count >= 5) {
    gamestate === "END";
  }


   }

 
}

function mousePressed() {
   
  if(gamestate !== "END") {
    count++;
    particle = new Particle(mouseX,100,10,10);
     
  }
}
