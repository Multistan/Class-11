var trex,tresRuning
var ground

//preload is used to load the images, sounds or videos. 
function preload(){
trexRuning=loadAnimation("trex1.png", "trex3.png",  "trex4.png")
groundImage=loadImage("ground2.png")
}

function setup(){
createCanvas(400,400)

//creating object one time
trex=createSprite(20,300,30,30)
trex.addAnimation("running",trexRuning)
trex.scale=0.5


//ground
ground=createSprite(200,380,400,20)
ground.addImage("ground",groundImage)


}

function draw(){
  background("lightgray")



  drawSprites()


if(keyDown("space")){
trex.velocityY= -10
}

trex.velocityY= trex.velocityY + 0.8
trex.collide(ground)


}


