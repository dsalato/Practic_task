let str: string = 'DDADSADASDAAADS';
let str_next: string = "DAS";
let uniqueChars: string = '';

for (let i = 0; i < str.length; i++) {
    if (str_next.includes(str[i])) {
        if (!uniqueChars.includes(str[i])) {
            uniqueChars += str[i];
        }
    }
}

console.log(uniqueChars);