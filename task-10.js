/**
 * Task: Given a number, use a for loop to determine if the number is prime (a number is prime if it is only divisible by 1 and itself).
 */

const number = 20;

for (let n = 2; n < number; n++) {
    if (number % n === 0) {
        console.log(number);
    }
}