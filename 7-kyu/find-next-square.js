/*
Name: Find the next perfect square!
Link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.
Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/

function findNextSquare(sq) {
	// Return the next square if sq is a perfect square, -1 otherwise
	return Math.floor(Math.sqrt(sq)) === Math.sqrt(sq)
		? Math.pow(Math.sqrt(sq) + 1, 2)
		: -1;
}

console.log(findNextSquare(4));
console.log(findNextSquare(5));
