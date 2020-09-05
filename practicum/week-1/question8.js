/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let array = [];
    let i = 0;
    for (let i = 0; i < input.length; i++) {
        let num = 0;
        for (let j = 0; j < input.length; j++) {
            if (input[j] != input[i] && input[j] % 2 == 0 && input[j] > input[i] ) {
                num += 1;
            }
        }
        array.push(num);
    }
    return array;
};
//let result = biggerAndEven([23, 44, 12, 4]);
//console.log(result)