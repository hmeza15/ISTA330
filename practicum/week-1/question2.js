
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 11
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
     //return false if remainder doesnt equal 0 then we can't have equal cookies for everyone
        let max = 0;
        let index = 0;
        while (index < cookies.length) {
                if (cookies[index] > max) {
                        max = cookies[index];
                }
                index++;
        } //end while loop; gets max
        for (index = 0; index < cookies.length ; index++) {
                if (cookies[index] < max) {
                      let diff = max - cookies[index];
                      if (diff > extraCookies) {
                              return false;
                      }
                      cookies[index] += diff;
                      extraCookies -= diff;
                      
                }
        }
        if (extraCookies > 0) {
                for (index = 0; index < cookies.length; index++) {
                        cookies[index] += 1;
                        extraCookies -= 1;
                        if (extraCookies == 0){
                                break;
                        }
                }

        }
        if (extraCookies == 0) {
                for (index = 0; (index + 1) < cookies.length; index++){
                        if (cookies[index] != cookies[index + 1]) {
                                return false;
                        }
                }
        }
        return true;
 };
let result = canGetEqualCookies([3,5,2], 6);
console.log(result)
 /*let hasequalnumbers = function(input){
        //for(let index = 0; (index + 1) < input.length; index++) {
                //if (input[index] != input[index + 1]) {
                      //  return false;
                //}
        //}
        return true;
 };
 let result = hasequalnumbers([1 ,1, 1]);
 console.log(result) */