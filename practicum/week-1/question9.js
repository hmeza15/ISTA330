/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/
//whatever the value is in shuffIndices is the index in the string input
//'hello' is ['h', 'e', 'l', 'l', 'o'] - its an array
var suffleString = function(input, shuffleIndices) {
    //sort and remove smallest value from shuffleIndices into temparray
    //look through array find smallest value then save into empty array
    let string = "";
    while (string.length < input.length) { //shrinking array/deleting every min to find new min
        let pos = 0; //saving position inside shuffleIndices that had the lowest value
        let min = shuffleIndices[0]; //holding minimum in shuffleIndices
            for (let i = 1; i < shuffleIndices.length; i++) {
                if (min == -1) { //disregard each letter at a time
                    min = shuffleIndices[i];
                    pos = i;
                }
                if (shuffleIndices[i] < min && shuffleIndices[i] != -1) { 
                    min = shuffleIndices[i]; //temp = i saving position of the minimum value
                    pos = i;
                }
            }
        string = string + input[pos];
        shuffleIndices[pos] = -1;
    }
    return string;
};
//let result = suffleString('emelwco', [1, 5, 6, 2, 0, 3, 4]);
//console.log(result);
//let result2 = suffleString('llheo', [2, 3, 0, 1, 4]);
//console.log(result2);