function solve(word, text){
    text = text.toLowerCase();
    let wordLow = word.toLowerCase();
let arr = text.split(' ').filter(x=> x === wordLow);
if(arr.length>0){
    console.log(arr[0]);
}else{
    console.log(`${word} not found!`);
}
}
solve('Java',
'JavaScipt is the best programming language'

)