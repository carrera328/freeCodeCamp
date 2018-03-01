
function sumAll(arr) {
    console.log(Math.max.apply(null, arr));
    console.log(Math.min.apply(null, arr));
    var count=0;
    for (var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++){
      
      count += i;
    }
    console.log(count);
  }
  
  sumAll([1, 4]);
  