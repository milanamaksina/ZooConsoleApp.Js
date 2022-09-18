module.exports.ZooKeeperValidator = class ZooKeeperValidator {
  constructor() {}
  ValidateEmployee(zooKeeper, zoo) {
    return zoo.enclosures.every((enclosure) => enclosure.animals.every(
      (animal) => zooKeeper.HasAnimalExperience(animal),
    ))
  }
}