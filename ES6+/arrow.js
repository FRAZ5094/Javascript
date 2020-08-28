function setup(){
    noCanvas();
    const counter1=new Counter(100,500);
    const counter2=new Counter(200,700);
    const counter3=new Counter(500,200);

}


class Counter{
    constructor(start,wait){
        this.count=start;
        this.p=createP("")
        setInterval(()=>{
            this.count++;
            this.p.html(this.count);
            //some shit about this. context idk doesnt really matter
        },wait);
    } 
}


/*
let button = createButton("press");

use if one line,looks nice
button.mousePressed(()=>background(random(255)));

or like this if its not 1 line
button.mousePressed(()=>{
    background(random(255));
});

*/