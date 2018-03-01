function perfectDivisor(numOne, numTwo) {
	var large, small;
	if (numOne > numTwo) {
		large = numOne;
		small = numTwo;
	} else {
		large = numOne;
		small = numTwo;
	}

	if ( large % small != 0) {
		console.log("Larger number is not perfectly divisible by 0");
	} else {
		console.log("Larger number IS perfectly divisible by 0");
	}

}

console.log(perfectDivisor(8,3));