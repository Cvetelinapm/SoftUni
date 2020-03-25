function solve(array){
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isSlayed = true;
    let rooms = array[0].split('|');
    for (let room of rooms) {
        bestRoom++
        let tokens = room.split(' ');
        let item = tokens[0];
        let value = Number(tokens[1]);

        if(item === 'potion'){
            let currentHealth = health;
            health += value;
            if(health > 100){
                health = 100;
                value = 100 - currentHealth;
            }
             console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(item === 'chest'){
            coins += value;
            console.log(`You found ${value} coins.`)
        }else{
            health -= value;
            if(health > 0){
                console.log(`You slayed ${item}.`);
            }else{
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${bestRoom}`);
                isSlayed = false;
                break;
            }
        }
        
    }

    if(isSlayed){
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])