function solve(array, commands) {
    commands.forEach(element => {
        let tokens = element.split(' ');
        let command = tokens[0];
        switch (command) {
            case 'add':
                let indexAdd = Number(tokens[1]);
                let elementAdd = Number(tokens[2]);
                array.splice(indexAdd, 0, elementAdd);
                break;
            case 'addMany':
                let indexAddMany = Number(tokens[1])
                for(let j = tokens.length-1; j >= 2 ; j--){
                    let element = Number([j]);
                    array.splice(indexAddMany,0,element);
                }
                break;
            case 'contains':
                let elementContain = Number(tokens[1]);
                let indexContain = array.indexOf(elementContain);
                console.log(indexContain);
                break;
            case 'remove':
                let indexRemove = Number(tokens[1]);
                array.splice(indexRemove, 1)
                break;
            case 'shift':
                let positions = Number(tokens[1]);
                for (let a = 0; a < positions; a++) {
                    let first = array.shift();
                    array.push(first);                    
                }
                break;
            case 'sumPairs':
                let newArr = [];
                for (let j = 0; j < array.length; j += 2) {
                    let element = array[j];
                    let elementTwo = array[j + 1];
                    if (elementTwo === undefined) {
                        newArr.push(element);
                        break;
                    }else{
                    let result = element + elementTwo;
                    newArr.push(result);
                    }
                };
                array = newArr;
                break;
            case 'print':
                console.log('[ ' + array.join(', ') + ' ]');

                break;
        }
    });

}
solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
)
