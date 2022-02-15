// The spread operator (...) is used to split up array elements OR object properties into individual arguments.
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};

// The rest operator (...) is used to merge a list of function arguments into an array
function sortArgs (...args){
    return args.sort();
}

// Spred operator example
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);