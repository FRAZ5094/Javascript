let vals = [
    5,
    4,
    4,
    2,
    1
];
// console.log(vals);
vals.sort();
// numbers>capital letters>lower case
// console.log(vals);


vals = [
    {
        x: 5,
        y: 6
    }, {
        x: 2,
        y: 10
    }
]; // need custom function for objects

function compare(a, b) {
    return b.y - a.y
}

// console.log(vals);
vals.sort(compare);
// console.log(vals);

let s = "It was  a dark and stormy night"
let words = s.split(" ").filter(word => word.length > 2);
console.log(words);
words.sort((a, b) => a.length - b.length);
// sort takes a compare function
// for the first call a=words[0],b=words[1]
// if return is negative a is sorted before b
// if return is positive b is sorted before a
// so for ascending a-b
console.log(words);
