class NodulesMap {
    constructor() {
        this.map = new Map();
    }
    add(factory) {
        return this;
    }
    _add(path, factory) {
        this.map.set(path, factory);

        return this;
    }
}

module.exports = {
    NodulesMap
}
