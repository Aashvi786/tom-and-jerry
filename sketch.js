var cat,mouse
var catAn,mouseAn
var catco,mouseco
var garden

function preload() {
 //load the images here
  catAn = loadAnimation("images/cat1.png");
  mouseAn = loadAnimation("images/mouse1.png");
  catco = loadAnimation("images/cat2.png");
  mouseco = loadAnimation("images/mouse4.png");
  garden = loadAnimation("images/garden.png");
 

}

function setup(){
    createCanvas(800,400);
    //create tom and jerry sprites here
   createCanvas(800,400);
   bg = createSprite(0,0,800,400);
   bg.addAnimation("bg",garden);
   bg.scale = 2
   mouse = createSprite(400,200,50,50);
   mouse.addAnimation("standing",mouseAn)
   mouse.scale = 0.06;
   cat = createSprite(100,200,50,50);
   cat.addAnimation("standing",catAn)
   cat.scale = 0.1;
   cat.addAnimation("touch",catco)
   mouse.addAnimation("touch",mouseco)
}

function draw() {
  
   cat.x = mouseX;
   cat.y = mouseY;
   if(isTouching(cat,mouse)){
    
    cat.changeAnimation("touch",catco)
    cat.scale = 0.1
    mouse.changeAnimation("touch",mouseco)
    mouse.scale = 0.06
    mouse.shapeColor="blue"
}
else{
  cat.changeAnimation("standing",catAn)
   mouse.changeAnimation("standing",mouseAn)
    
}
    drawSprites();
}

function isTouching(a,b){
  if(a.x-b.x<b.width/2+a.width/2
    && b.x-a.x<b.width/2+a.width/2
    && a.y-b.y<b.height/2+a.height/2
    && b.y-a.y<b.height/2+a.height/2){
      return true;
    }
    else{
      return false;
    }
}
function keyPressed(){

  //For moving and changing animation write code here


}
