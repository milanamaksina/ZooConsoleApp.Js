module.exports.VeterinarianValidator = class VeterinarianValidator{
  constructor() {}
  ValidateEmployee(veterinarian, zoo) {
    return zoo.enclosures.every(
      (enclosure) => enclosure.animals.every((animal) => veterinarian.HasAnimalExperience(animal)),
    )
  }
}

