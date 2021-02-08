export class Person {
    name: string;
    lastName: string;

    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
    }

    toString(): string {
        return `${this.name} ${this.lastName}`;
    }
}
