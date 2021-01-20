class Box{
    constructor(x,y,width,height){
    var options = {
    'friction' : 1,
    'restitution' : 0.5,
    'density' : 0.7
    
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    
    display(){
    push();

    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,this.width, this.height);

    pop();
    
    
    }
    
    
    }