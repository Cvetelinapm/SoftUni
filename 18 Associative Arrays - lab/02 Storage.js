function solve(arr){
let storage = new Map();
arr.forEach(element => {
    let [product, qty] = element.split(' ');
    qty = Number(qty);
    if(storage.has(product)){
        let currentQty = storage.get(product);
        qty += currentQty;        
    }
        storage.set(product, qty)
    
});

for (const line of storage) {
    console.log(`${line[0]} -> ${line[1]}`)
}
}
solve([ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ])