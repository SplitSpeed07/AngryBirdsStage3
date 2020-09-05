class Chain {
    constructor (bodyA, bodyB) {
        var options = {
            length : 10,
            stiffness : 0.9,
            bodyA : bodyA,
            bodyB : bodyB
        }
        this.body = Constraint.create (options);
        World.add(world, this.body);
    }
    display(){
        var PointA = this.body.bodyA.position;
        var PointB = this.body.bodyB.position;
        strokeWeight(5)
        line(PointA.x, PointA.y, PointB.x, PointB.y);
    }
}