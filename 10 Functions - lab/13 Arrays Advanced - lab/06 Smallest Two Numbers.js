function solve(array){
    let sortedArray = array.sort((a, b) => {
        return a - b;
    });

    let smallestTwo = sortedArray.slice(0, 2);

    console.log(smallestTwo.join(' '));
}
solve([30, 15, 50, 5])