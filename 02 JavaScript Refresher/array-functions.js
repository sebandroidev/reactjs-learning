const numbers = [1, 2, 3];

// map function takes a function (arrow or normal) as parameter
// allows to execute an instruction on every array element
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});
