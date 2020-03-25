function solve(lines) {
    let pattern = />>([a-zA-z]+)<<(\d+\.?\d+)!(\d+)/gm;
    let furnitures = [];
    let totalSpend = 0;
    let data = lines.slice(0, lines.indexOf('Purchase'));
    let res = pattern.exec(data);
   
    while(res){
        let furniture = res[1];
        let price = Number(res[2]);
        let qty = Number(res[3]);
        furnitures.push(furniture);
        totalSpend += (price * qty)
        res = pattern.exec(data);
    }
   
     let output = 'Bought furniture:\n';
     output = furnitures.reduce((a, b)=>{
         a += `${b}\n`
         return a
     }, output);
    output += `Total money spend: ${totalSpend.toFixed(2)}`
     console.log(output)
    
}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', '>>divine<<300!5', 'Purchase' ])