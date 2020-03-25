function solve(cityName, area, population, country, postCode){
    let cityInfo = {
        name: cityName,
        area: area,
        population: population,
        country: country,
        postCode: postCode,
    };
    for (const key in cityInfo) {
       console.log(`${key} -> ${cityInfo[key]}`)
    }

}
solve("Sofia"," 492", "1238438", "Bulgaria", "1000")