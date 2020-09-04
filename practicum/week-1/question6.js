/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    //assume its sorted
    //if even-take two middle ones add them then divide by 2
    //sort array to its in order
    //check if even
    //if even made variable that makes length/divides by 2 would take second middle number in even array
    //take that index-1 then take those two middle ones add them divide by 2
    //if odd array subtract one of length/divide by 2 since index start at 0
    let index = 0;
    if (input.length % 2 == 0) {
        index = input.length / 2;
        let f = input[index];
        let s = input[index - 1];
        return ((s + f)/2);
    }
    else {
        index = input.length / 2;
        return input[index];
    }
};