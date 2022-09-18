module.exports.Medicine = class Medicine {
    constructor() {
        if (this.constructor == Medicine) {
            throw new Error("Can't create instance of Medicine abstract class");
        }
    }
};