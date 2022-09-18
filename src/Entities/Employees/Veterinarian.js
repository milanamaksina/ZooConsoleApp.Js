const { Employee } = require("./Employee.js");

module.exports.Veterinarian = class Veterinarian extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.animalExperience = [];
    }
}