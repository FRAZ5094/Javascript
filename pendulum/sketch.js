let pendulums=[];

function setup(){
    createCanvas(600,400);
    background(0);

    pendulums.push(new Pendulum(createVector(width/2,0),Math.PI/4,0,200));
    pendulums.push(new Pendulum(createVector(width/4,0),Math.PI/4,0,100));
    pendulums.push(new Pendulum(createVector(width*3/4,0),Math.PI/4,0,50));

}

function draw(){
    background(255);

    pendulums.forEach(pendulum=>{
        pendulum.update();
        pendulum.show();
    });
    
}