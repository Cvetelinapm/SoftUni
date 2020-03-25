function solve(array){
    let employees = {};
    array.forEach(line => {
        employees.name = line;
        employees.Number = line.length;
        console.log(`Name: ${employees.name} -- Personal Number: ${employees.Number}`)
    });

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )