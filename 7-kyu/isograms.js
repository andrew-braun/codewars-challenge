/*
Name: Isograms
Link:
Description: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
	const charSet = new Set(str.toLowerCase());
	return charSet.size === str.length;
}

console.log(isIsogram("isogram"));
console.log(isIsogram("beer"));

/**
 * ! Original solution, O(n^2); complex compared to better O(n) above
 * */

function isIsogramFilter(str) {
	const arr = str.toLowerCase().split("");
	for (char of arr) {
		if (arr.filter((filterChar) => filterChar === char).length > 1) {
			return false;
		}
	}
	return true;
}

console.log(isIsogramFilter("isogram"));
console.log(isIsogramFilter("beer"));
