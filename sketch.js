var backgroundI;
var cat , cat1 ,cat2,cat3,cat4;
var mouse , mouse1 , mouse2,mouse3,mouse4;




function preload() {
    
    backgroundI=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png" , "images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,20,20);
    cat.addAnimation("sitting",cat1);
    cat.scale=0.2;

    mouse=createSprite(200,600,20,20);
    mouse.addAnimation("sitting" , mouse1);
    mouse.scale=0.1;
    cat.debug=true;
    cat.setCollider("circle" , 0 ,0,10);

    

}

function draw() {

    background(backgroundI);
    //Write condition here to evalute if tom and jerry collide


    mouse.debug=true;
    if(cat.isTouching(mouse))
    {
        cat.velocityX=0;
        cat.addAnimation("teasedcat",cat3);
        cat.changeAnimation("teasedcat");
        mouse.addAnimation("teasedmouse" , mouse3);
        mouse.changeAnimation("teasedmouse");
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
      cat.velocityX=-4;
      cat.addAnimation("catrunning", cat2);
      cat.changeAnimation("catrunning");

      mouse.addAnimation("mouseteasing", mouse2);
      mouse.changeAnimation("mouseteasing");
  }


}
