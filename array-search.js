/*
Searching in the array
indexOf - returns the index of the first element macth in the array
lastIndexOf - returns the index of the last element macth in the array

ES6- new functions

*/
"use strict";
function search() {
    let arr = [0,1,2,3,4,5,16,7,8,9,10,16];
    
    console.log(arr.indexOf(6)); //returns -1 if value not available
    console.log(arr.indexOf(16)); //returns '6' index of '16
    console.log(arr.lastIndexOf(16)); //returns '11' the second index of '16'
    
}
search();

function searchES6() {
    let arr = [0,1,2,3,4,5,16,7,8,9,10,16];
    
    console.log(arr.find(n=>n>9)); //prints 16
    console.log(arr.findIndex(n=>n>9)); //prints '6' the index of '16'

}

searchES6();