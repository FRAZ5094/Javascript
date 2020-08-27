
let doubler=multiplier(2);//gets back a function
let tripler=multiplier(3);


function draw(){

}

function multiplier(x,factor){
    return x=>x*factor;
}



return function(x){ //returns a function
    return x*factor;
}

x=> x*factor; //with arrow syntax
//if only 1 line, dont need to write "return"



function sing(callback){
    console.log("la la la la");
    if (callback instanceof Function){
        callback();
    }
}

function meow(){
    console.log("meow meow")
}