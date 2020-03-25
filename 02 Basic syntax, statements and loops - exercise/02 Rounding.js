function solve(value, decimal){
   if(decimal > 15){
       console.log(parseFloat(value.toFixed(15)))
   }else{
       console.log(parseFloat(value.toFixed(decimal)))
   }
}
solve(3.156561616, 3)