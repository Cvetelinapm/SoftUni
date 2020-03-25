function solve(arr) {
    let text = arr[0].concat(arr[1]).toLowerCase().split('');
    let word = arr[2].toUpperCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < text.length; i++) {
        let ch = text[i]
        if (vowels.includes(ch)) {
            let newCh = word.shift();
            word.push(newCh)
            text[i] = newCh;
        } ;
        
    };
    let output = text.reverse().join('')
    console.log(`Your generated password is ${output}`)
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)