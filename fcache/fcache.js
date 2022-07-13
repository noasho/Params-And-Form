class FCache {
    constructor() {
        this._memory = [];
    }


    addOne(cat) {
        this._memory.push(cat);
    }

    addMany(cats) {
        this._memory = this._memory.concat([...cats]);
    }

    fetch() {
        return this._memory;
    }

}

module.exports = {
    cache: new FCache()
}