function solve(array){
  let income = 0
array.forEach(element => {
  let pattern = /\B%([A-Z][a-z]+)%.*<(\w+)>.*\|(\d+)\|\D*(\d+\.?\d+)\$\B/gm;
  let line = pattern.exec(element);
  if(line){
    let name = line[1];
    let product = line[2];
    let qty = Number(line[3]);
    let price = Number(line[4]);
console.log(`${name}: ${product} - ${(qty*price).toFixed(2)}`);
income += (qty*price)

  }
});
console.log(`Total income: ${income.toFixed(2)}`)
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ])