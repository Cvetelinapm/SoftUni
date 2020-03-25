
function storeCatalogue(array) {
    let products = {};
    array.forEach(line => {
        let tokens = line.split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        products[product] = price
    });
    let sorted = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));

    let letter = '';

    for (let i = 0; i < sorted.length; i++) {
        let [product, price] = sorted[i];
        price = Number(price);
        let currentLetter = product[0];

        if (currentLetter != letter || i === 0) {
            console.log(currentLetter);
            letter = currentLetter;
        }
        console.log(`  ${product}: ${price}`);
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])