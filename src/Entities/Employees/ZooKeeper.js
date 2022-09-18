const { Employee } = require("./Employee.js");

module.exports.ZooKeeper = class ZooKeeper extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.animalExperience = [];
    }
}