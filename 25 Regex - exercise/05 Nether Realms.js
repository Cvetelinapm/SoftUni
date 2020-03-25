function solve(input) {
    let patternDamage = /([+-]?\d+\.?\d*)/gm;
    let patterHealth = /[^0-9.\/+*-]/g;
    let patternCalculations = /([\*\/])/gm;
    let demons = {};
    let array = input[0].split(/[, ]+/g)
    array.forEach(element => {
        demons[element] = {};
        let health = element.match(patterHealth)
        if (health) {
            health = health.reduce((a, b) => {
                let asciiNum = b.charCodeAt();
                a += asciiNum;
                return a
            }, 0);

        } else {
            health = 0;
        };
        demons[element].health = health;
        let damage = element.match(patternDamage);
        if(damage){
            damage = damage.map(Number).reduce((a,b)=>{
                a+= b;
                return a;
            }, 0);
            let calculations = element.match(patternCalculations)
            if(calculations){
                calculations.forEach(element=>{
                    if(element === '*'){
                        damage *= 2
                    }else if(element === '/'){
                        damage /= 2;
                    }
                })
            }
          
        }else{
            damage = 0;
        }

        demons[element].damage = damage;
    });
    let output ='';
    Object.keys(demons).sort((a,b)=>{
        return a.localeCompare(b);
    }).forEach(element=>{
        output += `${element} - ${demons[element].health} health, ${demons[element].damage.toFixed(2)} damage\n`;
    })
console.log(output)
}
solve([ '//////' ])