function solve(array){
    let words = array.shift().split(' ');
    tracker = new Map();
    words.forEach(el=>{
        tracker.set(el, 0)
    })
 array.reduce((a,b) =>{
        if(words.includes(b)){
            let count = tracker.get(b);
            count++;
            tracker.set(b, count)
        }
        return a
    }, tracker);
    let output = '';
    let tuples = Array.from(tracker.entries());
    tuples.sort((a,b) =>{
        return b[1] - a[1];
    }).forEach(el=>{
        output += `${el[0]} - ${el[1]}\n`
    })
  
    console.log(output)
    }
solve([
    'this sentence hello', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )