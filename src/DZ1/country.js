var moscow = {
    name: "Moscow",
    population: 12500000
};

var ufa = {
    name: "Ufa",
    population: 1100000
};

var nsk = {
    name: "Nsk",
    population: 1600000
};

var spb = {
    name: "Spb",
    population: 5300000
};

var kazan = {
    name: "Kazan",
    population: 1200000
};

var russia = {
    name: "Russia",
    city: [moscow, ufa, nsk, spb, kazan]
};

var washington = {
    name: "Washington",
    population: 658000
};

var chikago = {
    name: "Chikago",
    population: 2700000
};

var detroit = {
    name: "Detroit",
    population: 681000
};

var dallas = {
    name: "Dallas",
    population: 1200000
};

var ostin = {
    name: "Ostin",
    population: 900000
};

var usa = {
    name: "Usa",
    city: [washington, chikago, detroit, dallas, ostin]
};

var paris = {
    name: "Paris",
    population: 2200000
};

var lion = {
    name: "Lion",
    population: 500000
};

var tuluza = {
    name: "Tuluza",
    population: 440000
};

var france = {
    name: "France",
    city: [paris, lion, tuluza]
};

var country = [russia, usa, france];

// •Найдите страну/страны с максимальным количеством городов
console.log("Страны с максимальным количеством городов:");
contryWithMaxNumberOfCity(country);


// Получите объект с информацией по всем странам такого вида: ключ –название страны, значение –суммарная численность по стране
var countryInfo={};

getCountryInfo(country);
console.log(countryInfo);



function getCountryInfo(array) {
    function getPopulatoin(city) {
        var population = 0;
        for (var i = 0; i < city.length; i++) {
            population += city[i].population;
        }
        return population;
    }

    for (var i = 0; i < array.length; i++) {
        countryInfo[array[i].name] = getPopulatoin(array[i].city);
    }
}

function contryWithMaxNumberOfCity(array) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
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

    for (var i = 0; i < countCity.length; i++) {
        console.log("Страна: " + countCity[i][0] + ". Городов: " + countCity[n][1] + ".")
    }
}



