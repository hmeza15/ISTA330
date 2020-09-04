/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    //nested for loop
    //for each index for starting at 4 then second for loop is going through the rest
    //second loop for (i+1) ; first for loop set at 0 index
    //in ordered pair 1st one has to be less than 2nd and same with indexes
    //return total number of ordered pairs
    //taking input array and making as many ordered pairs as it can following restrictions
    //3,5,2,8
    let numpairs = 0;
    for (let i = 0; i < input.length ; i++) {
        for (let j = i+1; j < input.length; j++) {
            if (input[i] < input[j]) {
                numpairs = numpairs + 1;
            }
        }
    }
    return numpairs;
};