export default function validateVeterinarian(veterinarian, zoo) {
    return zoo.enclosures.every(
      (enclosure) => enclosure.animals.every((animal) => veterinarian.HasAnimalExperience(animal)),
    )
}