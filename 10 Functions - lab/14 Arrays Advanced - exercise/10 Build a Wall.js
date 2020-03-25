function solve(arr){
    let initialHeights = arr.map(Number);
   function isFull(array){
       let counter = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element < 30){
            continue;
        }else{
            counter++
        }
    }
    if(counter === array.length){
        return true;
    }
    return false;
   }  
   let cubicConcreteTotal = 0;
   let cubicConcretePerDay = 0;
   let usedConcrete = [];
   while (!isFull(initialHeights)) {
       cubicConcretePerDay = 0;
       for (let i = 0; i < initialHeights.length; i++) {
           let element = initialHeights[i];
           if(element < 30){
           initialHeights[i] = initialHeights[i] + 1;
           cubicConcreteTotal += 195;
           cubicConcretePerDay += 195;
           }
           
       };
       usedConcrete.push(cubicConcretePerDay);
   } ;
   let totalAmount = cubicConcreteTotal * 1900;
   console.log(usedConcrete.join(', '));
   console.log(`${totalAmount} pesos`);
}
solve([21, 25, 28])