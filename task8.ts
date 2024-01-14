const filterArrayAndBinarySearch = (arr: number[], searchNumber: number): number | null => {
    const filteredArray = arr.filter((num) => num >= 0).sort((a, b) => a - b);

    let left = 0;
    let right = filteredArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (filteredArray[mid] === searchNumber) {
            return filteredArray[mid]; // Найдено искомое число
        }

        if (filteredArray[mid] < searchNumber) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null; // Искомое число не найдено
}

const arr = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];
const searchNumber = 0;
const result = filterArrayAndBinarySearch(arr, searchNumber);

if (result === null) {
    console.log("Искомое число не найдено");
} else {
    console.log("Искомое число найдено");
}