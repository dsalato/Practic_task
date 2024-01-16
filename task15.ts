// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
// и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString{
    reverse(str:string){
         return str.split('').reverse().join('');
    }
    ucFirst(str:string){
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str:string){
        return str.replace(/(^|\s)\S/g, function(str) {
            return str.toUpperCase()
        })
    }
}
const myNewString = new MyString();
const letter = 'мама мыла милу'
console.log(myNewString.reverse(letter));
console.log(myNewString.ucFirst(letter));
console.log(myNewString.ucWords(letter));