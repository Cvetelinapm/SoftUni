function solve(array){

    let wagons = array
    .shift()
    .split(' ')
    .map(Number);
    let maxCapacity = Number(array.shift());
     
   array.forEach((line) => {
       let tokens = line.split(' ');
       if(tokens.length >= 2){
           let nextWagon = Number(tokens[1]);
           wagons.push(nextWagon);
       }else{
           let passengers = Number(tokens[0]);
           for (let i = 0; i < wagons.length; i++) {
               const element = wagons[i];
               let result = element + passengers;
               if(!(result > maxCapacity)){
                   wagons[i] = result;
                   break;
               }
           }
       }
   });
   return wagons.join(' ')
}
console.log(
    solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
));