var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, ".");
    };
    return Person;
}());
var person = new Person("Sultan", 60, "male");
console.log(person);
console.log(person.greet());
var personPrototype = {
    greet: function () {
        return "Hello, my name is ".concat(this.name, ".");
    }
};
var person1 = Object.create(personPrototype);
person1.name = "Sultan Ahmed";
person1.age = 50;
person1.gender = "male";
console.log(person1);
console.log(person1.greet());
