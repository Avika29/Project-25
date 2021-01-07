class Paper{
    constructor(x,y,radius){
        
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.8
                   }
             this.paperImage = loadImage('paper.png');
             this.body = Bodies.circle(x,y,radius,options);
             this.r = radius
             World.add(world,this.body)
    }
   display(){
       push();
       translate(this.body.position.x,this.body.position.y)

      imageMode(CENTER)
      image(this.paperImage,0,0,this.r*2,this.r*2)
      //scale(0.5);
      pop();
    } 
}


