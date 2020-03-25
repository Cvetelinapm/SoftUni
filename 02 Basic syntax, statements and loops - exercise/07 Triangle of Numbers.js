function solve(num){
    let output = '';
    for (let i = 1; i <= num; i++) {
        for (let k = 1; k <= i; k++) {
            output += i + ' ';
        }    
        console.log(output)   
        output= '' ;
    }
}
solve(3)