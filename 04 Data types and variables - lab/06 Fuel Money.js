function solve(distance, passengers, priceDiesel){
    let neededFuel = (distance/100) * 7;
    let additionalFuel = passengers * 0.1;
    neededFuel += additionalFuel
    let neededMoney = neededFuel * priceDiesel;
    console.log(`Needed money for that trip is ${neededMoney}lv.`)
}