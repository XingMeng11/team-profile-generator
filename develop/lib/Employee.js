class Employee {
    constructor(id, email, officenumber, github, school) {
        this.id = id;
        this.email = email;
        this.officenumber = officenumber;
        this.github = github;
        this.school = school;
    }

    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
        console.log(`Office number: ${this.officenumber}`);
        console.log(`Github: ${this.github}`);
        console.log(`School: ${this.school}`);
    }
}

module.exports = Employee;