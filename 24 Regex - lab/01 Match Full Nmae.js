function solve(text){
let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let validNmaes = [];
let res = pattern.exec(text);
while(res){
    validNmaes.push(res[0]);
    res = pattern.exec(text)
}
console.log(validNmaes.join(' '))
}
solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')