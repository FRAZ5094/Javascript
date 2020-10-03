class Ball{
    constructor(m,pos,r,v) {
        this.m=m;
        this.pos=pos;
        this.r=r;
        this.v=v;
        this.trail=[];
    }
    show(){
        fill("blue");
        stroke("black");
        circle(this.pos.x,this.pos.y,this.r);
        this.trail.push({x:this.pos.x,y:this.pos.y});
        fill(255);
        stroke(255);
        for (let i = 0; i < this.trail.length; i++) {
            circle(this.trail[i].x,this.trail[i].y,2);
        }
        if (this.trail.length>400){
            this.trail.shift();
        }
        this.v.mult(0.995);
    }
    applyForce(F){
        this.v.add(F.div(this.m));
        this.pos.add(this.v);
    }
    applyGravity(grav){
        this.v.add(grav);
        this.pos.add(this.v);
    }
    applyForceSpring(spring){
        let spring_Vec=createVector(spring.pos.x-this.pos.x,spring.pos.y-this.pos.y);
        let spring_length=spring_Vec.mag();
        let extension=spring.nat_len-spring_length;
        let F_mag=-spring.k*extension;
        let F=spring_Vec.setMag(F_mag);
        this.applyForce(F);
    }
}

class Spring{
    constructor(k,pos,nat_len){
    this.k=k;
    this.pos=pos;
    this.nat_len=nat_len;
    }
    show(ball){
        stroke("red");
        line(this.pos.x,this.pos.y,ball.pos.x,ball.pos.y);

    }
}