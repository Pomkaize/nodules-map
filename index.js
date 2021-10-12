class NodulesMap {
    constructor() {
        this.map = new Map();
    }
    add(factory) {
        return this;
    }
    get(path) {
        return this.map.get(path);
    }
    _add(path, factory) {
        this.map.set(path, factory);

        return this;
    }
}

module.exports = {
    NodulesMap
}
