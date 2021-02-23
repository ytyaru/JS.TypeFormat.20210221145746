class NumberFormat {
    static #formatBase10 = '[\-]?([0-9]{1}|[1-9][0-9]+)'
    static #formatBase8 = '0o[0-7]+'
    static #formatBase2 = '0b[01]+'
    static #formatBase16 = '0x[0-9a-fA-F]+'
    static #formatBase32 = '0v[0-9a-vA-V]+'
    static #formatBase36 = '0z[0-9a-zA-Z]+'
    static #formatFloat = `${this.#formatBase10}?\\.[0-9]+`
    static #formatBigInt = '[0-9]+n'
    static #regexpBase10 = new RegExp(`^${this.#formatBase10}$`);
    static #regexpBase2 = new RegExp(`^${this.#formatBase2}$`);
    static #regexpBase8 = new RegExp(`^${this.#formatBase8}$`);
    static #regexpBase16 = new RegExp(`^${this.#formatBase16}$`);
    static #regexpBase32 = new RegExp(`^${this.#formatBase32}$`);
    static #regexpBase36 = new RegExp(`^${this.#formatBase36}$`);
    static #regexpBase64 = new RegExp(`^${this.#formatBase64}$`);
    static #regexpFloat = new RegExp(`^${this.#formatFloat}$`);
    static #regexpBigInt = new RegExp(`^${this.#formatBigInt}$`);
    static typeof(value) { // value:string
        if (this.isMatch(value)) {
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; } // number
            else { return 'bigint'; }
        } else if (FloatFormat.isMatch(value)) { return 'float'; } // number
    }
    static isMatch(value) { // value:string
        const base = this.getBase(value);
        if (undefined === base) { return false; }
        if (Number.isSafeInteger(parseInt(value))) { return true; }
        return false;
    }
    static toType(value) { // value:string
        return parseInt(value) || parseFloat(value);
    }
    static getBase(value) { // value:string 基数を返す
        if (value.match(this.#regexpBase2)) { return 2; }
        else if (value.match(this.#regexpBase8)) { return 8; }
        else if (value.match(this.#regexpBase10)) { return 10; }
        else if (value.match(this.#regexpBase16)) { return 16; }
        else if (value.match(this.#regexpBase32)) { return 32; }
        else if (value.match(this.#regexpBase36)) { return 36; }
        else { return undefined; }
    }
}
