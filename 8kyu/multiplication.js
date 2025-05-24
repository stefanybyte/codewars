// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//MY SOLUTION

//if else
function simpleMultiplication(num){
    if(num % 2 === 0){
        return num * 8
    }else{
        return num * 9
    }
}

//ternery operator
function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }