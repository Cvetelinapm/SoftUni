function solve(text, searchedWord){
let arrWords = text.split(' ');
let index = arrWords.indexOf(searchedWord);
let counterOccurrences = 0;
while(index>=0){
counterOccurrences++;
index = arrWords.indexOf(searchedWord, index + 1)
}
console.log(counterOccurrences);
}
solve("This is a word and it also is a sentence",
"is"
)