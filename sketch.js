var gameState=0;

function preload(){

}

function setup(){
    createCanvas(1536,753);
}

function draw(){
if(gameState===0){
    background("white")
    var clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=1;
    
 }));
 textSize(24);
    fill("black");
    text("background-color:white",700,300)
    text("Click on this button",725,350);
}
if(gameState===1){
    background("blue");
    clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=2;
 }));
 textSize(24);
    fill("black");
    text("background-color:blue",700,300);
    text("Click on this button",725,350);
}
if(gameState===2){
    background("yellow");
    clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=3;
 }));
 textSize(24);
    fill("black");
    text("background-color:yellow",700,300);
    text("Click on this button",725,350);
}

if(gameState===3){
    background("grey");
    clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=4;
 }));
 textSize(24);
    fill("black");
    text("background-color:grey",700,300);
    text("Click on this button",725,350);
}

if(gameState===4){
    background("green");
    clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=5;
 }));
 textSize(24);
    fill("black");
    text("background-color:green",700,300);
    text("Click on this button",725,350);
}

if(gameState===5){
    background("pink");
    clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=6;
 }));
 textSize(24);
    fill("black");
    text("background-color:pink",700,300);
    text("Click on this button",725,350);
}

if(gameState===6){
    background("red");
    clickme=createButton("click me");
    clickme.position(750,375);
    if(clickme.mousePressed(function(){
    gameState=0;
 }));
 textSize(24);
    fill("black");
    text("background-color:red",700,300);
    text("Click on this button",725,350);
}


}