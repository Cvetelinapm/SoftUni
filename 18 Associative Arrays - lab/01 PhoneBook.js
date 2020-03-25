function solve(arr){
let phonebook = {};

arr.forEach(element => {
    let [name, phone] = element.split(' ');
    phonebook[name] = phone;
});
for (const key in phonebook) {
   console.log(`${key} -> ${phonebook[key]}`)
}
}