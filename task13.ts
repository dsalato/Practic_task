// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

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

    getSalary(): number {
        return this.rate * this.days;
    }

}
const newWorker = new Workerr('Иван', 'Иванов', 1000, 25);

console.log(newWorker.getSalary());
console.log(newWorker.getName);
console.log(newWorker.getSurname);
console.log(newWorker.getRate);
console.log(newWorker.getDays);

