let vals=[5,4,undefined,2,1];

x=>x%2==0;
x=>x%2;//works as well since answer is 0 or 1
// 0==false,1==true

//vals=vals.filter(x=>x%2);
//higher order funcion because takes a function as an arg
// if function return true is keep the value in the array
//if returns false remove the item from the array

vals=vals.filter(x=>x!==undefined);
// remove all undefined values from the list
// (true if not undefined)

//console.log(vals);

let s="It was  a dark and stormy night";
let words=s.split(" ");
//since two spaces between "was" and "a"
//the array words has a blank value in it
//words=words.filter(word=>word.length);
words=words.filter(word=>word.length>=3);
//can filter based on truthy value
//all values except 0,"",undefined ect are truthy in a boolean context
console.log(words)

