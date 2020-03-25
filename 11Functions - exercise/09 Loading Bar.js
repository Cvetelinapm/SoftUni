function solve(number){
    number = Number(number);
    let loadingBar = '%'.repeat(number/10);
    if(number === 100){
        console.log(`${number}% Complete!`);
        console.log(`[${loadingBar}]`)
    }else if(number < 100){
        let dots = '.'.repeat(10 - (number/10));
        console.log(`${number}% [${loadingBar}${dots}]`);;
        console.log('Still loading...');
    }
}
solve(80)