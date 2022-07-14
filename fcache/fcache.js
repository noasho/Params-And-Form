class FCache {
    constructor() {
        this._memory = [];
    }


    addOne(dog) {
        this._memory.push(dog);
    }

    addMany(dogs) {
        this._memory = this._memory.concat([...dogs]);
    }

    getAll() {
        return this._memory;
    }

}

module.exports = {
    cache: new FCache()
}