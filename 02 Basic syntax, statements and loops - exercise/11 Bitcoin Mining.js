function solve(array){
    let day = 0;
    let firstDay = [];
    let sumGold = 0;
    let totalAmount = 0;
    let totalBitcoins = 0;
    let isThereBitcoin = false;

for (let i = 0; i < array.length; i++) {
    day = i + 1;
    let diggedGold = array[i];
    if(day % 3 === 0){
        diggedGold *= 0.7;
    }
    sumGold = diggedGold * 67.51;
    totalAmount += sumGold;
    while(totalAmount >= 11949.16){
        firstDay.push(i + 1);
        totalBitcoins++
        isThereBitcoin = true;
        totalAmount -= 11949.16;
    }
}
console.log(`Bought bitcoins: ${totalBitcoins}`);
if(isThereBitcoin){
    console.log(`Day of the first purchased bitcoin: ${firstDay.shift()}`);
}
console.log(`Left money: ${totalAmount.toFixed(2)} lv.`)
    
}
solve([ 10, 10])