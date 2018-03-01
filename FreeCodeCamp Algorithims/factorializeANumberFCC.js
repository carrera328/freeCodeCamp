
function factorialize(num) {
   // check if num is equal to 0 or 1 
   if (num == 0 || num == 1) {
   	return 1;
   }

  // storing the result
  var result = num;
  
  // factorial formula in form of a while loop
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

console.log(factorialize(5));
