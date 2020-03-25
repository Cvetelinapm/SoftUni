function solve(text){
    let middleIndex = (text.length - 1) / 2
    let firstPart = text.substring(0, middleIndex + 1).split('').reverse().join('');
    let secondPart = text.substring(middleIndex + 1).split('').reverse().join('');
    let output = firstPart + '\n' + secondPart;
    console.log(output)
}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')