/*
Name: Isograms
Link:
Description: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
	const arr = str.toLowerCase().split("");
	for (char of arr) {
		if (arr.filter((filterChar) => filterChar === char).length > 1) {
			return false;
		}
	}
	return true;
}

console.log(isIsogram("isogram"));
