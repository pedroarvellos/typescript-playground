interface Base {
    describeMe(): void;
}

class Person implements Base {
    name: string;
    cpf: number;

    constructor(name?: string, cpf?: number) {
        this.name = name;
        this.cpf = cpf;

    }

    describeMe(): void {
        console.log(`Your name is ${this.name} and your cpf is ${this.cpf}`)
    }
}

class Company implements Base {
    cpnj: number;

    constructor(cpnj: number) {
        this.cpnj = cpnj;

    }

    describeMe(): void {
        console.log(`Your cpnj is ${this.cpnj}`)
    }
}

let person: Person = new Person('Garotão', 12343223454);
person.describeMe();

let company: Company = new Company(43223546543)
company.describeMe();