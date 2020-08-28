let vals = [5,4,1,2,9];

function findMax(acc,val){
    if (val>acc){
        return val //val becomes the new accumulator,becuase its returned
    }
    return acc
}

let biggest=vals.reduce((a,b)=>b>a?b:a); //if b>a then return b, if false return a
console.log(biggest);


// let answer=vals.reduce((acc,val)=>acc+val,10);
//second arg is the starting value
//accumuator is the value that persists through the whole function
// acc is passed through the all the iterations of the list
// so it can keep track of the "current total" in this case
// or the highest value found so far above

// console.log(answer);

