class chain
{
    constructor(bodyA,bodyB,offsetX,offsetY ){
        this.offsetX= offsetX;
        this.offsetY= offsetY;

      var options= {
          bodyA: bodyA,
          bodyB:bodyB,
          pointB:{x:this.offsetX,y:this.offsetY},
          stiffness:0.04,
          length: 10
      }
      this.chain= Constraint.create(options);
      World.add(world, this.chain);
    }
    display()
    {
        strokeWeight(2);
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;
        var anchor1X= pointA.x;
        var anchor1Y= pointA.y;
        var anchor2X= pointB.x+ this.offsetX;
        var anchor2Y= pointB.y+ this.offsetY;
       
        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
}
