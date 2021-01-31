class Drop{
    constructor(x,y){
        var options = {   
            restitution:0.5,
            friction:10,
            density:0.5,
            isStatic:false
        }
     this.rain = Bodies.circle(x,y,8,options);
     this.radius = 8;
     World.add(world, this.rain);
    }
    updateY(){
        if(this.rain.position.y > height){
          Matter.Body.setPosition(this.rain,{x:random(0, 550), y:random(0, 550)});
    }
      }
    display(){
      strokeWeight(1);
      stroke("blue");
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
      
      

      }
}