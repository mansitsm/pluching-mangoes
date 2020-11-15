var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5;



function preload(){
    boyImage=loadImage("boy.png");
}

function setup(){
    createCanvas(600,600);

boy=createSprite(250,250,20,20);
boy.addImage(boyImage);


}

function draw(){

    drawSprites();
}


















