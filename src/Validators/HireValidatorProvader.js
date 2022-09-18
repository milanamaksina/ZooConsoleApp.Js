const { ZooKeeperValidator } = require("./ZooKeeperValidator.js");
const { VeterinarianValidator } = require("./VeterinarianValidator.js");

module.exports.HireValidatorProvader = class HireValidatorProvader {
    constructor() {}
    ValidateEmployee(employee, zoo) {
        if (employee.constructor.name === "ZooKeeper") {
            let validator = new ZooKeeperValidator();
            validator.ValidateEmployee(employee, zoo);
        }
        if (employee.constructor.name === "Veterinarian") {
            let validator = new VeterinarianValidator();
            validator.ValidateEmployee(employee, zoo);
        }
        else{
            console.log("invalid employee")
            return false
        }
        return true;
    }
}