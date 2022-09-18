const { ZooApp } = require('./ZooApp');
const { Zoo } = require('./Entities/Zoo');
const { Enclosure } = require('./Entities/Enclosure');
const { Elephant } = require('./Entities/Animals/Mammal/Elephant');
const { Penguin } = require('./Entities/Animals/Bird/Penguin');


let zooApp = new ZooApp('zooApp1');
let newZoo1 = new Zoo('Madagascar');
let newZoo2 = new Zoo('Bali');
zooApp.AddZoo(newZoo1);
zooApp.AddZoo(newZoo2);

let newEnclosure1 = new Enclosure('Mammal', 500);
let newEnclosure2 = new Enclosure('Pengiun', 10000);

newZoo1.AddEnclosure(newEnclosure1);
newZoo1.AddEnclosure(newEnclosure2);

let penguin1 = new Penguin();
let penguin2 = new Penguin();
let elephant1 = new Elephant();
let elephant2 = new Elephant();

newZoo1.AddAnimal(penguin1);
newZoo1.AddAnimal(penguin2);
newZoo1.AddAnimal(elephant1);
newZoo1.AddAnimal(elephant2);

newZoo1.FindAvailableEnclosure(penguin1);
newEnclosure2.AddAnimal(penguin1);