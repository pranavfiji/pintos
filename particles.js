class Particles{
    constructor(x,y,r){
        options={
         restitution=0.6   
        }
        r=this.radius;
       this.r=this.radius

      this.body=Bodies.circle(x,y,this.r,options);

      this.color=this.color(random(0,255),random(0,255),random(0,255));
      world.add(world,this.body);
      world.add(world,this.color);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellispe(this.body.x,this.body.y,this.r,this.r);

        for(var j=0;j<particles.length;j++){
            particles[j].display();
          }
    }
}
