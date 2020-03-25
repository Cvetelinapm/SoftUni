function solve(array) {
    let gladiators = {};
    function createGladiator(name, tech, qty, obj) {
        if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
            obj[name].total = 0;

        }
        if (!obj[name].hasOwnProperty(tech)) {
            obj[name][tech] = qty;
        } else {
            let currQty = obj[name][tech];
            if (currQty < qty) {
                obj[name][tech] = qty;
            }
        };
        obj[name].total += qty;
        return obj;
    }
    function fightGlagiators(gladiatorOne, gladiatorTwo, obj) {
        if (obj.hasOwnProperty(gladiatorOne) && obj.hasOwnProperty(gladiatorTwo)) {
            let firstTechnique = Object.keys(obj[gladiatorOne]);
            let secondTechnique = Object.keys(obj[gladiatorTwo]);
            for (const technique of firstTechnique) {

                if (secondTechnique.includes(technique) && technique !== 'total') {
                    let firstSkill = obj[gladiatorOne][technique];
                    let secondSkill = obj[gladiatorTwo][technique];
                    if (firstSkill > secondSkill) {
                        delete obj[gladiatorTwo]
                        break;
                    } else if (secondSkill > firstSkill) {
                        delete obj[gladiatorOne];
                        break;
                    }
                }
            }
        }
        return obj;
    }
    function sortBySkills(obj) {
        let sortTotalSkill = Object.entries(obj).sort((a, b) => {
            let nameOne = a[0];
            let nameTwo = b[0];
            let totalOne = obj[nameOne].total;
            let totalTwo = obj[nameTwo].total;
            return totalTwo - totalOne || nameOne.localeCompare(nameTwo);
        })
        return sortTotalSkill
    }

    for (const element of array) {
        //let tokens = element.split(/(->|vs)/).map(x => x.trim());
        if (element.includes('vs')) {
            let tokens = element.split(' vs ')
            let first = tokens[0];
            let second = tokens[1];
            gladiators = fightGlagiators(first, second, gladiators)
        } else if (element.includes('->')) {
            let tokens = element.split(' -> ')
            let first = tokens[0];
            let technique = tokens[1];
            let qty = Number(tokens[2]);
            gladiators = createGladiator(first, technique, qty, gladiators)
        }else{
            break;
        }
        
    }
    let sorted = sortBySkills(gladiators)
    for (const [gladiator, infoSkills] of sorted) {
        let output = '';
        output = `${gladiator}: ${infoSkills.total} skill`;
        console.log(output);
        let sortedArr = Object.keys(infoSkills).sort((a, b) => {
            let skillNameOne = a;
            let skillNameTwo = b;
            let skillOne = infoSkills[skillNameOne];
            let skillTwo = infoSkills[skillNameTwo];
           
            return skillTwo - skillOne || skillNameOne.localeCompare(skillNameTwo);
        })
        sortedArr.forEach(line=>{
            if(line!== 'total'){
                console.log(`- ${line} <!> ${infoSkills[line]}`) 
            }
        })
    }
}
solve([
    'Peter -> BattleCry -> 00',
    'Alex -> Duck -> 00',
    'Stefan -> Duck -> 200',
    'Stefan vs Alex',
    'Ave Cesar'
])