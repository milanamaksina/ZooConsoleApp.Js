const { ZooKeeper } = require("../../src/Entities/Employees/ZooKeeper")
const {Zoo} = require("../../src/Entities/Zoo");
const { Parrot } = require("../../src/Entities/Animals/Bird/Parrot");

test('Should be able to hire employee', () => {
    let zooKeeper =  new ZooKeeper("Alex", "Jonson")
    zooKeeper.AddAnimalExperience(new Parrot())
    let zoo = new Zoo()

    zoo.HireEmployee(zooKeeper)
    expect(`${zooKeeper.constructor.name} ${zooKeeper.FirstName} was hired`)
})
