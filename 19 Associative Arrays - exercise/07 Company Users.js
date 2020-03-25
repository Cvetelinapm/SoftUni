function solve(array){
function createInfo(arr){
    let info = arr.reduce((a,b)=>{

        let [company, employeeId] = b.split(' -> ');
        if(!a[company]){
            a[company] = new Set()
        }
        a[company].add(employeeId);
        return a
    },{});
    return info
};
function sortingInfo(obj){
    let sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
    return sorted
}
let infoCompanies = createInfo(array);
let sortByName = sortingInfo(infoCompanies);
let output = sortByName.reduce((a,b)=>{
a += `${b[0]}\n`;
b[1].forEach(id => {
    a += `-- ${id}\n`
});
return a;
}, '');
console.log(output)
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )