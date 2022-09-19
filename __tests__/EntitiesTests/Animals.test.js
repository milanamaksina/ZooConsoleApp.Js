const { Animal } = require("../../src/Entities/Animals/Animal");


test("Should not be able to create instance of Animal", () => {
    expect(() => {
        let animal = new Animal();
    }).toThrow("Can't create an instance of Animal abstract class");
});