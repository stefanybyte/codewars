// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//MY SOLUTION 


function invert(array){
    return array.map(num => {
        return num * -1
    })
}

