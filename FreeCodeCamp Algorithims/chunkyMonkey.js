/*
Write a function that splits an array (first argument) into groups
 the length of size 
(second argument) and returns them as a two-dimensional array.
*/





function chunkArrayInGroups(arr, size) {
	var newArray = [];
	var count = 0;
	while (count < arr.length) {
		newArray.push(arr.slice(count, count + size));
		count+= size;
	}
	
	return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));