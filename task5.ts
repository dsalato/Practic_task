// вывести все числа делящиеся только на себя до 100

const primeNumber = (num: number): boolean => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

for (let i = 2; i <= 100; i++) {
    if (primeNumber(i)) {
        console.log(i);
    }
}