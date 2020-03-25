function solve(array){
let pattern = /[\D]+[0-9]+/gm;
let data = array[0].match(pattern);
let output = '';
let set = new Set();
if(data!== null){
    data.forEach(line => {
        let patternDigit = /[\d]+/gm;
        let patternStr = /[\D]+/gm;
        let digit = Number(line.match(patternDigit)[0]);
        let words = line.match(patternStr)[0].toUpperCase();  
        output += words.repeat(digit)
    });
}
Array.from(output).forEach(el=>{
    set.add(el);
})
console.log(`Unique symbols used: ${set.size}`);
console.log(output);


}
solve(['a0d4s2']
    )