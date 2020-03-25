function solve(array){
    let prevNum = Number.MIN_SAFE_INTEGER;
    let decsending = [];
    array.filter(num => {
  if(num >= prevNum){
      prevNum = num;
    decsending.push(num);
  }
});

console.log(decsending.join(' '));



}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])