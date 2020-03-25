function solve(array){
let occurrences = new Map();
array.forEach(element => {
    let counter = 1;
    if(occurrences.has(element)){

        let curr = occurrences.get(element);
        curr++;
        counter = curr;
    }
    occurrences.set(element, counter)
});
let sorted = Array.from(occurrences).sort((a, b) =>{
    return b[1] - a[1]
});
let reduced = sorted.reduce((a, b)=>{
    let output = `${b[0]} -> ${b[1]} times\n`;
    return a + output;
}, '');
console.log(reduced)
}
solve(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence",
 "And", "finally", "the", "third",
  "sentence"])