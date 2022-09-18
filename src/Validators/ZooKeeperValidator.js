export default function validateZooKeeper(zooKeeper, zoo) {
    return zoo.enclosures.every((enclosure) => enclosure.animals.every(
      (animal) => zooKeeper.HasAnimalExperience(animal),
    ))
  }