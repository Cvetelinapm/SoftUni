function solve(arr){
let schoolGrades = {};

arr.forEach(element => {
    let tokens = element.split(' ');
    let name = tokens.shift();
    let grades = tokens.map(x => Number(x));
    if(schoolGrades.hasOwnProperty(name)){
        let curr = schoolGrades[name];
        curr.splice(curr.length, 0, ...grades);
        grades = curr;
    };
    schoolGrades[name] = grades;
});
let arrays = Object.entries(schoolGrades).sort((a, b)=>{
    let averageA = average(a[1])
    let averageB =  average(b[1])
    return averageA - averageB;
});
function average(a){
    let average = a.reduce((acc, curr) => {
        return acc + curr
    },0) / a.length;
    return average;
}
let reduced =arrays.reduce((a,b)=>{
    let output = `${b[0]}: ${b[1].join(', ')}\n`
    return a + output
}, '');
console.log(reduced)
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)