class Divison{
    constructor(x,y,h,w){
        options={
            isStatic=true
        }
        this.h=this.height;
        this.w=this.width;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body)
    }
    display(){
        pish();
        rectMode(CENTER);
        fill("white");
        rect(x,y,this.w,this.h);

        for(var k=0;k<divisions.length;k++){
            division[k].display();
          }
    }
}