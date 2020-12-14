const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImage;
function preload(){
    backgroundImage = loadImage("images/background story img.jpg")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backgroundImage);
    textSize(60);
    fill("blue")
    text("THE HERO",425,150);
    Engine.update(engine);
}