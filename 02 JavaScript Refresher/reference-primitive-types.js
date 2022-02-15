
// Primitive types
const number = 3;
const number2 = number

// Reference type
const person = {
    name: 'Sebastien',
};

// Pointing person reference in memory. Changes on person object
// will also impact secondPerson object.
const secondPerson = person;

// To make an immutable copy of object instead of pointing
// reference in memory, use spread operator
const thirdPerson = {
    ...person
};

// Arrays and Objects are reference types.