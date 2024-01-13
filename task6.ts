// вывести числа фибаначи до 200

function fibonacci (n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (let i = 0; fibonacci(i) <= 200; i++) {
    console.log(fibonacci(i));
}