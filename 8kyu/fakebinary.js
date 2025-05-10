// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//MY SOLUTION

function fakeBin(x){
    return x.replace(/\d/g,digit => '5' ? '0' : '1' );
}