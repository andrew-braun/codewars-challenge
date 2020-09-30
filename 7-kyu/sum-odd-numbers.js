/*
Name: Sum of odd numbers
Link: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
Description: Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
rowSumOddNumbers(2); // 7 + 9 + 11 = 27
rowSumOddNumbers(2); // 13 + 15 + 17 + 19 = 64

*/

function rowSumOddNumbers(n) {
   return Math.pow(n, 3)
}

console.log(rowSumOddNumbers(3))