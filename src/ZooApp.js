module.exports.ZooApp = class ZooApp {
    constructor(name) {
      this.zoos = [];
      this.name = name;
      console.log(`Created Zoo App ${this.name}.`);
    }
    AddZoo(zoo) {
      this.zoos.push(zoo);
      console.log("New zoo was added");
    }
};