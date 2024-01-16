// создать класс calculation , в котором будет одна переменная calculationLine. методы:
// setterCalculationLine который будет к переменной приравнивать значение которое передается,
// setLastSymbolCalculationLine, который будет в конец строки прибавлять символ,
// gettercalCulationLine который будет выводить переменную,
// lastSymbol получение последнего символа, deleteLastSymbol удаление последнего символа из строки

class calculation{
    calculationLine: string;

    constructor(calculationLine: string) {
        this.calculationLine = calculationLine;
    }
    gettercalCulationLine(): void{
        console.log(this.calculationLine);
    }
    setterCalculationLine(str:string){
        return this.calculationLine = str;
    }
    setLastSymbolCalculationLine(str:string){
        return str.concat('!');
    }
    lastSymbol(str:string){
        return str.slice(-1);
    }
    deleteLastSymbol(str:string){
        return str.slice(0,-1);
    }

}
const newCalculation= new calculation('Задача');
const value = 'Сложнозадачность'

newCalculation.gettercalCulationLine();//Задача
console.log(newCalculation.setterCalculationLine(value)); // Сложнозадачность
console.log(newCalculation.setLastSymbolCalculationLine(value)); // Сложнозадачность!
console.log(newCalculation.lastSymbol(value)); //ь
console.log(newCalculation.deleteLastSymbol(value)); // Сложнозадачност