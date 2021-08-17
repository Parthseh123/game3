var player;
var edges;
var side1;
var side2;
var side3;
var side4;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var obs7;
var obs8;
var obs9;
var obs10;
var obs11;
var obs12;
var obs13;
var obs14;
var obs15;
var obs16;
var obs17;
var obs18;
var obs19;
var obs20;
var obs21;
var obs22;
var obs23;
var obs24;
var obs25;
var obs26;
var obs27;
var obs28;
var obs29;
var obs30;
var obs31;
var obs32;
var target;
var target2;
// let a = prompt("what is your name","Guest")
//  console.log(a)

function preload() {
  //load game assets
  groundImage = loadImage("../images/background.png");
  targetImage = loadImage("../images/target4.png");
  playerImage = loadImage("/images/player4.png")
  winsound = loadSound("winso.mp3")
}


function setup() {
  createCanvas(1350,600);
  bg = createSprite(600,300);
  bg.scale=2.5;
  bg.addImage(groundImage);


  
 
  edges = createEdgeSprites();
 
 player = createSprite(90,520,50,50);
 player.shapeColor = "white"
 
 target = createSprite(1200,100,50,50);
 target.shapeColor = "blue";
// sides
 side1 = createSprite(20,300,30,730);
 side1.shapeColor = "purple";

 side2 = createSprite(680,580,1320,30);
 side2.shapeColor = "purple";

 side3 = createSprite(1330,200,30,730);
 side3.shapeColor = "purple";

 side4 = createSprite(680,10,1300,30);
 side4.shapeColor = "purple";
// obstacles
 obs1 = createSprite(80,440,90,30);
 obs1.shapeColor = "red";

 obs2 = createSprite(200,520,30,90);
 obs2.shapeColor = "red";

 obs3 = createSprite(110,400,30,90);
 obs3.shapeColor = "red";

 obs4 = createSprite(150,370,100,30);
 obs4.shapeColor = "red";

 obs5 = createSprite(270,460,170,30);
 obs5.shapeColor = "red";

 obs6 = createSprite(160,370,130,30);
 obs6.shapeColor = "red";

 obs7 = createSprite(250,370,30,80);
 obs7.shapeColor = "red";
 obs7.velocityY = 1


 obs8 = createSprite(210,320,30,120);
 obs8.shapeColor = "red";

 obs9 = createSprite(245,270,100,30);
 obs9.shapeColor = "red";

 obs10 = createSprite(120,270,160,30);
 obs10.shapeColor = "red";

 obs11 = createSprite(340,400,30,100);
 obs11.shapeColor = "red";

 obs12 = createSprite(280,230,30,100);
 obs12.shapeColor = "red";

 obs13 = createSprite(340,190,150,30);
 obs13.shapeColor = "red";

 obs14 = createSprite(430,360,210,30);
 obs14.shapeColor = "red";

 obs15 = createSprite(450,470,30,190);
 obs15.shapeColor = "red";

 obs16 = createSprite(280,100,30,150);
 obs16.shapeColor = "red";

 obs17 = createSprite(520,300,30,100);
 obs17.shapeColor = "red";

 
 obs18 = createSprite(570,240,130,30);
 obs18.shapeColor = "red";

 obs19 = createSprite(490,50,150,30);
 obs19.shapeColor = "red";
 obs19.velocityY = 3;

 obs20 = createSprite(1000,150,30,160);
 obs20.shapeColor = "red";
 obs20.velocityX -= 3;

 obs21 = createSprite(630,140,150,30);
 obs21.shapeColor = "red";

 obs22 = createSprite(1100,490,30,150);
 obs22.shapeColor = "red";

 obs23 = createSprite(1010,430,150,30);
 obs23.shapeColor = "red";

 obs24 = createSprite(950,350,30,150);
 obs24.shapeColor = "red";

 obs25 = createSprite(830,390,150,30);
 obs25.shapeColor = "red";
 obs25.velocityY = 3;

 obs26 = createSprite(1200,350,150,30);
 obs26.shapeColor = "red";
 


 obs27 = createSprite(695,350,150,30);
 obs27.shapeColor = "red"
 

}

function draw() {
  background("black");
 
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  if(obs7.isTouching(obs5)){
    obs7.bounceOff(obs5)
  }

      if(obs7.isTouching(obs9)){
        obs7.bounceOff(obs9)
      }

          if(obs19.isTouching(obs18)){
            obs19.bounceOff(obs18)
              }
        
              if(obs19.isTouching(side4)){
                obs19.bounceOff(side4)
                  }

                  if(obs25.isTouching(side4)){
                    obs25.bounceOff(side4)
                      }
                
                      if(obs25.isTouching(side2)){
                        obs25.bounceOff(side2)
                          }

                        
                              if(obs26.isTouching(side2)){
                                obs26.bounceOff(side2)
                                  }
                
                                
                                      if(obs26.isTouching(side4)){
                                        obs26.bounceOff(side4)
                                          }

                  


  if(keyDown("down")) {
    player.y +=3};

    if(keyDown("up")) {
      player.y -=3};
    
      if(keyDown("left")) {
        player.x -=3};

        if(keyDown("right")) {
          player.x +=3};

          if(player.isTouching(side1)) {
            player.collide(side1)
            textSize(20);
            text("You can't go inside the wall",500,200);
          };
          if(player.isTouching(side2)) {
            player.collide(side2)
            textSize(20);
            text("You can't go inside the wall",500,200)
          };
          
          if(player.isTouching(side3)) {
            player.collide(side3)
           textSize(20);
            text("You can't go inside the wall",500,200)
          };
            if(player.isTouching(side4)) {
              player.collide(side4)
             textSize(20);
            text("You can't go inside the wall",500,200)
            };
            if(player.isTouching(obs1)) {
              player.collide(obs1)
            
            let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };
            

            if(player.isTouching(obs2)) {
              player.collide(obs2)
  
            let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520

            };
            

            if(player.isTouching(obs3)) {
              player.collide(obs3)
            let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            }; 
            

              if(player.isTouching(obs4)) {
                player.collide(obs4)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
              };
            
            if(player.isTouching(obs5)) {
              player.collide(obs5)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs6)) {
              player.collide(obs6)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs7)) {
              player.collide(obs7)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs8)) {
              player.collide(obs8)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs9)) {
              player.collide(obs9)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs10)) {
              player.collide(obs10)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs11)) {
              player.collide(obs11)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs12)) {
              player.collide(obs12)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs13)) {
              player.collide(obs13)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs14)) {
              player.collide(obs14)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs15)) {
              player.collide(obs15)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs16)) {
              player.collide(obs16)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
            };

            if(player.isTouching(obs17)) {
              player.collide(obs17)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
             player.velocityX = 0;
                   player.velocityY = 0;
            };

            if(player.isTouching(obs18)) {
              player.collide(obs18)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
             player.velocityX = 0;
                   player.velocityY = 0;
            };

            if(player.isTouching(obs19)) {
              player.collide(obs19)
              let b = confirm("😢😭😭You Lost , Do you want to save your progress");
            console.log(b);
            player.x=120
             player.y=520
             player.velocityX = 0;
                   player.velocityY = 0;
            };

            if(obs20.isTouching(obs21)){
                obs20.bounceOff(obs21)
               };
            
                  if(obs20.isTouching(side3)){
                    obs20.bounceOff(side3);
                  
                  };
  
                  if(player.isTouching(obs20)) {
                    player.collide(obs20)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520
                   player.velocityX = 0;
                   player.velocityY = 0;
                  };
  
                  if(player.isTouching(obs21)) {
                    player.collide(obs21)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520
                   player.velocityX = 0;
                   player.velocityY = 0;
                  };
  
                  if(player.isTouching(obs22)) {
                    player.collide(obs22)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520
                   player.velocityX = 0;
                   player.velocityY = 0;
                  };
  
                  if(player.isTouching(obs23)) {
                    player.collide(obs23)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520
                   player.velocityX = 0;
                   player.velocityY = 0;
                  };
  
                  if(player.isTouching(obs24)) {
                    player.collide(obs24)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520
                   player.velocityX = 0;
                   player.velocityY = 0;
                  };

                  if(player.isTouching(obs25)) {
                    player.collide(obs25)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520
                   player.velocityX = 0;
                   player.velocityY = 0;
                  };

                  if(player.isTouching(obs26)) {
                    player.collide(obs26)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520

                   obs26.x=1200
                   obs26.y=490

                   player.velocityX = 0;
                   player.velocityY = 0;
                  };

                  if(player.isTouching(obs27)) {
                    player.collide(obs27)
                    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
                  console.log(b);
                  player.x=120
                   player.y=520

                   

                   player.velocityX = 0;
                   player.velocityY = 0;
                  };

           

            if(player.isTouching(target)) {
            let b = confirm("😎😎😀😀😁😁You won , Do you want to save your progress");
            console.log(b);
            player.x=120;
             player.y=520;

             window.open("http://127.0.0.1:5505/home5.html","_self");
             winsound.play();
             

                
          }          

            drawSprites();

          }
          
          

  
