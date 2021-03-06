var countries = [{
    name: "Russia",
    cities: [{
        name: "Moscow",
        population: 12500000
    }, {
        name: "Ufa",
        population: 1100000
    }, {
        name: "Nsk",
        population: 1600000
    }, {
        name: "Spb",
        population: 5300000
    }, {
        name: "Kazan",
        population: 1200000
    }]
}, {
    name: "Usa",
    cities: [{
        name: "Washington",
        population: 658000
    }, {
        name: "Chikago",
        population: 2700000
    }, {
        name: "Detroit",
        population: 681000
    }, {
        name: "Dallas",
        population: 1200000
    }, {
        name: "Ostin",
        population: 900000
    }]
}, {
    name: "France",
    cities: [{
        name: "Paris",
        population: 2200000
    }, {
        name: "Lion",
        population: 500000
    }, {
        name: "Tuluza",
        population: 440000
    }]
}];

// •Найдите страну/страны с максимальным количеством городов
console.log("Страны с максимальным количеством городов:");
var countriesWithMaxNumberOfCity = getCountriesWithMaxNumberOfCity(countries);

countriesWithMaxNumberOfCity.forEach(function (item) {
    console.log("Страна: " + item + ".");
});

// Получите объект с информацией по всем странам такого вида: ключ –название страны, значение –суммарная численность по стране
var countryInfo = getCountryInfo(countries);
console.log(countryInfo);

console.log(window.location.href);

function getCountriesWithMaxNumberOfCity(array) {
    var count = array.reduce(function (prev, current) {
        return Math.max(prev, current.cities.length);
    }, 0);

    return array.filter(function (elem) {
        return elem.cities.length === count;
    }).map(function (value) {
        return value.name;
    });
}

function getCountryInfo(array) {
    function getPopulation(city) {
        return city.reduce(function (prev, current) {
            return prev + current.population;
        }, 0);
    }

    var info = {};
    array.forEach(function (item) {
        info[item.name] = getPopulation(item.cities);
    });
    return info;
}