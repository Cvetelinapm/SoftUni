function solve(array){
    let firstIndex = array.shift();
    let secondIndex = (array.length - firstIndex); 


    let firstPair = array.slice(0, firstIndex);
    let lastPairs = array.slice(secondIndex);
    
    console.log(firstPair.join(' '));
    console.log(lastPairs.join(' '))
}
solve([2, 
    7, 8, 9])