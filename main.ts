class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

let person = new Person("Sultan", 60, "male");

console.log(person);
console.log(person.greet()); 



//    In this example, we will create object using Object.create() method.
let personPrototype = {
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

let person1 = Object.create(personPrototype);
person1.name = "Sultan Ahmed";
person1.age = 50;
person1.gender = "male";

console.log(person1);
console.log(person1.greet());

