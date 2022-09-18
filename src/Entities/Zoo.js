const { Enclosure } = require("./Enclosure");

module.exports.Zoo = class Zoo {
    constructor(location) {
        this.enclosures = [];
        this.employees = [];
        this.location = location;
    }
    AddEnclosure(name, squareFeet) {
        const enclosule = new Enclosure(name, squareFeet, this)
        this.enclosures.push(enclosule)
        console.log(`Add new enclosure "${name}" to "${this.location}" zoo`)
      }
    }
