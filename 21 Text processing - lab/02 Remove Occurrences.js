function solve(word, text){

    let newStr = '' ;
    while(newStr!==text){
        newStr = text;
        text = newStr.replace(word, '');
    }
   
    console.log(typeof news)

}
solve('ice', 'kicegiciceeb')