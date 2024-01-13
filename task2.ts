let str: string = 'hello alexandr!';
let firstLetter: string = str[0];
let result: string = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        result += ' ';
        firstLetter = str[i+1];
    } else {
        result += firstLetter;
    }
}

console.log(result);