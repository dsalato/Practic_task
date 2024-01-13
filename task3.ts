const makePalindrome = (str: string) => {
    let reversedStr:string = str.split('').reverse().join('');
    reversedStr = reversedStr.replace(reversedStr[0],'')
    return str + reversedStr;
}

const str1: string = "дим";
const str2: string = "манек";
const str3: string = "рота";

const palindrome1 = makePalindrome(str1);
const palindrome2 = makePalindrome(str2);
const palindrome3 = makePalindrome(str3);

console.log(palindrome1);
console.log(palindrome2);
console.log(palindrome3);