// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//MY SOLUTION

function repeatString(n,s){
    let str = '';
    for (let i = 0; i < n; i++){
        str += s;
    }
    return str;
}
