function solve(text, censor){
while(text.includes(censor)){
    let pattern = '*'.repeat(censor.length)
    text = text.replace(censor, pattern)
}
console.log(text)
}
solve("A small sentence small with small some words", "small")