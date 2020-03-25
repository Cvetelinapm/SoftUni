function solve(array){
    
class Cat {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}
for (let i = 0; i < array.length; i++) {
    let element = array[i].split(' ');
    let [name, age] = [element[0], element[1]];
    let cat = new Cat(name, age);

    cat.meow()
}


}
solve(['Mellow 2', 'Tom 5'])