function solve(text) {
    let numbers = [];
    const findPos = (letter) => {
        letter = letter.toLowerCase();
        let alphabetPos = {
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4,
            'e': 5,
            'f': 6,
            'g': 7,
            'h': 8,
            'i': 9,
            'j': 10,
            'k': 11,
            'l': 12,
            'm': 13,
            'n': 14,
            'o': 15,
            'p': 16,
            'q': 17,
            'r': 18,
            's': 19,
            't': 20,
            'u': 21,
            'v': 22,
            'w': 23,
            'x': 24,
            'y': 25,
            'z': 26,
        }
        let num = +alphabetPos[letter];
        return num
    }

    let sequence = text.split(' ').filter(x => x !== '').forEach(element => {
        let firstL = element.substring(0, 1);
        let lastL = element.substring(element.length - 1);
        let num = Number(element.substring(1, element.length - 1));
        let pos = 0;
        if (firstL === firstL.toUpperCase()) {
            pos = findPos(firstL);
            num /= pos;
        } else {
            pos = findPos(firstL);
            num *= pos;
        }
        if (lastL === lastL.toUpperCase()) {
            pos = findPos(lastL);
            num -= pos;
        } else {
            pos = findPos(lastL);
            num += pos;
        }

        numbers.push(num)

    });;

    let res = numbers.reduce((a,b)=>{
        return a+b},0);
    console.log(res.toFixed(2))
}
solve('A12b      s17G')