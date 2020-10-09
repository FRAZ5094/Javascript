let ball;
let springs=[];
let gravity;


function setup(){
    createCanvas(600,750);
    background(0);
    ball=new Ball(2,createVector(width/2,200),50,createVector(0,4));

    springs.push(new Spring(0.005,createVector(width/2,0),50));
    //springs.push(new Spring(0.005,createVector(width/2,height),height/4))
    //springs.push(new Spring(0.005,createVector(0,height/2),height/4));
    //springs.push( new Spring(0.005,createVector(width,height/2),height/4));

    gravity=createVector(0,1);
}

function draw(){
    background(0);

    ball.applyGravity(gravity);

    springs.forEach(spring=>ball.applyForceSpring(spring));
    springs.forEach(spring=>spring.show());

    ball.show();

    if (mouseIsPressed){
        ball.pos=createVector(mouseX,mouseY);
        ball.v=createVector(0,0);
        ball.trail=[];
    }

}

    