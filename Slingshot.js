class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if (this.sling.bodyA!=null) {
         var pointA = this.sling.bodyA.position;
         //var pointB = this.pointB;
         strokeWeight(4);
         line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}

 

    

