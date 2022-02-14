// Creating a class
class Person {
    constructor(){
        this.name = 'Sebastien'
    }
    // Method
    printMyName() {
        console.log(this.name);
    }
}

// Using a class

// Creating new class object
const newPersonn = new Person();

// Calling method on class
newPersonn.printMyName();

// Using class object property
console.log(newPersonn.name);

// Inheritance
class Child extends Person {
    constructor(){
        super()
        this.age = 12
        
    }

    printAgeAndName() {
        console.log('I\'m ' + this.age + ' years old');
    }
}

const newChild = new Child();

newChild.printAgeAndName();
newChild.printMyName();