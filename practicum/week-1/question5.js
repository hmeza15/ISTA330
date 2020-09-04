/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
    //if/else statements
    //while loop while n (parameter) != 0
    //divide by 4: make sure its divisible by 4 so do mod (1st if statement) 
    //3 is same as for just with 3
    //else (if none of above) subtract one from it
    //created variable outside of while loop var num=0 then in while loop num++ then return num++
    let num = 0;    
    while (n > 0) {
        if (n % 4 == 0) {
            n = n / 4;
            num++;
        }
        else if (n % 3 == 0) {
            n = n / 3;
            num++;
        }
        else {
            n = n - 1;
            num++;
        }
    }
    return num;
};
//var result = minimalReduction(12);
//console.log(result);