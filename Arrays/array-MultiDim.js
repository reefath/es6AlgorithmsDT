/*
code to demonstrate multi - dimensional arrays
JS do not support multi dimensional arrays by default.

We use arrays of arrays
*/
"use strict";
function multiDim() {
let arrMulti = [];
    arrMulti[0]= [72,78,79,80,60];
    arrMulti[1]= [1,2,3,4,5];
    
    
    for(let x=0; x<arrMulti[0].length; x++) {
        for(let y=0; y<arrMulti[1].length; y++) {
            console.log(arrMulti[x][y]);
        }
    
    }

}

multiDim();