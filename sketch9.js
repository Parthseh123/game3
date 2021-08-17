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
  targetImage = loadImage("../images/target.png");
  playerImage = loadImage("/images/player.png")
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
  side1 = createSprite(20, 300, 30, 730);
  side1.shapeColor = "purple";

  side2 = createSprite(680, 580, 1320, 30);
  side2.shapeColor = "purple";

  side3 = createSprite(1330, 200, 30, 730);
  side3.shapeColor = "purple";

  side4 = createSprite(680, 10, 1300, 30);
  side4.shapeColor = "purple";
  // obstacles
  obs1 = createSprite(300,415, 30, 300);
  obs1.shapeColor = "red";

  obs2 = createSprite(400,395, 30, 350);
  obs2.shapeColor = "red";

  obs3 = createSprite(500,385, 30, 370);
  obs3.shapeColor = "red";

  obs4 = createSprite(600,435, 30, 270);
  obs4.shapeColor = "red";

  obs5 = createSprite(700,415, 30,300);
  obs5.shapeColor = "red";

  obs6 = createSprite(800,415, 30,300);
  obs6.shapeColor = "red";


  obs7 = createSprite(300,70, 30, 90);
  obs7.shapeColor = "red";


  obs8 = createSprite(400,70, 30, 90);
  obs8.shapeColor = "red";

  obs9 = createSprite(500,70, 30, 90);
  obs9.shapeColor = "red";

  obs10 = createSprite(600,120, 30, 180);
  obs10.shapeColor = "red";

  obs11 = createSprite(700,70, 30, 90);
  obs11.shapeColor = "red";

  obs12 = createSprite(800,110, 30, 160);
  obs12.shapeColor = "red";

  obs13 = createSprite(500,70, 30, 90);
  obs13.shapeColor = "red";

  obs14 = createSprite(600,70, 30, 90);
  obs14.shapeColor = "red";

  obs15 = createSprite(300,450, 30, 200);
  obs15.shapeColor = "red";
  obs15.velocityY = -5;

  obs16 = createSprite(400,450, 30, 180);
  obs16.shapeColor = "red";
  obs16.velocityY = 6;

  obs17 = createSprite(500,450, 30, 170);
  obs17.shapeColor = "red";
  obs17.velocityY = 8;

  obs18 = createSprite(600,450, 30, 170);
  obs18.shapeColor = "red";
  obs18.velocityY = 3;

  obs19 = createSprite(700,450, 30, 170);
  obs19.shapeColor = "red";
  obs19.velocityY = 11;

  obs20 = createSprite(800,450, 30, 170);
  obs20.shapeColor = "red";
  obs20.velocityY = 2;
}

function draw() {
  background("black");

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);


  if(obs15.isTouching(obs7)){
    obs15.bounceOff(obs7)
  }

  if(obs15.isTouching(side2)){
    obs15.bounceOff(side2)
  }

  if(obs16.isTouching(obs8)){
    obs16.bounceOff(obs8)
  }

  if(obs16.isTouching(side2)){
    obs16.bounceOff(side2)
  }

  if(obs17.isTouching(obs9)){
    obs17.bounceOff(obs9)
  }

  if(obs17.isTouching(side2)){
    obs17.bounceOff(side2)
  }

  if(obs18.isTouching(obs10)){
    obs18.bounceOff(obs10)
  }

  if(obs18.isTouching(side2)){
    obs18.bounceOff(side2)
  }

  if(obs19.isTouching(obs11)){
    obs19.bounceOff(obs11)
  }

  if(obs19.isTouching(side2)){
    obs19.bounceOff(side2)
  }

  if(obs20.isTouching(obs12)){
    obs20.bounceOff(obs12)
  }

  if(obs20.isTouching(side2)){
    obs20.bounceOff(side2)
  }

  if (keyDown("down")) {
    player.y += 3
  };

  if (keyDown("up")) {
    player.y -= 3
  };

  if (keyDown("left")) {
    player.x -= 3
  };

  if (keyDown("right")) {
    player.x += 3
  };

  if (player.isTouching(side1)) {
    player.collide(side1)
    textSize(20);
    text("You can't go inside the wall", 500, 200);

  };
  if (player.isTouching(side2)) {
    player.collide(side2)
    textSize(20);
    text("You can't go inside the wall", 500, 200)
  };

  if (player.isTouching(side3)) {
    player.collide(side3)
    textSize(20);
    text("You can't go inside the wall", 500, 200)
  };
  if (player.isTouching(side4)) {
    player.collide(side4)
    textSize(20);
    text("You can't go inside the wall", 500, 200)
  };
  if (player.isTouching(obs1)) {
    player.collide(obs1)

    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };


  if (player.isTouching(obs2)) {
    player.collide(obs2)

    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520

  };


  if (player.isTouching(obs3)) {
    player.collide(obs3)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };


  if (player.isTouching(obs4)) {
    player.collide(obs4)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs5)) {
    player.collide(obs5)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs6)) {
    player.collide(obs6)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs7)) {
    player.collide(obs7)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520

    player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs8)) {
    player.collide(obs8)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs9)) {
    player.collide(obs9)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs10)) {
    player.collide(obs10)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs11)) {
    player.collide(obs11)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs12)) {
    player.collide(obs12)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs13)) {
    player.collide(obs13)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520

    player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs14)) {
    player.collide(obs14)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs15)) {
    player.collide(obs15)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs16)) {
    player.collide(obs16)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
  };

  if (player.isTouching(obs17)) {
    player.collide(obs17)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

 
  if (player.isTouching(obs18)) {
    player.collide(obs18)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs19)) {
    player.collide(obs19)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };

  if (player.isTouching(obs20)) {
    player.collide(obs20)
    let b = confirm("😢😭😭You Lost , Do you want to save your progress");
    console.log(b);
    player.x = 120
    player.y = 520
        player.velocityY = 0;
    player.velocityX = 0;
  };



  if (player.isTouching(target)) {
    let c = confirm("😎😎😀😀😁😁You won , Do you want to save your progress");
    console.log(c);
    player.x = 120;
    player.y = 520;


    window.open("http://127.0.0.1:5504/home2.html", "_self");
    winsound.play();
  }


  drawSprites();
}