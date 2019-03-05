var country = [];

country[0] = {
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
};

country[1] = {
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
};

country[2] = {
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
};


console.log(country.length);

// •Найдите страну/страны с максимальным количеством городов
console.log("Страны с максимальным количеством городов:");
getCountryWithMaxNumberOfCity(country);


// Получите объект с информацией по всем странам такого вида: ключ –название страны, значение –суммарная численность по стране
var countryInfo = {};

getCountryInfo(country);
console.log(countryInfo);


function getCountryWithMaxNumberOfCity(array) {
    var count = 0;
    var i;
    for (i = 0; i < array.length; i++) {
        console.log(array.length);
        if (count < array[i].city.length) {
            count = array[i].city.length;
        }
    }

    var countCity = [];
    var n = -1;
    for (i = 0; i < array.length; i++) {//удалил var перед i, идея ругалась, странно почему в др местах не ругается.
        if (count === array[i].city.length) {
            n++;
            countCity[n] = new Array(2);
            countCity[n][0] = array[i].name;
            countCity[n][1] = count;
        }
    }

    for (i = 0; i < countCity.length; i++) {
        console.log("Страна: " + countCity[i][0] + ". Городов: " + countCity[n][1] + ".")
    }
}

function getCountryInfo(array) {
    function getPopulation(city) {
        var population = 0;
        for (var i = 0; i < city.length; i++) {
            population += city[i].population;
        }
        return population;
    }

    for (var i = 0; i < array.length; i++) {
        countryInfo[array[i].name] = getPopulation(array[i].city);
    }
}



