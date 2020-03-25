function solve(array) {
    let neighborhood = array.shift().split('@').map(Number);
    let initialPosition = 0;
    let index = 0;


    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' ');
        let command = element[0];
        let jump = Number(element[1]);

        if (command === 'Jump') {
            
            if (initialPosition + jump >= neighborhood.length) {
                if (jump > 0) {
                    initialPosition = 0
                }
                index = initialPosition;
            
            position = neighborhood[index];
            if (position === 0) {
                console.log(`Place ${index} already had Valentine's day.`);
                initialPosition = index;
            } else {
                neighborhood[index] -= 2;
                if (neighborhood[index] === 0) {
                    console.log(`Place ${index} has Valentine's day.`)
                }
                initialPosition = index;
            };

        } else {
            break;
        }
    }

    console.log(`Cupid's last position was ${index}.`);

    let filtered = neighborhood.filter(a => a === 0);

    if (filtered.length === neighborhood.length) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${neighborhood.length - filtered.length} places.`)
    }



}
solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!',
])