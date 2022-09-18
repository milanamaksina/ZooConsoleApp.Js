const { ZooKeeperValidator } = require("./ZooKeeperValidator.js");
const { VeterinarianValidator } = require("./VeterinarianValidator.js");

export default function ValidateEmployee(employee, zoo) {
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