function solve(array){
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {

        let currentEl = array[i];
        let rightEl = array.slice(i + 1);

        let max = Math.max.apply(null, rightEl);

        if(currentEl > max){
            newArray.push(currentEl)

        }
    }
    console.log(newArray.join(' '))
}
solve([14, 24, 3, 19, 15, 17])