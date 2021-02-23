class BigIntFormat {
    static #formatBase10 = '[+\-]?([0-9]{1}|[1-9][0-9]+)'
    static #formatBase8 = '0o[0-7]+'
    static #formatBase2 = '0b[01]+'
    static #formatBase16 = '0x[0-9a-fA-F]+'
    static #formatBase32 = '0v[0-9a-vA-V]+'
    static #formatBase36 = '0z[0-9a-zA-Z]+'
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

    static isMatch(value) { // value:string
    }
    // Infinity, NaN, 2e1 等はいらない
    static typeof(value) {
//        console.log(value);
        if (undefined === value) { return 'undefined'; }
        else if (null === value) { return 'null'; }
        else if (Number.isNaN(value)) { return 'NaN'; }
        else if ('true' === value || 'false' === value) { return 'boolean'; }
//        else if (isNaN(value)) { return 'NaN'; }
        else if (value.match(this.#regexpDate) || value.match(this.#regexpTime) || value.match(this.#regexpDateTime) ) { return 'date'; }
        else if (value.match(this.#regexpBase10)) {
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; } // 実際はNumber型
            else { return 'bigint'; }
        }
        else if (value.match(this.#regexpBigInt)) { return 'bigint'; }
        else if (value.match(this.#regexpFloat)) { return 'float'; } // 実際はNumber型
        else if (value.match(this.#regexpBase2)
              || value.match(this.#regexpBase8)
              || value.match(this.#regexpBase16)
              || value.match(this.#regexpBase32)
              || value.match(this.#regexpBase36)) {
//            return 'integer'; // 実際はNumber型。isSafeInteger()判定しても超過していたときはどうしようもない。BigIntは基数表現できないから。
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; } // 実際はNumber型
            else { return 'bigint'; }

        }
        else if (value.match(this.#regexpBase64)) { return 'base64'; } // 実際はString型
//        else if (Number.isSafeInteger(parseInt(value))) { return 'integer'; }
//        else if (Number.isFinite(parseInt(value)) || Number.isFinite(parseFloat(value)) ) { return 'number'; }
//        else if (isFinite(parseInt(value)) || isFinite(parseFloat(value)) ) { return 'number'; }
//        else if (Number.isFinite(parseInt(value))) { return 'number'; }
//        else if (parseInt(value) || parseFloat(value)) { return 'number'; }
//        else if (!isNaN(value)) { return 'number'; }
        else { return 'string'; }
    }
}
