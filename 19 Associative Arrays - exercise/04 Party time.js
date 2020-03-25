function solve(array) {
   function createList (guestsArr){
       let guests  ={
           vip: [],
           regular: []
       }
       guestsArr.forEach(element => {
           if(!isNaN(Number(element[0]))){
               guests.vip.push(element);
           }else{
            guests.regular.push(element);
           }
       });
       return guests
   }
   function removeGuest(arr, guestObj){
       arr.forEach(element=>{
           if(guestObj.vip.includes(element)){
            let index = guestObj.vip.indexOf(element);
            guestObj.vip.splice(index, 1);
           }
           if(guestObj.regular.includes(element)){
               let index = guestObj.regular.indexOf(element);
               guestObj.regular.splice(index, 1);
           }

       });
       return guestObj

   }
   function createOutputArr (guests){
       let arr = guests.vip.concat(guests.regular)
       let str = arr.length + '\n' + arr.join('\n');
       return str;
   }
let indexParty = array.indexOf('PARTY');
let invited = array.slice(0, indexParty);
let comeGuests = array.slice(indexParty +1);
let guestsObject = createList(invited);
let removedObject = removeGuest(comeGuests, guestsObject);
let output = createOutputArr(removedObject);
console.log(output)

}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]


)