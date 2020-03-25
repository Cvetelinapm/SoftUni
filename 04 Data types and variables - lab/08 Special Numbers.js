function solve(num){
    for (let i = 1; i <= num; i++){
        i = i.toString();
        let sum = 0;
        for (let k = 0; k < i.length; k++) {
            let digit = Number(i[k]);
            sum += digit
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`)
        }else{
            console.log(`${i} -> False`)
        }
    }

}
solve(15)