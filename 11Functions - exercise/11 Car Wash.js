function solve(array){
    let cleanedValue = 0;
for (let i = 0; i < array.length; i++) {
    let element = array[i];

    switch (element) {
        case 'soap': cleanedValue += 10 ;break;
        case 'water': cleanedValue *= 1.2 ;break;
        case 'vacuum cleaner': cleanedValue *= 1.25 ;break;
        case 'mud': cleanedValue *= 0.9 ;break;
    }
    
}
console.log(`The car is ${cleanedValue.toFixed(2)}% clean.`)
}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])