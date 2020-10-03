let ball;
let spring;
let gravity;

function setup(){
    createCanvas(600,800);
    background(0);
    ball=new Ball(2,createVector(width/2,height/2+300),50,createVector(5,0));
    spring= new Spring(0.01,createVector(width/2,0),height/4);
    gravity=createVector(0,1);
}

function draw(){
    background(0);
    ball.applyGravity(gravity);
    ball.applyForceSpring(spring);
    spring.show(ball);
    ball.show();
    //console.log(Math.round(ball.pos.y));
}
    