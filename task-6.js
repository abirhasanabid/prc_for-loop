/**
 * Task: Use a for loop to print the multiplication table for the number 9 (from 1 to 10).
 */

const num = 9;

for (let n = 1; n <= 10; n++) {
    let multi = num * n;
    console.log(num, '*', n, '=', multi);
}