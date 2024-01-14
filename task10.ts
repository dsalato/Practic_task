// вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]]
// добавить все элементы в одномерный массив [1,4,5,1,3,4,2,6] и отсоритровать его

const array: number[][] = [[1,4,5],[1,3,4],[2,6]];
const newArray: number[] = array.flat();
const filterArray = newArray.sort((a, b) => a - b);

console.log(filterArray);