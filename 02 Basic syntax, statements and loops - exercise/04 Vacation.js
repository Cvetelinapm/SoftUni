function solve(group, type, day){
let singleCost = 0;
switch (type) {
    case 'Students': 
    switch (day) {
        case 'Friday': singleCost = 8.45 ;break;
        case 'Saturday': singleCost = 9.80 ;break;
        case 'Sunday': singleCost = 10.46 ;break;
    }
    ; break;
    case 'Business':
    switch (day) {
        case 'Friday': singleCost = 10.90 ;break;
        case 'Saturday': singleCost = 15.60 ;break;
        case 'Sunday': singleCost = 16 ;break;
        }  
    ; break;
    case 'Regular': 
    switch (day) {
        case 'Friday': singleCost = 15 ;break;
        case 'Saturday': singleCost = 20 ;break;
        case 'Sunday': singleCost = 22.50 ;break;
    }
    ; break;
}
let total = singleCost * group; 
if(type === 'Students' && group >= 30){
    total *= 0.85;
}
if(type === 'Business' && group >= 100){
    total = singleCost * (group - 10);
}
if(type === 'Regular' && group >= 10 && group <= 20){
    total *= 0.95;
}
console.log(`Total price: ${total.toFixed(2)}`)
}
solve(30,
    'Students',
    'Sunday')