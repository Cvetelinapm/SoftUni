function solve(input){
let sentance = input.shift().split(' ');
for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' ');
    let command = tokens[0];
    if(command === 'Delete'){
        let indexDelete = Number(tokens[1]);
        deleteWord(sentance, indexDelete);
    }else if(command === 'Swap'){
        let word1 = tokens[1];
        let word2 = tokens[2];
        swap(sentance, word1, word2);
    }else if(command === 'Put'){
        let wordPut = tokens[1];
        let indexPut = Number(tokens[2]);
        put(sentance, wordPut, indexPut);
    }else if(command === 'Sort'){
        sentance.sort((a,b) => {
            return b.localeCompare(a);
        });
    }else if(command === 'Replace'){
        let wordToreplace = tokens[1];
        let wordToFind = tokens[2];
        replace(sentance, wordToreplace, wordToFind);
    }else{
        break;
    }
}
function deleteWord(arr, index){
    if(index >= 0 && index < arr.length){
        return arr.splice(index + 1, 1);
    }
}
function swap(arr, a, b){
    let validA = arr.indexOf(a);
    let validB = arr.indexOf(b);
    if(validA !== -1 && validB !== -1){
        arr[validA] = b;
        arr[validB] = a;
        return arr;
    }
}
function put(arr, word, index){
    index--;
    if(index >= 0 && index <= arr.length){
        return arr.splice(index, 0, word);
    }
}
function replace(arr, a, b){
let validIndex = arr.indexOf(b);
if(validIndex !== -1){
    return arr.splice(validIndex, 1, a);
}
}
console.log(sentance.join(' '))
}
solve([
    '',
    'Put r 1',
   
  ])