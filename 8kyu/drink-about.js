
// KidTeens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"s drink toddy.


//MY SOLUTION

function peopleWithAgeDrink(old) {
    if(old < 14) return 'drink toddy';
    if(old < 18) return 'drink coke';
    if(old < 21) return 'drink beer';
    return 'drink whisky';
  };