class TypeFormat {
    static #formatBase64 = '0=[0-9a-zA-Z+/=]+'
    static #regexpBase64 = new RegExp(`^${this.#formatBase64}$`);
    // Infinity, NaN, 2e1 等はいらない
    static typeof(value) {
        if (undefined === value) { return 'undefined'; }
        else if (null === value) { return 'null'; }
        else if (Number.isNaN(value)) { return 'NaN'; }
        else if ('true' === value || 'false' === value) { return 'boolean'; }
        else if (DateFormat.isMatch(value)) { return 'date'; }
        else if (IntegerFormat.isMatch(value)) {
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; }
            return 'bigint';
        }
        else if (FloatFormat.isMatch(value)) { return 'float'; }
        else if (BigIntFormat.isMatch(value)) { return 'bigint'; }
        else if (value.match(this.#regexpBase64)) { return 'base64'; } // 実際はString型
        else { return 'string'; }
    }
}
