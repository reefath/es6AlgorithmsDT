/*
Examples for array methods:

concat - join multiple arrays and returns copy of the joined array
every - calls a function for every element of the array until 'false' is returned
some - calls a function for every element of the array until 'true' is returned 
forEach - calls a function for each element of the array
map - Creates a new array with the result of calling the specified function on each element of the array
filter - Creates an array with each element that evaluates to true in the function provided



*/
"use strict";
function concatArray() {
    let arr1=[1,2,3];
    let arr2=[-1,-2,-3];
    let x = {
        a: "hello",
        b :0
    };
    
    let arrConcat = arr2.concat(x, arr1);
    console.log("arrConcat", arrConcat);
}
concatArray();

function isEven(x) {
    console.log(x);
    return((x%2===0)? true: false);
}

function iterator() {
    let even = [0,1,2,3,4,5,6,7,8,9,10];
    
    let result = even.every(isEven);
    console.log("even.every",result); //returns 'false' for '1'
    
    let resultSome = even.some(isEven);
    console.log("even.some", resultSome); //returns 'true' for '0'
    
    even.forEach(x=>{
        console.log(x%2 === 0);
    });
 
    let arrMap = even.map(isEven);
    console.log("even.map", arrMap); 
    
    let arrFilter = even.filter(isEven);
    console.log("even.filter", arrFilter); 
}

iterator();
