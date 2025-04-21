// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, et cetera).

//MYY SOLUTION

function getSize(w,h,d){
    var area = (2*d*h) + (2*w*h) + (2*d*w);
    var volume = d*w*h;
    return [area,volume];
  }