// Add up the Numbers from a Single Number

function sumOfTheNthNum(num){
    //base case
    if(num===1) return 1;

    return num + sumOfTheNthNum(num-1);
}
/* 
console.log("sum of the num", sumOfTheNthNum(4))
console.log("sum of the num", sumOfTheNthNum(13))
console.log("sum of the num", sumOfTheNthNum(600)) */


/* 
nth numberr square
4 = 1+4+9+16
*/
function sumOfSquareOfNth(num){
    if(num===1) return 1;

    return num**2 + sumOfSquareOfNth(num-1)
}

// console.log(sumOfSquareOfNth(2));
// console.log(sumOfSquareOfNth(4));
// console.log(sumOfSquareOfNth(5));
// console.log(sumOfSquareOfNth(10));

// Recursion to Repeat a String n Number of Times

function repetition(str, n){
    if(n===1) return str;

    return str+repetition(str, n-1);
}
// console.log(repetition('ab', 3))
// console.log(repetition('kiwi', 1))
// console.log(repetition('cherry', 2))

// Factorials

function factorial(n){
    if(n===1) return 1;
     if(n===0) return 1;

    return n*factorial(n-1);
}
// console.log(factorial(5))
// console.log(factorial(3))
// console.log(factorial(1))
// console.log(factorial(0))

function factorial2(n){
    if(n===0) return 1;
    return n* factorial(n-1);
}

// console.log(factorial2(3))
// console.log(factorial2(5))
// console.log(factorial2(9))

// Sum of Multiplication

function multiSum(n, m){
    if(n===1) return m*1;

    return m*n+ multiSum(n-1, m);
}
// console.log(multiSum(10, 1));
// console.log(multiSum(10, 6));
// console.log(multiSum(10, 10));
// console.log(multiSum(10, 8));
// console.log(multiSum(10, 2));

// Sum of the Items in an Array

function arraySum(arr){
    if(arr.length===0) return 0;
    return arr[0] + arraySum(arr?.slice(1));
}

console.log(arraySum([1, [2, [1]], 3]));