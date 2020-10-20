/*
Name: Find the unique number
Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
Description: There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
	for (i = 1; i < arr.length; i++) {
		if (arr[i] === arr[0]) {
			return arr.filter((num) => num !== arr[0])[0];
		} else if (arr[i] === arr[i + 1]) {
			return arr.filter((num) => num !== arr[i])[0];
		}
	}
}

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([0, 1, 0]));
