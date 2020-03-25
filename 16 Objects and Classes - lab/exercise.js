function solve(array) {
    let frogs = array.shift().split(' ');
    for (let index = 0; index < array.length; index++) {
        const tokens = array[index].split(' ');
        let command = tokens[0];

        if (command === 'Join') {
            let nameToAdd = tokens[1];
            frogs.push(nameToAdd);
        } else if (command === 'Jump') {
            let nameJump = tokens[1];
            let indexJump = Number(tokens[2]);
            jump(nameJump, indexJump);
        } else if (command === 'Dive') {
            let indexDive = Number(tokens[1]);
            dive(indexDive);
        } else if (command === 'First' || command === 'Last') {
            let count = Number(tokens[1]);
            firstLast(command,count);
        }else{
            let commandTwo = tokens[1];
            if(commandTwo === 'Normal'){
                console.log(`Frogs: ${frogs.join(' ')}`);
                break;
            }else{
                console.log(`Frogs: ${frogs.reverse().join(' ')}`);
                break; 
            }
        }
    };

    function jump(name, index) {
        if (index >= 0 && index <= frogs.length) {
            frogs.splice(index, 0, name)
        }
    }
    function dive(index) {
        if (index >= 0) {
            frogs.splice(index, 1)
        }
    }
    function firstLast(command, count) {
        if (count > frogs.length) {
            console.log(frogs.join(' '))
        } else {
            if (command === 'First') {
                console.log(frogs.slice(0, count).join(' '));
            } else {
                console.log(frogs.slice(frogs.length - count).join(' '));
            }
        }
    }
}
solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ])