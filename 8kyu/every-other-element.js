// Write a funciton that removes evrey other element in an array

//MY SOLUTION

function everyOtherElement(arr){
    return arr.filter((_, index) => index % 2 === 0);
}