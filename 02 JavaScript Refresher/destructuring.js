// Destructuring allows to easily extract data from arrays and objects
// and store them in variables

// Array destructuring
[nom, age] = ['Sebastien', 24];
console.log(nom);

const numbers = [1, 2, 3];
// Pulling up first and second number
[num1, num2] = numbers;
console.log(num1, num2);

// Pulling up first and third number
[num1, ,num3] = numbers;
console.log(num1, num3);


// Object destructuring
({nom} = {nom: 'Sebastien', age: 24});
console.log(nom);