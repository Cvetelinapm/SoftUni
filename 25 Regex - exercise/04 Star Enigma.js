function solve(array) {
    let messages = Number(array.shift());
    let attacked = [];
    let destroyed = [];
    for (let i = 0; i < messages; i++) {
        const element = array[i];
        let patternLetters = /[starSTAR]/gm;
        let numTosubtr = element.match(patternLetters);
        if(numTosubtr !== null){
        let decryptedText = '';
        for (const ch of element) {
            let ascii = ch.charCodeAt();
            ascii -= numTosubtr.length;
            let decryptedCh = String.fromCharCode(ascii);
            decryptedText += decryptedCh;
        };
        let pattern = /@([A-Za-z]+)[^@\-!:>]*:([0-9]+)[^@\-!:>]*!([A|D])![^@\-!:>]*->([0-9]+)/gm;
        let data = pattern.exec(decryptedText);
        if (data !== null) {
            if (data[3] === 'A') {
                attacked.push(data[1]);
            } else if (data[3] === 'D') {
                destroyed.push(data[1]);
            }
        } else {
            continue;
        }
    }
}

    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        attacked.sort((a, b) => a.localeCompare(b)).forEach(planet => {
            console.log(`-> ${planet}`)
        })
    }
    console.log(`Destroyed planets: ${destroyed.length}`)
    if (destroyed.length > 0) {
        destroyed.sort((a, b) => a.localeCompare(b)).forEach(planet => {
            console.log(`-> ${planet}`)
        })
    }
}
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]

)