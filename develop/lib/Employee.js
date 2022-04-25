class Employee {
    constructor(name, id, email) {
        this.name= name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
    }
}

module.exports = Employee;