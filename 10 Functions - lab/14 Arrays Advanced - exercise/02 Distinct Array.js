function solve(array) {

    let filtered = [];

   

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(array.indexOf(element) === i){
            filtered.push(element);
        }
    }
return filtered.join(' ');
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])