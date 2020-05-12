class Raindrop {
    constructor(x, y, width, height){
        //var xCordinate = random(0,400);
        var options = {
            restitution: 0.4,
            friction: 0.8,
            density: 0.6
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}