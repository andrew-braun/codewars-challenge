/* 
Name: Extract the domain name from a URL
Link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
Descripiton: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"


*/

function domainName(url) {
	// let domainName = url;
	//     if (url.includes("//")) {
	//         domainName = domainName.replace(/(.+?\/\/)/, "")
	//     }
	//     if (url.includes("www.")) {

	//     }
	return url
		.replace(/(.+?\/\/)/, "")
		.replace(/^(.*?)www\./, "")
		.replace(/(\.(.+))/, "");
}

console.log(domainName("http://google.com"));
console.log(domainName("https://www.github.com"));
