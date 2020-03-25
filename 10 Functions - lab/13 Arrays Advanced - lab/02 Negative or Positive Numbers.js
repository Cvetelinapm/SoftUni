function solve(array){
let result = [];
for (let num of array) {

    if(num < 0){
        result.unshift(num);
    }else{
        result.push(num);
    }
}
result.forEach(element => {
    console.log(element)
});
}
solve([7, -2, 8, 9])