class TypeFormat {
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
        else if (Base64Format.isMatch(value)) { return 'base64'; } // 実際はString型
        else { return 'string'; }
    }
    static toType(value) {
        const type = this.typeof(value);
        if ('undefined' === type) { return undefined; }
        else if ('null' === type) { return null; }
        else if ('NaN' === type) { return NaN; }
        else if ('true' === value) { return true; }
        else if ('false' === value) { return false; }
        else if ('integer' === type) { return IntegerFormat.toType(value); }
        else if ('float' === type) { return FloatFormat.toType(value); }
        else if ('bigint' === type) { return BigIntFormat.toType(value); }
        else if ('date' === type) { return DateFormat.toType(value); }
        else { return value; }
    }
}
