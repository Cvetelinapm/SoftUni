function solve(input){
let inventory = input.shift().split(' ');

    function buy(arr, token){
        if(!arr.includes(token)){
            return arr.push(token);
        }
    }
    function trash(arr, token){
        let index = arr.indexOf(token);
        if(index !== -1){
            return arr.splice(index, 1);
        }
    }
    function repair(arr, token){
        let index = arr.indexOf(token);
        if(index !== -1){
            let repairedEl = arr.splice(index, 1);
            return arr.push(repairedEl);
        }
    }
    function upgrade(arr, token){
        let [equipmentToUpgrade, upgrade] = token.split('-');
        let index = arr.indexOf(equipmentToUpgrade);
        let elementToAdd = `${equipmentToUpgrade}:${upgrade}`
        if(index !== -1){
            arr.splice(index + 1, 0, elementToAdd);
            return arr;
        }
    }
input.forEach(line => {
    let [command, equipment] = line.split(' ');
  
    if(command === 'Buy'){
        buy(inventory, equipment);
    }else if(command === 'Trash'){
        trash(inventory, equipment);
    }else if(command === 'Repair'){
        repair(inventory, equipment);
    }else if(command === 'Upgrade'){
        upgrade(inventory, equipment);
    }
});
console.log(inventory.join(' '))
}
solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)