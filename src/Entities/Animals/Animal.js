const { FeedTime } = require("./FeedTime.js");

module.exports.Animal = class Animal {
    constructor() {
        this.requiredSpaceSqFt;
        this.favoriteFood;
        this.feedTimes = [];
        this.feedSchedule = [];
        this.friends = [];
        this.isSick = false;
        if (this.constructor == Animal) {
            throw new Error("Can't create an instance of Animal abstract class");
        }
    }
    IsFriendlyWith(animal) {
        return this.friends.includes(animal.constructor.name);
    }
}