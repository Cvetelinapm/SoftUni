function solve(array){
    let guests = [];
array.forEach(element => {
    let tokens = element.split(' ');
    let guestName = tokens[0];
    if(tokens.length === 3){
        if(guests.includes(guestName)){
            console.log(`${guestName} is already in the list!`)
        }else{
            guests.push(guestName);
        }
    }else{
        if(!(guests.includes(guestName))){
            console.log(`${guestName} is not in the list!`)
        }else{
            let index = guests.indexOf(guestName);
            guests.splice(index, 1);
        }
    };
});

for (let name of guests) {
    console.log(name)
}

}
solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)