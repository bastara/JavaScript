var country = [{
    name: "Russia",
    city: [{
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
    city: [{
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
    city: [{
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
var countryWithMaxNumberOfCity = getCountryWithMaxNumberOfCity(country);

countryWithMaxNumberOfCity.forEach(function (item) {
    console.log("Страна: " + item[0] + ". Городов: " + item[1] + ".");
});

// Получите объект с информацией по всем странам такого вида: ключ –название страны, значение –суммарная численность по стране
var countryInfo = {};

getCountryInfo(country);
console.log(countryInfo);


function getCountryWithMaxNumberOfCity(array) {
    var count = 0;

    array.forEach(function (e) {
        if (count < e.city.length) {
            count = e.city.length;
        }
    });

    var countCity = [];
    var n = 0;

    array.forEach(function (e) {
        if (count === e.city.length) {
            countCity[n] = new Array(2);
            countCity[n][0] = e.name;
            countCity[n][1] = count;
            n++;
        }
    });
    return countCity;
}

function getCountryInfo(array) {
    array.forEach(function (item) {
        countryInfo[item.name] = getPopulation(item.city);
    });

    function getPopulation(city) {
        var population = 0;
        city.forEach(function (item) {
            population += item.population;
        });
        return population;
    }
}
