// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.

class Workerr {
    private name: string;
    private surname: string;
    private rate: number;
    private days: number;

    constructor(name: string, surname: string, rate: number, days: number) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    get getName(): string {
        return this.name;
    }

    get getSurname(): string {
        return this.surname;
    }

    get getRate(): number {
        return this.rate;
    }

    get getDays(): number {
        return this.days;
    }

    set setRate(value: number) {
        if (value < 0) {
            console.log("Ставка не может быть отрицательной");
            return;
        }
        this.rate = value;
    }


    set setDays(value:number) {
        if (value > 25 ) {
            console.log("Превышает норму отработанных дней");
            return;
        }
        this.days = value;
    }

    getSalary(): number {
        return this.rate * this.days;
    }

}
const newWorker = new Workerr('Иван', 'Иванов', 1000, 25);
newWorker.setDays = 24;
newWorker.setRate = 1500;
console.log(newWorker.getSalary());