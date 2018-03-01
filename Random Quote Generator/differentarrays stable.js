function diffArray(arr1, arr2) {
    var newArr = [];
    
    if (arr1.length > arr2.length) {
        for (var i = 0; i < arr2.length; i++) {
            if (arr2.indexOf(arr1[i]) == -1) {
                newArr.push(arr1[i]);
            }
        }
    } else
    if (arr2.length > arr1.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                newArr.push(arr2[i]);
            }
        }
    } else 
    if (arr1.length === arr2.length) {
        for (var i = 0; i < arr2.length; i++) {
            if (arr2.indexOf(arr1[i]) == -1) {

                newArr.push(arr1[i]);
            }
        }
        for (var i = 0; i < arr1.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                
                newArr.push(arr2[i]);
            }
        }

    }

    return newArr;
}

//  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
/*diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/