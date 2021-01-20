class Rope{
constructor(bodyA,pointB){
    var options = {
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 1.2,
    length : 215

    }
this.pointB = pointB;
this.rope = constraint.create(options);
World.add(world,this.rope);


}

display(){

push();
stroke("brown");
strokeWeight(2);
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y);

pop();
}

}