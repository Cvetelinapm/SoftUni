function solve(lengthSequence, k){

    let array = [];
    array[0] = 1;

    for (let i = 1; i < lengthSequence; i++)
            {
                let sum = 0;
 
                for (let j = i - 1; j >= 0 && j >= i - k; j--)
                {
                    sum += array[j];
 
                }
 
                array[i] = sum;
            }
console.log(array.join(' '))
}
solve(6,3)