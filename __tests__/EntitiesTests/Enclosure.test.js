const {Enclosure} = require("../../src/Entities/Enclosure")
const { Parrot } = require("../../src/Entities/Animals/Bird/Parrot")

test("Should be able to add animal to enclosure", () => {
    let enclosure = new Enclosure("enclosure1", 1000);
    let parrot = new Parrot();
    enclosure.AddAnimal(parrot);
    expect(() => {
        enclosure.animals.includes(parrot).toBeTruthy()
    })
});