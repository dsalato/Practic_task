// Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three']
// решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

const arr = [1,2,3,6,8,1,6,3,2,1,0,4];
const arr_str = ['one', 'two','three'];

for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++)
        if(arr[i]>arr[j]){
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
        }
}
const new_arr: (number | string)[] = [...arr, ...arr_str];
console.log(new_arr);
