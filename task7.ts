// В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать).
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// В переменной year лежит какой то год например 2022. Определите високосный это год или нет.

let month: number = Math.floor(Math.random() * 13) + 1;
let season: string = '';
let year: number = Math.floor(Math.random() * 2025) + 1;

if(month <= 3)
    season = 'Зима';
else if( month <= 6 && 4 <= month  )
    season = 'Весна';
else if( month <= 9 && 7 <= month )
    season = 'Лето';
else
    season = 'Осень';

console.log(`${month} месяц`, season);

if (year % 4 === 0 || (year % 400 === 0 && year % 100 === 0)){
    console.log(year + ' год - високосный');
} else {
    console.log(year + 'год — невисокосный');
}
