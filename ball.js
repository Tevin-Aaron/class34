class Ball{

  constructor(x,y,radius){
    var options = {
    'density' : 1,
    'frictionAir' : 0.0005
    }
    this.ball = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.ball);

}
display(){
    push();

    translate(this.ball.position.x,this.ball.position.y);
    rotate(this.ball.angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);


    pop();
}

}