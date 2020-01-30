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
        // For example, if the sayMyName method were private
        // I could only access its value inside the BasePerson class.
        this.sayMyName();
    };
}

let realPerson: RealPerson = new RealPerson('Pedro');