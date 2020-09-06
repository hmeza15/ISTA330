/*
Given an integer n, return difference between the maximum and the minimum of its digits.

Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    //while loop to find max then another that finds the min number then subtract them
    let modnum = 10;
    let max = -1;
    let min = -1; //for min nothing is lower than 0
    //console.log(.472 / 10)
    //console.log(.472 % 10)
    while (n % modnum > 1) {
        let temp = n % modnum; //strips last character off and holds last value
        //console.log(temp);
        //console.log(n);
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
       // console.log(max);
        //console.log(min);
        n = n / 10; 
        n = ~~n; //strips remainder without using Math.floor
    }
    return (max - min);
};
let result = maxMinusMin(472);
console.log(result);