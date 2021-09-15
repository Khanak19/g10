var form;
var app;
var bgImg
var gameState=0
var sM1, yogaImg,ykImg,yg1,yg2,yg1S,yg2S,bg2,bg2,bg4,yg3,yg3S,yg4,yg4S,yg5,yg5S;
var ykA,mountPS,mountainp,heroP,heroPS,triP,triPS,cPS,cP,title,musicImg;
var sM2,sM3,s1,s2,s3,study1,study2,study3
function preload(){
  bgImg = loadImage("bg.png")
  sM1 = loadImage("sM1.jpg")
  yogaImg = loadImage("yoga.jpg")
  ykImg = loadImage("Yk.png")
  yg1 = loadImage("butterflyP.png") 
  yg2 = loadImage("cobra.png")
  yg1S = loadSound("butterP.mp3")
  yg2S = loadSound("cobP.mp3")
  bg2 = loadImage("bg2.png")
  bg3 = loadImage("bg3.png")
  bg4 = loadImage("bg4.png")
  yg3 = loadImage("treePose.png")
  yg3S = loadSound("treeP.mp3")
  yg4 = loadImage("lotusPose.png")
  yg4S = loadSound("lotP.mp3")
  yg5 = loadImage("sittingPose.png")
  yg5S = loadSound("sitP.mp3")
  ykA = loadImage("ygA.png")
  mountP = loadImage("mP.png")
  mountPS = loadSound("mountainp.mp3")
  heroP = loadImage("heroP.png")
  heroPS = loadSound("heroS.mp3")
  triP = loadImage("yga1.png")
  triPS = loadSound("TriP.mp3")
  cP = loadImage("chidlP.png")
  cPS = loadSound("childS.mp3")
  title = loadImage("title.png")
  musicImg = loadImage("music.jpg")
  sM2 = loadImage("sM2.jpg")
  sM3 = loadImage("sM3.jpg")
  s1 = loadImage("study1.jpeg")
  s2 = loadImage("study2.jpg")
  s3 = loadImage("study3.jpg")
  study1 = loadSound("st1.mp3")
  study2 = loadSound("st2.mp3")
  study3 = loadSound("st3.mp3")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  app = new App();
  //game.getState();
  app.start();
}


function draw(){
  if(gameState===1){
    background(bg2);
     app.yoga();
     app.music();
  }
 if(gameState===2){
    
   background(bg3);
 app.yogaKids();
 app.yogaAdults();
 }
 if (gameState===3){
   background(bg4)
   app.yoga1();
 }
 if (gameState===4){
   background(bg4)
   app.yoga2();
 }
 if (gameState===5){
   background("yellow")
   app.music1();
   app.music2();
   app.music3();
 }
 if (gameState===6){
   background("green")
 }
 if (gameState===7){
  background("red")
  app.studyM();
}
if (gameState==8){
  background("blue")
}
if (gameState===9){
  background("pink")
}
}
