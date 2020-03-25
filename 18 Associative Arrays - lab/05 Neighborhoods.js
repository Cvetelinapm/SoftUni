function solve(array) {
    let neighbors = new Map();

    let hoods = array.shift().split(', ');
    hoods.forEach(element => {
        neighbors.set(element, []);
    });

    array.forEach(line => {
        let [item, name] = line.split('-').map(x => x.trim());
        if (neighbors.has(item)) {
            neighbors.get(item).push(name);
        };
    });

    let sorted = Array.from(neighbors)
        .sort((a, b) => {
            return b[1].length - a[1].length;
        });
    let reduced = sorted.reduce((a, b) => {
        let output = `${b[0]}: ${b[1].length}\n`;
        b[1].forEach(el => {
            output += `--${el}\n`
        });
        return a + output
    }, '');
    console.log(reduced)

    //for (const [a, b] of sorted) {
    //
    //    console.log(`${a}: ${b.length}`);
    //    b.forEach(el=>{
    //        console.log(`--${el}`)
    //    })
    //    
    //}
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)