function systemRegister(array){
    let systems = {};
array.forEach(element => {
    let [system, component, subcomponent] = element.split(' | ');
    if(!systems.hasOwnProperty(system)){
        systems[system] = {};
    }
    if(!systems[system].hasOwnProperty(component)){
        systems[system][component] = [];
    }
    systems[system][component].push(subcomponent);
});

let sorted = Object.keys(systems).sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length
|| a.localeCompare(b));

sorted.forEach(line =>{
    console.log(line);

    let sortetSubKeys = Object.keys(systems[line]).sort((a, b) => 
    Object.keys(systems[line][b]).length - Object.keys(systems[line][a]).length);

    sortetSubKeys.forEach(subKey => {
        console.log(`|||${subKey}`);
        systems[line][subKey].forEach(subcomponent =>{
            console.log(`||||||${subcomponent}`);
        })
    })
})
}
systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ])