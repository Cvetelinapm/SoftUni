function solve(str){
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0 
    }
    let junkMaterials = {};
    let items ={
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath' 
    }
    let winner;
    function findWinner(material, obj){
        let winner = obj[material];
        return winner;
    }
    function sortKeyMaterials(obj){
        let sorted = Object.entries(obj).sort((a,b)=>{
            return b[1] - a[1] || a[0].localeCompare(b[0])
        })
        return sorted;
    }
    function sortJunkMat (obj){
        let sorted = Object.entries(obj).sort((a,b)=> a[0].localeCompare(b[0]));
        return sorted
    }
    function createOutput(winner, keyMatArr, junkMatArr){
        let output = '';
        output += `${winner} obtained!\n`;
        keyMatArr.forEach(element => {
            output += `${element[0]}: ${element[1]}\n`
        });
        junkMatArr.forEach(element=>{
            output += `${element[0]}: ${element[1]}\n`
        });
        return output;
    }
    let arr = str.toLowerCase().split(' ');
for (let i = 0; i < arr.length; i+=2) {
    const qty = Number(arr[i]);
    const material = arr[i+1];
    if(keyMaterials.hasOwnProperty(material)){
        keyMaterials[material] += qty;
        if(keyMaterials[material]>=250){
            keyMaterials[material] -= 250;
            winner = findWinner(material, items);
            break;
        }
    }else{
        if(!junkMaterials.hasOwnProperty(material)){
            junkMaterials[material] =0
        }
        junkMaterials[material] += qty;
    }
}
let sortedKeyMat = sortKeyMaterials(keyMaterials);
let sortedJunk = sortJunkMat(junkMaterials);
let output = createOutput(winner, sortedKeyMat, sortedJunk);
console.log(output)
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')