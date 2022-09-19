const { Parrot } = require("../../src/Entities/Animals/Bird/Parrot")
const { Veterinarian } = require("../../src/Entities/Employees/Veterinarian");
const { ZooKeeper } = require("../../src/Entities/Employees/ZooKeeper")
const {Zoo} = require("../../src/Entities/Zoo")

test('Should be able to add animal experience to veterinarian', () => {
    let veterinarian = new Veterinarian();
    veterinarian.AddAnimalExperience(new Parrot())
    expect(veterinarian.animalExperience).toContain('Parrot')
})

test('Should check if veterinarian has expirience with animal', () => {
    let veterinarian = new Veterinarian();
    veterinarian.AddAnimalExperience(new Parrot())
    expect(veterinarian.HasAnimalExperience(new Parrot())).toBeTruthy();
})

test('Should be able to heal animals', () => {
    let veterinarian = new Veterinarian();
    let parrot = new Parrot();
    parrot.IsSick == true;
    veterinarian.AddAnimalExperience(parrot)
    veterinarian.HealAnimal(parrot)
    expect(parrot.IsSick == false);
})

test('Should be able to add animal experience to zooKeeper', () => {
    let zooKeeper = new ZooKeeper();
    zooKeeper.AddAnimalExperience(new Parrot())
    expect(zooKeeper.animalExperience).toContain('Parrot')
})

test('Should check if zooKeeper has expirience with animal', () => {
    let zooKeeper = new ZooKeeper();
    zooKeeper.AddAnimalExperience(new Parrot())
    expect(zooKeeper.HasAnimalExperience(new Parrot())).toBeTruthy();
})
