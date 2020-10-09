class Pendulum{
    constructor(origin,angle,omega,len) {
        this.origin=origin;
        this.angle=angle;
        this.omega=omega;
        this.len=len;
        this.bob=createVector(0,0);
    }
    update(){  
        
        alpha=-9.81*sin(this.angle)/this.len;

        this.omega+=alpha;
        this.angle+=this.omega;

        this.omega*=0.90;

        this.bob.y=this.origin.y+this.len*cos(this.angle);
        this.bob.x=this.origin.x+this.len*sin(this.angle);
    }
    show(){
        line(this.origin.x,this.origin.y,this.bob.x,this.bob.y);
        circle(this.bob.x,this.bob.y,32);
    }
}