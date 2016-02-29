/*
code to demonstrate sorting methods in Arrays

*/
"use strict";
//default sorting
function arrSort() {
    let arrSort = [10, 2, 3, 4, 0, 5, 25, 100, 1];
    console.log(arrSort.reverse()); //prints [1, 100, 25, 5, 0, 4, 3, 2, 10]
    console.log(arrSort.sort()); // prints [0, 1, 10, 100, 2, 25, 3, 4, 5]
    
    //sorting in array works lexicographically
    arrSort.sort((a,b)=>{
        return (a-b);
    })
    
    console.log("arrSort ", arrSort);

}

arrSort();

//sort with custom logic
function customSorting() {
    let person = [
        {
            name: "Mike",
            age: 30,
        },
        {
            name: "Angelia",
            age: 20,
        },
        {
            name: "Sania",
            age: 25,
        }
    ];
    
    person.sort(ageCompare);
    console.log(person);
    
}

function ageCompare(a ,b ) {
    if(a.age < b.age) {
        return -1;
    }
    
    if(a.age > b.age) {
        return 1;
    }
    
    return 0;
    
}

customSorting();

//Sort strings
function sortStrings() {
    let strArr =[' Ana', 'ana', 'john', 'John'];
 
    console.log(strArr.sort()); //prints [" Ana", "John", "ana", "john"] because of the ASCII 
     strArr.sort( function( a, b){ 
         if (a.toLowerCase() < b.toLowerCase()){ return -1 } 
         if (a.toLowerCase() > b.toLowerCase()){ return 1 } 
         return 0; });


    console.log(strArr);
}

sortStrings();