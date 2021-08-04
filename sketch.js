var balloon,balloonImage1,balloonImage2;
var database , position;



function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {

  createCanvas(1500,700);
  database=firebase.database();
  console.log(database)
  
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 

   database.ref("Ball/Position").on("value",function(data){
     position = data.val();
     balloon.x = position.x
     balloon.y = position.y
   })


}





function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(-1,0)
      
  }
  
  if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(1,0)

  }

   if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,-1)
    if(balloon.y < 300){
   balloon.scale =  0.4}

   if(balloon.y < 100){
    balloon.scale =  0.2}

   }
      

   if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,1)

    if(balloon.y > 550){
    balloon.scale =  0.8}}

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function writePosition(x,y){
  database.ref("Ball/Position").set({
   "x": position.x + x,
   "y": position.y + y,
  })
}


















