function solve(text) {
    let lowerCase = text
        .toLowerCase()
        .split(' ');

    let reduced = lowerCase.reduce((a, b, index) => {
        let count = 1;
        if (a.has(b)) {
            count = a.get(b);
            count++
        }
        a.set(b, count)
        return a
    }, new Map());
    let odd = [];
    Array.from(reduced).forEach(tuples => {
        if (tuples[1] % 2 !== 0){
            odd.push(tuples[0]);
        }
    });
    console.log(odd.join(' '))
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')