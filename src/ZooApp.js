const { Zoo } = require("./Entities/Zoo.js");
const { Parrot } = require("./Entities/Animals/Bird/Parrot");
const { Enclosure } = require("./Entities/Enclosure.js");

const zoo = new Zoo("Madagaskar");

zoo.AddEnclosure("number1", 20000);
const rrot = new Parrot();
zoo.FindAvailableEnclosure(rrot);