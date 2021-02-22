class TestNumberFormat {
    static test() {
        this.#testIsMatch();
        this.#testGetTimeZone();
        this.#testToType();
    }
    static #testIsMatch() {
        console.assert(true === NumberFormat.isMatch('2000-01-01'));
        console.assert(true === NumberFormat.isMatch('2000/01/01'));
        console.assert(true === NumberFormat.isMatch('2000-01-01 12:34'));
        console.assert(true === NumberFormat.isMatch('2000-01-01 12:34:56'));
        console.assert(true === NumberFormat.isMatch('2000-01-01 12:34:56.789'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34Z'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56Z'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56.789Z'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56+0900'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56+09:00'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56-1200'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56-12:00'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56.789+0900'));
        console.assert(true === NumberFormat.isMatch('2000-01-01T12:34:56.789+09:00'));
        console.assert(true === NumberFormat.isMatch('12:34'));
        console.assert(true === NumberFormat.isMatch('12:34:56'));
        console.assert(true === NumberFormat.isMatch('12:34:56.789'));
    }
    static #testGetTimeZone() {
        console.assert('Z' === NumberFormat.getTimeZone());
        NumberFormat.setTimeZone('+0900');
        console.assert('+0900' === NumberFormat.getTimeZone());
        NumberFormat.setTimeZone('-12:00');
        console.assert('-12:00' === NumberFormat.getTimeZone());
        NumberFormat.setTimeZone('Invalid Value');
        console.assert('-12:00' === NumberFormat.getTimeZone());
        NumberFormat.setTimeZone('Z');
        console.assert('Z' === NumberFormat.getTimeZone());
    }
    static #testToType() {
        console.assert(new Date('2000-01-01T00:00:00Z').getTime() === NumberFormat.toType('2000-01-01').getTime());
        console.assert(new Date('2000-01-01T00:00:00Z').getTime() === NumberFormat.toType('2000-01-01 00:00').getTime());
        console.assert(new Date('2000-01-01T00:00:00Z').getTime() === NumberFormat.toType('2000-01-01 00:00:00').getTime());
        console.assert(new Date('2000-01-01T00:00:00Z').getTime() === NumberFormat.toType('2000-01-01 00:00:00.000').getTime());
        console.assert(new Date('2000-01-01T00:00:00Z').getTime() === NumberFormat.toType('2000-01-01T00:00:00Z').getTime());
        console.assert(new Date('2000-01-01T00:00:00Z').getTime() === NumberFormat.toType('2000-01-01T00:00:00.000Z').getTime());
        const now = new Date(); // 現在日時
        const yearUTC = `${now.getUTCFullYear()}`;
        const monthUTC = `0${now.getUTCMonth()+1}`.slice(-2);
        const dayUTC = `0${now.getUTCDate()}`.slice(-2);
        const year = `${now.getFullYear()}`;
        const month = `0${now.getMonth()+1}`.slice(-2);
        const day = `0${now.getDate()}`.slice(-2);
        console.assert(new Date(Date.parse(`${yearUTC}-${monthUTC}-${dayUTC}T00:00:00Z`)).getTime() === NumberFormat.toType('00:00').getTime());
        console.assert(new Date(Date.parse(`${yearUTC}-${monthUTC}-${dayUTC}T00:00:00Z`)).getTime() === NumberFormat.toType('00:00:00').getTime());
        console.assert(new Date(Date.parse(`${yearUTC}-${monthUTC}-${dayUTC}T00:00:00Z`)).getTime() === NumberFormat.toType('00:00:00.000').getTime());
        const tzJa = '+0900'
        NumberFormat.setTimeZone(tzJa);
        console.assert(new Date(Date.parse(`${year}-${month}-${day}T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('00:00').getTime());
        console.assert(new Date(Date.parse(`${year}-${month}-${day}T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('00:00:00').getTime());
        console.assert(new Date(Date.parse(`${year}-${month}-${day}T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('00:00:00.000').getTime());
        console.assert(new Date(Date.parse(`2000-01-01T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('2000-01-01').getTime());
        console.assert(new Date(Date.parse(`2000-01-01T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('2000-01-01 00:00').getTime());
        console.assert(new Date(Date.parse(`2000-01-01T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('2000-01-01 00:00:00').getTime());
        console.assert(new Date(Date.parse(`2000-01-01T00:00:00${tzJa}`)).getTime() === NumberFormat.toType('2000-01-01 00:00:00.000').getTime());
        NumberFormat.setTimeZone('Z');
    }
}
