/**
 * Task: Given an array of numbers, use a for loop to calculate the sum of all even numbers in the array.
 */


const numbers = [23, 648, 8909, 46, 89, 56, 8970, 4];

let sum = 0;

for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {
        sum += numbers[n];
    }
}
console.log(sum);