/*
Name: IQ Test
Link: https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
Description: Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers) {
	const arr = numbers.split(" ").filter((char) => char !== " ");

	let evenCount = arr.filter((num) => {
		return num % 2 === 0;
	}).length;

	if (evenCount === arr.length - 1) {
		return (
			arr.findIndex((num, idx) => {
				if (num % 2 !== 0) {
					return idx + 1;
				}
			}) + 1
		);
	} else {
		return (
			arr.findIndex((num, idx) => {
				if (num % 2 === 0) {
					return idx + 1;
				}
			}) + 1
		);
	}
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));
