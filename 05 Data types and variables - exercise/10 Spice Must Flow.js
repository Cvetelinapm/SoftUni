function solve(yield){
    let dayCounter = 0;
    let totalYield = 0;
while(yield >= 100){

    totalYield += yield;
    totalYield -= 26;
    dayCounter++
    yield -= 10;
}
totalYield -= 26;
if(totalYield < 0){
    totalYield = 0;
}
console.log(dayCounter);
console.log(totalYield);
}
solve(450)