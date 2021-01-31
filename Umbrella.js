class Umbrella{
    constructor(x,y){
      var options = { 
            'isStatic': true
            }
     this.umbrella = Bodies.circle(x,y,60,options);
     this.radius = 60;
     World.add(world, this.umbrella);

     this.image = loadImage("Walking Frame/walking_1.png")
    }
    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,350,350);
    }
}