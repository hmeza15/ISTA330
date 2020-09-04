/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/
//whatever the value is in shuffIndices is the index in the string input
//'hello' is ['h', 'e', 'l', 'l', 'o']
var suffleString = function(input, shuffleIndices) {
    let string = ""
    for (let i = 0; i < shuffleIndices.length; i++) {
        string = string + input[shuffleIndices[i]]; //string + input[2] (shuffleindices value at index 0)
                                                    //string + 'h' (input value at index 2)
    }
    return string;
};