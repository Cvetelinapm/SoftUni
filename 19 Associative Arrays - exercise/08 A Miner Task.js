function solve(array){
let resources = {};
for (let i = 0; i < array.length; i+=2) {
    const resource = array[i];
    const qty = Number(array[i+1]);

    if(!resources.hasOwnProperty(resource)){
        resources[resource] = 0;
    }
    resources[resource] += qty;
};
for (const key in resources) {
    if (resources.hasOwnProperty(key)) {
        console.log(`${key} -> ${resources[key]}`)
    }
}
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )