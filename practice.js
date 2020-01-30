var Person = /** @class */ (function () {
    function Person(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
    Person.prototype.describeMe = function () {
        console.log("Your name is " + this.name + " and your cpf is " + this.cpf);
    };
    return Person;
}());
var Company = /** @class */ (function () {
    function Company(cpnj) {
        this.cpnj = cpnj;
    }
    Company.prototype.describeMe = function () {
        console.log("Your cpnj is " + this.cpnj);
    };
    return Company;
}());
var person = new Person('Garotão', 12343223454);
person.describeMe();
var company = new Company(43223546543);
company.describeMe();
