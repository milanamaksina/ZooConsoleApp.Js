const { Parrot } = require("../../src/Entities/Animals/Bird/Parrot");
const { Veterinarian } = require("../../src/Entities/Employees/Veterinarian");
const { Enclosure } = require("../../src/Entities/Enclosure");
const { Zoo } = require("../../src/Entities/Zoo");

test("Should be able to add enclosure to Zoo", () => {
    let zoo = new Zoo();
    let enclosure1 = new Enclosure("enclosure1", 1000);

    zoo.AddEnclosure(enclosure1);
    expect(() => {
        (zoo.enclosures).toContain(enclosure1)
    })
});
test('Should be able to add animal to available enclosure', () => {
    let zoo = new Zoo();
    let parrot = new Parrot();
    let enclosure1 = new Enclosure('enclosure1', 1000);
    let availableEnclosure = zoo.FindAvailableEnclosure(parrot)
    expect(availableEnclosure.name).toEqual('enclosure1')
    zoo.AddAnimal(parrot)
    expect((zoo.enclosures.animals.constructor.name).toContain(parrot))
})

test('Should be able to hire employee', () => {
    let zoo = new Zoo();
    let veterinarian = new Veterinarian();
    let parrot = new Parrot();

    veterinarian.AddAnimalExperience(parrot)
    zoo.HireEmployee(veterinarian)
    expect(zoo.employees).toContain(veterinarian)
})

test('Should not to be able to hire employee without experience', () => {
    let zoo = new Zoo();
    const vet = new Veterinarian()
    expect(() => {
        zoo.HireEmployee(vet)
    }).toThrow("Employee wasn't hired");
})

