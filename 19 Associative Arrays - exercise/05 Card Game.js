function solve(array) {
    let cardPower = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let cardType = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    function cardPlayers(arr) {
        let playersObject = {};
        arr.forEach(element => {
            let [player, cards] = element.split(': ');
            cards = cards.split(', ');

            if (!playersObject.hasOwnProperty(player)) {
                playersObject[player] = [];
            }
            playersObject[player].push(...cards);
        });
        Object.entries(playersObject).forEach(element => {
            let unique = element[1].reduce((a, b) => {
                if (!a.includes(b)) {
                    a.push(b);
                }
                return a
            }, [])
            playersObject[element[0]] = unique
        })
        return playersObject
    }
    function calculateResult(obj, powerCalc, typaCalc) {
        Object.entries(obj).forEach(element => {
            let reduced = element[1].reduce((a, b) => {
                let tokens = b.split('');
                let res = 0;
                if (tokens.length === 2) {
                    res = powerCalc[tokens[0]] * typaCalc[tokens[1]];
                } else {
                    res = powerCalc[tokens[0] + tokens[1]] * typaCalc[tokens[2]];
                };
                a.push(res);
                return a
            }, [])
            obj[element[0]] = reduced.reduce((a,b) => Number(a) + Number(b));
        })
        return obj;
    }
    function printOutput (obj){
        let output = '';
        Object.entries(obj).forEach(entry =>{
            output += `${entry[0]}: ${entry[1]}\n`
        });
        return output;
    }
    let playerObj = cardPlayers(array);
    let playerResult =calculateResult(playerObj, cardPower, cardType);
    console.log(printOutput(playerResult))

}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)