function solve(textJson){
let obj = JSON.parse(textJson);
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
}
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')