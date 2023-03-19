// Напишите функцию flatten, которая будет принимать на вход массив массивов 
// и создавать из них один общий массив. Массивы могут быть любой вложенности
// Пример:
// [1, 2, 3, [4, 5, 6, [10, 20, 30]]] -> [1, 2, 3, 4, 5, 6, 10, 20 ,3

list = [1, 2, 3, [4, 5, 6, [10, 20, 30]]];

function flatten(list) {
    let result = [];

    list.forEach((item) => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    });
    
    return result;
}

console.log('Первоначальный вид:')
console.log(list)
console.log('После выполнения функции flatten:')
console.log(flatten(list))