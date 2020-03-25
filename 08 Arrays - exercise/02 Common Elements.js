function solve(arr1, arr2) {
    arr1.map(element => {
        if (arr2.includes(element)) {
            console.log(element);
            
        }
    })
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)