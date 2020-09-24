/**
 * Name: Documentation
 * Purpose: Demonstrate my understanding of formal documentation in ES6
 * Author: Ryan Li (767571)
 * Created: 2020-09-24
 * Updated: 2020-09-24
 */

/**
 * This function takes two numbers and return their sum
 *
 * @param {number} a - The first number to be added
 * @param {number} b - The second number to be added
 * @returns {number} - The sum of the a and b
 */
function Add(a, b) {
    return a + b;
}

/**
 * Testing Add function
 */
console.log("\nTesting Add");
console.log(Add(2, 3));
console.log(Add(-10, 4));
console.log(Add(2.03, 3.3));

/**
 * This function checks whether a given number is prime
 *
 * @param {number} num - The number being checked for its primality
 * @returns {bool} - True if the number is prime, false otherwise
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

/**
 * Testing isPrime function
 */
console.log("\nTesting isPrime");
console.log(isPrime(7));
console.log(isPrime(1));
console.log(isPrime(100));

/**
 * This function finds the index of a given element within an array using binary search
 *
 * @param {array} arr - A sorted array of numbers
 * @param {number} target - The target element to be searching for
 * @returns {number} - Index of the element, or -1 if the element doesn't exist
 */
function BinarySearch(arr, target) {
    let l = 0;
    let r = arr.length;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] == target) return m;
        else if (arr[m] > target) r = m - 1;
        else l = m + 1;
    }
    return -1;
}

/**
 * Testing binary search
 */
console.log("\nTesting BinarySearch");
let arr = [-2, 8, 1, 14, 25];
arr.sort((a, b) => a - b);
console.log(arr);
console.log(BinarySearch(arr, 25));
console.log(BinarySearch(arr, 8));
console.log(BinarySearch(arr, 100));

/**
 * This function finds the index of a given element within an array using linear search
 *
 * @param {array} arr - A sorted array of numbers
 * @param {number} target - The target element to be searching for
 * @returns {number} - Index of the element, or -1 if the element doesn't exist
 */
function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

/**
 * Testing linear search
 */
console.log("\nTesting LinearSearch");
arr = [-2, 8, 1, 14, 25];
console.log(arr);
console.log(LinearSearch(arr, 25));
console.log(LinearSearch(arr, 8));
console.log(LinearSearch(arr, 100));
