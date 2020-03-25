function solve(day, age){
    let price = 0;
    let isError = false;
switch (day) {
    case 'Weekday':
        if(age >= 0 && age <= 18){
            price = 12;
        }else if(age <= 64 && age > 18){
            price = 18;
        }else if(age <= 122 && age > 64){
            price = 12;
        }else{
            isError = true
        }
        break;
    case 'Weekend':
        if(age >= 0 && age <= 18){
            price = 15;
        }else if(age <= 64 && age > 18){
            price = 20;
        }else if(age <= 122 && age > 64){
            price = 15;
        }else{
            isError = true;
        }
        break;
    case 'Holiday':
        if(age >= 0 && age <= 18){
            price = 5;
        }else if(age <= 64 && age > 18){
            price = 12;
        }else if(age <= 122 && age > 64){
            price = 10;
        }else{
            isError = true;
        }
         break;
}
if(!isError){
console.log(`${price}$`)
}else{
    console.log('Error!')
}
}