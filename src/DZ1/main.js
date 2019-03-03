console.log("Массив чисел");
var list = [2, 5, 6, 9, 654, 2, -65, 234];
console.log(list);
list.sort(function (e1, e2) {
    return e2 - e1;
});
console.log("Сортировка по убыванию");
console.log(list);
console.log("Первые 5 значений");
console.log(list.slice(0, 5));
console.log("Последние 5 значений");
console.log(list.slice(list.length - 5, list.length));

var sum = 0;
list.forEach(function (item) {
    sum += even(item) ? item : 0;
});

function even(num) {
    if (num + 1 & 1) {//не смог найти как поставить отрицание и не стал делать через else. Или через елсе вернее будет?
        return true;
    } else false;
}

console.log("Найдите сумму элементов массива, которые являются четными числами: " + sum);
console.log();

console.log("Создайте массив чисел от 1 до 100, в таком порядке");
var list100 = [];
arr100(list100, 100);
console.log(list100);
console.log("Получите список квадратов четных чисел из этого массива");
pow2(list100);

function arr100(arr,n) {
    for (var i = 0; i < n; i++) {
        // arr.push(i + 1);
        arr[i] = i + 1;
    }
}

function pow2(arr) {
    for (var i = 0; i < 100; i++) {
        if (even(arr[i])) {
            console.log(arr[i] * arr[i]);//в яве не желательно использовать функции для вывода на консоль, а тут как?
        }
    }
}
