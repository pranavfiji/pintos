class Pinkos{
    constructor(x,y,r){
        option={
            isStatic=true
        }
        r=this.radius;
       this.r=this.radius

      this.body=Bodies.circle(x,y,this.r,options);

      this.color=this.color(random(0,255),random(0,255),random(0,255));
      world.add(world,this.body);
      world.add(world,this.color);

    }
    display(){
        push();
        rectMode(CENTER);
        ellispe(this.body.x,this.body.y,this.r,this.r);

        for(var j=50;j<=width;j=j+50){
            pinkos.push(new pinkos(j,75));
          }
          
          for(var j=15;j<=width;j=j+60){
            pinkos.push(new pinkos(j,175));
          }
    }
}