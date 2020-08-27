let vals=[4,8,1,2,9];
console.log(vals);

function doubler(x){
    return x*2;
}

//vals=vals.map(doubler); //uses the function on each of the elements on the array

vals=vals.map(x=>x*2); //arrow syntax, return assumed

console.log(vals);

//vals= new Array(100);

vals=Array(100).fill().map(Math.random);

console.log(vals);