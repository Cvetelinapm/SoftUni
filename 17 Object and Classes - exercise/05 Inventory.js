function solve(array){
    let heroes = [];
array.forEach(line => {
    let tokens = line.split(' / ');
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(', ').sort((a,b) => a.localeCompare(b)).join(', ');
    heroes.push({name: name, level: level, items: items});
});

heroes.sort((a,b) => {
    return a.level - b.level;
});
for (const hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`)
};
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )