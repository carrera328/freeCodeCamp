/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
	// str <= 3 doesn't need to be truncated therefore I can concat "..." without having to worry about its length
	if (str.length <= 3) {
		return str.slice(0,num).concat("...");
	}
	
	// fulfilling the first part of the question while considering the second part
	else if (str.length > num && num > 3) {
		return str.slice(0, num -3).concat("...");
	}

	if (str.length > num && num <= 3) {
		return str.slice(0, num).concat("...");
	}

	// if length of str and num are equal but greater than 3
	return str;
	
}

// Test Cases
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));