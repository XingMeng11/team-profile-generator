const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    role(){
        console.log("Intern");
    }

    school(){
        console.log(`${this.school}`);
    }
}

module.exports = Intern;