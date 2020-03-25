function solve(text){
    let arr = text.split('');
    let word ='';
    let newArr = [];
arr.forEach((element) => {
    let upper = element.toUpperCase();
    if(element === upper){
        if(word!==''){
            newArr.push(word);
            word = '';
        };
        word += element
    }else{
        word += element;
    }
});
newArr.push(word)
console.log(newArr.join(', '))
}
solve('StMeIf')