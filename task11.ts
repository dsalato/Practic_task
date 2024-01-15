// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function convertObjectToArray(obj: { [key: string]: number }): Array<[string, number]> {
    return Object.entries(obj);
}

console.log(convertObjectToArray({ a: 1, b: 2 }));


