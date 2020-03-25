function solve(char1, char2, char3){
    let rightOrder = char1 + char2 + char3;
    let reversed = '';
    for (let i = rightOrder.length - 1; i >= 0; i--) {
        reversed += rightOrder[i] + ' '
    }
    console.log(reversed)
}
solve('a', 'b', 'c')