function solve(input) {
    let countries = {};
    input.forEach((line) => {
        let [country, town, price] = line.split(' > ');
        price = Number(price);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][town] = price;
        } else {
            let countrObj = countries[country];

            if (!countrObj.hasOwnProperty(town)) {
                countrObj[town] = price;
            } else {
                let oldPrice = countrObj[town];
                if (oldPrice > price) {
                    countrObj[town] = price;
                }
            }
        }
    });
    let sortCountries = Object.entries(countries)
    .sort(sortedCountries);

    for (let [name, town] of sortCountries) {
        let sortTowns = Object.entries(town).sort(sortedTowns);
        let output = `${name} -> `;
        for (let [townName, townPrice] of sortTowns) {
            output += `${townName} -> ${townPrice} `;
        }
        console.log(output)
    }
    function sortedCountries(firstCountry, secondCountry) {
        let firstName = firstCountry[0];
        let secondName = secondCountry[0];

        return firstName.localeCompare(secondName);
    }
    function sortedTowns(firstTown, secondTown) {
        let firstPrice = firstTown[1];
        let secondPrice = secondTown[1];

        return firstPrice - secondPrice;
    }
}
solve([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
])