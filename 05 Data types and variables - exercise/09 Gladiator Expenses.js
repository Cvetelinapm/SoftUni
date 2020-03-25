function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let counterShieldBrakes = 0;

    for (let i = 1; i <= lostFights; i++) {
        let isBrokenHelmet = false;
        let isBrokenSword = false;
        if(i % 2 === 0){
            expenses += helmetPrice;
            isBrokenHelmet = true; 
        } 
        if(i % 3 === 0){
            expenses += swordPrice;
            isBrokenSword = true;
        }  
        
        if(isBrokenHelmet && isBrokenSword){
            expenses += shieldPrice;
            counterShieldBrakes++
            if(counterShieldBrakes % 2 ===0){
                expenses += armorPrice;
            }
        }

        isBrokenSword = false;
        isBrokenHelmet = false;
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

}
solve(23,
    12.50,
    21.50,
    40,
    200)