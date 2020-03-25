function solve(array){

    let account = array[0].split(' ');
    array.shift();

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' ');
        let command = tokens[0];
        let game = tokens[1];
        if(command === 'Play!'){
            break;
        }else if(command === 'Install'){
            if(!account.includes(game)){
                account.push(game);
            }
        }else if(command === 'Uninstall'){
            if(account.includes(game)){
                let index = account.indexOf(game);
                account.splice(index, 1)
            }
        }else if(command === 'Update'){
            if(account.includes(game)){
                let index = account.indexOf(game);
               let removed = account.splice(index, 1);
               account.push(removed);
            }
        }else{
            let token = game.split('-')
            let searchedGame = token[0];
            let expansion = token[1];
            if(account.includes(searchedGame)){
                let index = account.indexOf(searchedGame);
                account.splice(index+1, 0, `${searchedGame}:${expansion}`)
            }
        }
    }

console.log(account.join(' '))
}
solve([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
  ])