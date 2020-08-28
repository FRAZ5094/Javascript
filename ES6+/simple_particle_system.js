let particles;

function setup() {
    createCanvas(600, 400);
    // particles.fill(new Particle()); //fills the array full of particle objects, but the same instance in each index
    particles=Array(100).fill().map(p=>new Particle()); //creates an empty 100 length array then maps a new different particle across each index
}

function draw() {
    background(0);
    for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
    }

    //sort particles by their colour, ascending order  (more white> more black)
    particles.sort((a,b)=>a.col-b.col);


    particles.forEach(p=>{
        p.update();
        p.show();
    });

    // for (let particle of particles){
    //     particle.update();
    //     particle.show();
    // }

    particles=particles.filter(p=>!p.finished());

    //find centroid
    //x is accumulator, p is each particle (item in the array particles)
    // let sumx=particles.reduce((x,p)=>x+p.x,0); //set starting value because else it would be a particle object (first item in array)
    // let sumy=particles.reduce((y,p)=>y+p.y,0);

    // let centerX=sumx/particles.length;
    // let centerY=sumy/particles.length;

    //try doing x and y together

    let accV=createVector(0,0); //accumulator is a vector object
    let sumV=particles.reduce((v,p)=>v.add(p.x,p.y),createVector(0,0));
    //add the x and y values of each particle in the array onto the accumulator v, starting with an empty array of (0,0)

    sumV.div(particles.length);

    fill(255,0,0);
    ellipse(sumV.x,sumV.y,24,24);
}


class Particle {

    constructor() {
        this.x = 300;
        this.y = 380;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.col=random(256);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        // stroke(255);
        fill(this.col);
        ellipse(this.x, this.y, 16);
    }

}
