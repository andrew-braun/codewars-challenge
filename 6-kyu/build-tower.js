/*
Name: Build tower
Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
Description: Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

    Python: return a list;
    JavaScript: returns an Array;
    C#: returns a string[];
    PHP: returns an array;
    C++: returns a vector<string>;
    Haskell: returns a [String];
    Ruby: returns an Array;
    Lua: returns a Table;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

*/

function towerBuilder(nFloors) {
	const tower = [];

	let currentFloor = 1;

	while (currentFloor < nFloors + 1) {
		let numBlocks = currentFloor * 2 - 1;
		let numSpaces = (nFloors * 2 - 1 - numBlocks) / 2;
		tower.push(
			" ".repeat(numSpaces) + "*".repeat(numBlocks) + " ".repeat(numSpaces)
		);
		currentFloor++;
	}
	return tower;
}

console.log(towerBuilder(3));
