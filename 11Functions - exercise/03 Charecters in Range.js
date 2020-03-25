function solve(charOne, charTwo){
    let asciiNumOne = charOne.charCodeAt();
    let asciiNumTwo = charTwo.charCodeAt();

    let start = Math.min(asciiNumTwo, asciiNumOne);
    let end = Math.max(asciiNumTwo, asciiNumOne);
    let output = [];

    for (let i = start + 1; i < end; i++) {
        const element = String.fromCharCode(i);
        output.push(element);
    }
    console.log(output.join(' '));
}
solve('a', 'd')