class landZone{
    constructor(x, y, width, height){
        var stayPut={
            'isStatic': true,
            'density': 5000
        }

        this.x = x;
        this.y = y;

        this.wide = width;
        this.high = height;

        this.bottomRect = Bodies.rectangle(this.x, this.y, this.high, this.wide, stayPut);
        this.leftRect = Bodies.rectangle(this.x-(this.high/2), (this.y - (this.high/2)), this.wide, this.high, stayPut);
        this.rightRect = Bodies.rectangle(this.x+(this.high/2), (this.y - (this.high/2)), this.wide, this.high, stayPut);
        
        World.add(world, [this.bottomRect,  this.leftRect, this.rightRect]);
    }
    display(){
        var posB = this.bottomRect.position;
        var posL = this.leftRect.position;
        var posR = this.rightRect.position;
        var rec1, rec2, rec3;

        push();
        rectMode(CENTER);
        rec1 = createSprite(posB.x, posB.y, this.high, this.wide);
        rec1.shapeColor = color(255, 0, 0);
        pop();

        push();
        rectMode(CENTER);
        rec2 = createSprite(posL.x, posL.y, this.wide, this.high);
        rec2.shapeColor = color(255, 0, 0);
        pop();

        push();
        rectMode(CENTER);
        rec3 = createSprite(posR.x, posR.y, this.wide, this.high);
        rec3.shapeColor = color(255, 0, 0);
        pop();
    }
}