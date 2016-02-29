/*
Add - how to add elements to the beginning / end / from any index  of the array?

push - adds to the end of the array
unshift - adds to the beginning of the array
splice (startIndex, removeNoOfElements, addelement1, addelement2) - adds elemnts from the startIIndex

Remove - how to remove elements from beginning / end / from any index array?

*/
"use strict";
function addOperation() {
    let arr = [-2,-1,0,1,2];
    
    arr.push(3);
    console.log(arr); // prints [-2, -1, 0, 1, 2, 3]
    
    arr.push(4, 5);
    console.log(arr); // prints [-2, -1, 0, 1, 2, 3, 4, 5]
    
    arr.unshift(-3);
    console.log(arr); // prints [-3, -2, -1, 0, 1, 2, 3, 4, 5]
    
    arr.unshift(-5 ,-4);
    console.log(arr); // prints [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    
    arr.splice(5, 0, 12,13);
    console.log(arr); // prints [-5, -4, -3, -2, -1, 12, 13, 0, 1, 2, 3, 4, 5]
}

//addOperation();

function removeOperation() {
    let arr1 = [-2,-1,0,1,2 ,3, 4,5];
    
    arr1.pop();
    console.log(arr1); // prints [-2, -1, 0, 1, 2, 3, 4]
    
    arr1.shift();
    console.log(arr1); // prints [ -1, 0, 1, 2, 3, 4]
    
    arr1.splice(1, 2);
    console.log(arr1); // prints [-1, 2, 3, 4]
    
    let arrSlice = arr1.slice(-2); //slices last 2 elements of the array
    console.log(arrSlice); //prints [3, 4]
    
    let arrSlice1 = arr1.slice(1, 3); //slices elements indexed '1, 2'
    console.log(arrSlice1); // prints [ 2, 3]
}

removeOperation();