function solve(text){

    const validation = (str)=>{
        let word = '';
        for (const ch of str) {
            if(isNaN(ch)){
                word += ch;
            }else{
                break;
            }
        }
        if(str.length === word.length){
            return true
        }
        return false
    }
    let arrText = text.split(' ');
    for (const word of arrText) {
        if(word.includes('#') && word.length>1){
            let wordToPrint = word.substring(1);
            let isValid = validation(wordToPrint);
            if(isValid){
                console.log(wordToPrint);
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #spec55ial word in #socialMedia')