/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    //while loop to find max then another that finds the min number then subtract them
    let max = -1;
    let min = -1; //for min nothing is lower than 0
    while (n != 0) {
        let temp = n % 10; //strips last character off and holds last value

        if (min == -1) {
            min = temp;
        } else if (temp < min) {
            min = temp;
        }

        if (max == -1) {
            max = temp;
        } else if (temp > max) {
            max = temp;
        }

        n = n / 10; //strips off last character/ keeps shifting last character to right to keep checking
    }
    return (max - min);
};
let result = maxMinusMin(472);
console.log(result);