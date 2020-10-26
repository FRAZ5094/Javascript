let mass;
let spring;
let dampener;
let graph;
function setup(){
    createCanvas(600,400);
    background(255);
    mass=new Mass(2,createVector(width*6/8,height/4),50);
    spring= new Spring(createVector(0,height/4-mass.size/5),width/2,0.0005);
    dampener= new Dampener(createVector(0,height/4+mass.size/5));
    graph= new Graph(createVector(0,height*3/4),0.1,0.1);
}

function draw(){
    background(255);
    strokeWeight(5);
    stroke(0);
    line(0,height/2,width,height/2);  
    mass.update(spring,dampener);
    mass.show();
    spring.show(mass);
    dampener.show(mass);
    graph.draw(mass);
}