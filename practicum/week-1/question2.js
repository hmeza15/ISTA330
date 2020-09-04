
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
     //added all numbers in array then added with extra cookies = total amt cookies
     //mod % to get remainder and if remainder=0 no extra cookies
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
                      if (extraCookies != 0) {
                              return false;
                      }
                      cookies[index] += diff;
                      extraCookies -= diff;
                      
                }
        }
        return true;
 };
