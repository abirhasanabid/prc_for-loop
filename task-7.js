/**
 * Task: Given an array of numbers, use a for loop to find and print the largest element in the array.
 */

const numbers = [12,4,8,90,7,6,89,9];

let maxNumber = numbers[0];


for(let i = 0;i<numbers.length;i++){
    // console.log(Math.max(numbers[i]));
    // console.log(numbers[i]);
    if(numbers[i]>maxNumber){
        maxNumber = numbers[i]
    }

}
console.log(maxNumber);