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
    // It means I can only access this attribute from inside this class.
    // if I define the var like cnpj: number; then I can access from outside.
    private cnpj: number;

    constructor(cnpj: number) {
        this.cnpj = cnpj;

    }

    describeMe(): void {
        console.log(`Your cnpj is ${this.cnpj}`)
    }
}

let person: Person = new Person('Garotão', 12343223454);
person.describeMe();

let company: Company = new Company(43223546543)
company.describeMe();