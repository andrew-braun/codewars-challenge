/* 
Challenge: Vowel Count 
Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript 
Description: Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

const vowelCount = (str) => {
	const vowels = ["a", "e", "i", "o", "u"];

	return str
		.toLowerCase()
		.split("")
		.reduce( (vowelCount, currentChar) => {
			(vowels.includes(currentChar)) ? vowelCount++ : null;
            return vowelCount
		}, 0);
};

console.log(vowelCount("Hi there!")); // 3