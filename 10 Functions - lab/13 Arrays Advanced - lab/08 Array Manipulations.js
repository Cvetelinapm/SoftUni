function solve(arr){
let arrayToManipulate = arr
.shift()
.split(' ')
.map(Number);

arr.forEach((line) => {
    let tokens = line.split(' ');
    let command = tokens[0];
    let number = Number(tokens[1]);

    switch (command) {
        case 'Add': arrayToManipulate.push(number) ;break;
        case 'Remove': 
        let index = arrayToManipulate.indexOf(number);
        if(index !== -1){
            arrayToManipulate.splice(index, 1);
        }
        ;break;
        case 'RemoveAt':  
        arrayToManipulate.splice(number, 1);
        ;break;
        case 'Insert': 
        let indexInsert = Number(tokens[2]);
        arrayToManipulate.splice(indexInsert, 0, number);
        ;break;

    }
});
console.log(arrayToManipulate.join(' '))

}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)