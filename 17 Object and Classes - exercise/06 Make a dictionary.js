function solve(array) {
let dictionary = {};
let parsed = array.map(JSON.parse);
parsed.forEach(line => {
    let tuple = Object.entries(line);
    let term = tuple[0][0];
    let description = tuple[0][1];
    dictionary[term] = description;

});
let sorted = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
for (const item of sorted) {
    console.log(`Term: ${item[0]} => Definition: ${item[1]}`)
}
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Boiler":"A fuel-burning ."}'
]
)