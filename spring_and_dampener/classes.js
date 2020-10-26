class Mass{
    constructor(m,pos,size) {
        this.m=m;
        this.pos=pos;
        this.size=size;
        this.vel=createVector(0,0);
        this.posx_array=[];
    }
    show(){
        //this.pos.x=mouseX; this.pos.y=mouseY;
        rectMode("center");
        strokeWeight(1);
        stroke(0);
        fill("red");
        square(this.pos.x,this.pos.y,this.size);


    }
    update(spring,dampener){
        let extension = this.pos.x-spring.origin.x-spring.l_n;

        let s_force = -spring.k*extension;
        //console.log(s_force);
        this.vel.add(s_force);
        this.pos.add(this.vel);
        this.vel.mult(0.995);
        this.posx_array.push({x:this.pos.x,v:this.vel.x,t:frameCount});


    }
}

class Spring{
    constructor(origin,l_n,k){
        this.origin=origin;
        this.l_n=l_n;
        this.k=k

    }
    show(mass){
        stroke("blue");
        strokeWeight(1);
        line(this.origin.x,this.origin.y,mass.pos.x-mass.size/2,this.origin.y);
    }

}

class Dampener{
    constructor(origin,l_n){
        this.origin=origin;
    }
    show(mass){
        strokeWeight(1);
        stroke("blue");
        line(this.origin.x,this.origin.y,mass.pos.x-mass.size/2,this.origin.y);
    }

}

class Graph{
    constructor(origin,t_scale,x_scale){
        this.origin=origin;
        this.x_scale=x_scale;
        this.t_scale=t_scale;
    }
    draw(mass){
        fill(0);
        stroke(0);
        beginShape(LINES);
        mass.posx_array.forEach(pos=>{
            //point(this.t_scale*pos.t,height-25-pos.x*this.x_scale);
            vertex(this.t_scale*pos.t,height-25-pos.x*this.x_scale);
            
            });
        endShape();
        line(width/2,0,width/2,height);
        /*
        beginShape(LINES);
        mass.posx_array.forEach(pos=>{
            vertex(this.t_scale*pos.t,height-25-pos.v*4);
            
            });
        endShape();
        */
    }
}