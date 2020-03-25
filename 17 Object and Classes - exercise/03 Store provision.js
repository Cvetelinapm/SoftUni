function solve(arrFirst, arrSecond) {
    let products = {};
    for (let i = 0; i < arrFirst.length; i += 2) {
        let product = arrFirst[i];
        let qty = Number(arrFirst[i + 1]);
        products[product] = qty;
    }
    for (let j = 0; j < arrSecond.length; j += 2) {
        product = arrSecond[j];
        qty = Number(arrSecond[j + 1]);
        if (products.hasOwnProperty(product)) {
            products[product] += qty;
        } else {
            products[product] = qty;
        }
    }
    for (const key in products) {
        console.log(`${key} -> ${products[key]}`)
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)