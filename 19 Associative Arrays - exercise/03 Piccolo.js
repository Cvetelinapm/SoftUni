function solve(array){
let parking = new Set();
array.forEach(element => {
    let [direction, carNumber] = element.split(', ');
    if(direction === 'IN'){
        parking.add(carNumber);
    }else if(direction === 'OUT'){
        if(parking.has(carNumber)){
            parking.delete(carNumber);
        }
    }
});
let sorted = Array.from(parking).sort((a,b) =>{
    return a.localeCompare(b)
});
if(sorted.length>0){
    console.log(sorted.join('\n'))

}else{
    console.log('Parking Lot is Empty')
}
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)