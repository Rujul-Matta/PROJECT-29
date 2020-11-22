class Block{
    constructor(x, y){
        this.body = Bodies.rectangle(x,y,25,45,{isStatic: false}); 
        this.width = 25;
        this.height = 45;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
