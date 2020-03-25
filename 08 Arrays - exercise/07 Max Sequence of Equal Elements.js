function solve(array){
    let longestSequence = [];
    let leftMostIndex = 0;

for (let i = 0; i < array.length; i++) {
    let currentEl = array[i];
    let currentSequence = [currentEl];

    for (let j = i + 1; j < array.length; j++) {
        let nexEl = array[j];

        if(nexEl === currentEl){
            currentSequence.push(nexEl)
        }else{
            break;
        }
        
    }

    if(currentSequence.length > longestSequence.length){
        longestSequence = [];
        for (let k = 0; k < currentSequence.length; k++) {
            longestSequence.push(currentSequence[k])            
        }
    }else if(currentSequence.length === longestSequence.length){
        if(i < leftMostIndex){
            leftMostIndex = i;
        }
    }
    
}
console.log(longestSequence.join(' '))
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])