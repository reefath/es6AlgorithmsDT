/*
Code to demonstrate creation and basic operations of an array
Print first 20 elements of the fibonnaci series
0,1,1,2,3,5,8 .....
*/
"use strict";
function fibonnaci() {
    let arr= [];
    arr[0] = 0;
    arr[1] = 1;
    
    for(let i = 2; i < 20; i ++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    for (let x = 0; x < arr.length; x ++) {
        console.log("fibonacci elements - " + x + " is " + arr[x] );
    }
}

//fibonnaci();

/*
    ES6 features to create an array
*/
function arraysES6() {
    let es6Arr = Array.of(2);
    console.log(es6Arr); // returns [2]
    console.log(es6Arr.length); //returns length as '2'
    
    //solving es5 problem of creating arrays
    var es5Arr = new Array(2);
    console.log("demonstrating es5 problem", es5Arr); //returns an empty array
    console.log(es5Arr.length); //returns '2'
    
}

arraysES6();

/*
ES6 features to create array from array-like elements
In es5 - To create an array from arrayl like elements like arguments, we have to write the below code or use slice method
*/

//ES5 - Method 1- copy to an array manually
function nonArrayToArrayEs5(arrayLike) {
    var res = [];
    
    for(var i=0; i< arrayLike.length; i++) {
        res.push(arrayLike[i]);
    }
    
    return res;
}

//ES5 - Method 2 - this is a hack solution
function nonArrayToArrayEs5_slice(arrayLike) {
    return Array.prototype.slice.call(arrayLike);    
}

//ES6 solution - Array.from
function nonArrayToArrayEs6(arrayLike) {
    return Array.from(arrayLike);
}

function doSomething() {
    var args = nonArrayToArrayEs5(arguments);
    var arg_slice = nonArrayToArrayEs5_slice(arguments);
    var arg_arrayFrom = nonArrayToArrayEs5_slice(arguments);

    console.log("ES5 method 1", args); // prints [1,2,3,4]
    console.log("ES5 method 2", arg_slice);// prints [1,2,3,4]
    console.log("ES6 Array.from", arg_arrayFrom);// prints [1,2,3,4]
}

doSomething(1,2,3,4);





