const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=100
var drops=[];
var rand
var thunderCreatedFrame = 0;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png")
    thunder2 = loadImage("thunderbolt/2.png")
    thunder3 = loadImage("thunderbolt/3.png")
    thunder4 = loadImage("thunderbolt/4.png")
    
}

function setup(){
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  u1 = new Umbrella(280,470)
  
     for(var i=0; i<maxDrops; i++){
     drops.push(new Drop(random(0,550), random(0,550)));
        }
    }

function draw(){
    background("black");
    Engine.update(engine);

    rand = Math.round(random(1,4))
    if(frameCount%80 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,50),40,40)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6)
    }
    //if(thunderCreatedFrame + 10 === frameCount && thunder){
       //thunder.destroy();
    //}
    //console.log(thunder1.position)

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
        //console.log(drops.position.x)
    }
    u1.display();
}   

