module.exports.Employee = class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        if (this.constructor === Employee) {
            throw new Error("Can't create an instance of Employee abstract class");
        }
    }
};