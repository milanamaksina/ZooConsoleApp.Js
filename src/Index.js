const { ZooApp } = require('./ZooApp');
const { Zoo } = require('./Entities/Zoo');
const { Enclosure } = require('./Entities/Enclosure');
const { Elephant } = require('./Entities/Animals/Mammal/Elephant');
const { Parrot } = require('./Entities/Animals/Bird/Parrot');
const { ZooKeeper } = require('./Entities/Employees/ZooKeeper');
const { Veterinarian } = require('./Entities/Employees/Veterinarian');


let zooApp = new ZooApp('zooApp1');
let newZoo1 = new Zoo('Madagascar');
let newZoo2 = new Zoo('Bali');
zooApp.AddZoo(newZoo1);
zooApp.AddZoo(newZoo2);

let newEnclosure1 = new Enclosure('Mammal', 500);
let newEnclosure2 = new Enclosure('Pengiun', 10000);

newZoo1.AddEnclosure(newEnclosure1);
newZoo1.AddEnclosure(newEnclosure2);

let parrot1 = new Parrot();
let parrot2 = new Parrot();
let elephant1 = new Elephant();
let elephant2 = new Elephant();

newZoo1.AddAnimal(parrot1);
newZoo1.AddAnimal(parrot2);
newZoo1.AddAnimal(elephant1);
newZoo1.AddAnimal(elephant2);

let zooKeeper = new ZooKeeper("Alex", "ZooKeeper");
let veterinarian = new Veterinarian("Sasha", "Veterinarian");

zooKeeper.AddAnimalExperience(parrot1);
zooKeeper.AddAnimalExperience(elephant1);
veterinarian.AddAnimalExperience(parrot1);
veterinarian.AddAnimalExperience(elephant1);

newZoo1.HireEmployee(veterinarian);
newZoo1.HireEmployee(zooKeeper);

newZoo1.FeedAnimal(12.00);
newZoo1.HealAnimal();