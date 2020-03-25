function solve(words, text){
    words = words.split(', ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        text = text.replace('*'.repeat(word.length), word)
        
    }
    console.log(text)
}
solve('great, learning',
'softuni is ******** place for ***** new programming languages'
)