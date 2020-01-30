class BasePerson {
    name: string;

    sayMyName(): void {
        console.log(this.name);
    };
}

class RealPerson extends BasePerson {
    constructor(name: string) {
        super();
        this.name = name;
        this.sayMyName();
    };
}

let realPerson: RealPerson = new RealPerson('Pedro');