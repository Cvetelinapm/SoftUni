function solve(tickets) {
    tickets[0].split(/[, ]+/g).forEach(ticket => {
        let pattern = /([@#\$\^]){6,}/gm;
        if (ticket.length === 20) {
            let left = ticket.slice(0, ticket.length / 2);    
            let right = ticket.slice(ticket.length / 2);
            let mark = pattern.exec(left);0
            pattern = /([@#\$\^]){6,}/gm;
            let mark2 = pattern.exec(right)
            if (mark !== null && mark2 !== null) {
                let specialSymbol = mark[1];
             
                let leftArr = Array.from(mark[0]).filter(x=>x===specialSymbol);
                let rigthArr = Array.from(mark2[0]).filter(x=>x===specialSymbol);
                let total = leftArr.concat(...rigthArr);
                
                    // let arr = Array.from(mark[0].concat(mark2[0])).filter(x => x === specialSymbol);
                     if(total.length >=12 && total.length <20){
                         console.log(`ticket "${ticket}" - ${Math.min(leftArr.length, rigthArr.length)}${specialSymbol}`)
                     }else if(total.length === 20){
                         console.log(`ticket "${ticket}" - ${leftArr.length}${specialSymbol} Jackpot!`)
                     }
               
            } else {
                console.log(`ticket "${ticket}" - no match`)
            }
        } else {
            console.log('invalid ticket')
        }
    })
}
solve(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@@emo@@@@@@ey,       th@@@@@@eemo%%%%%%dw'])