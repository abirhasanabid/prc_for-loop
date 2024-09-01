/**
 * Task: Use a for loop to calculate and print the factorial of a given number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
 */


let multi = 1;

for (let n = 5; n > 0; n--) {
    multi *= n;
}
console.log(multi);


// anohter way

const number = 5;

let multi2 = 1;

for (let n = 1; n <= number; n++) {
    multi2 *= n;

}
console.log(multi2);