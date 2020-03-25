function solve(arr){
function createObj(array){
    let travelInfo = {};
    array.forEach(element => {
        let [country, city, cost] = element.split(' > ');
        cost = Number(cost);
        if(!travelInfo.hasOwnProperty(country)){
            travelInfo[country] = {};
        };
        if(!travelInfo[country].hasOwnProperty(city)){
            travelInfo[country][city] = cost;
        }else{
            let curr = travelInfo[country][city]
            if(curr > cost){
                travelInfo[country][city] = cost; 
            }
        }
    });
    return travelInfo;
}
function sortObject(object){
    let townSort = Object.entries(object).sort((a,b)=>a[0].localeCompare(b[0]));
    return townSort
}
// function sortCost (array){
//     array.forEach(line=>{
//         let obj = line[1];

//        Object.entries(obj).sort((a,b) =>{
//                 console.log(a[1] + '--' + b[1])
//                 if (+a[1] < +b[1]) {
//                     return -1
//                 }
//                 if (+a[1] > +b[1]) {
//                     return 1
//                 } 

//                 return 0;
//             })
        
//         console.log(obj)
//     })

//     return array
// }

let travelInfo = createObj(arr);
let sortedTowns = sortObject(travelInfo);

for (const [country, townInfo] of sortedTowns) {
    let output = '';

    output += `${country} -> `;

    Object.entries(townInfo).sort((a, b) => a[1] - b[1]).forEach(el=>{
        output += `${el[0]} -> ${el[1]} `;
    })
    console.log(output)
}

}
solve([
    "Albania > Tirana > 999",
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "Bulgaria > Sopot > 900",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Varna > 100"

    ]
    )