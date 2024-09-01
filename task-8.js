/**
 * Task: Given a string and a character, use a for loop to count how many times the character appears in the string.
 */

const sentence = 'dhghgadjgjaldgasdfqo';
const character = 'g';
let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === character) {
        count++
    }
}
console.log(count);