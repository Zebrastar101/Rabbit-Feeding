var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png");
  leafImg=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  //move rabbit
  rabbit.x= World.mouseX;

  //sppawning apples and leaves

  var select_spirtes = Math.round(random(1,2));

  if(frameCount% 80==0) {
    if(select_spirtes==1){
      createApples();
    }
    else{
      createLeaf();
    }
  }

  drawSprites();
}

function createApples(){
  //code for spawning apples at random
  apple= createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=3; 
}
function createLeaf(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=3;
}

