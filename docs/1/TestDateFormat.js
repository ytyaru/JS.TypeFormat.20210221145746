class TestDateFormat {
    static test() {
        this.#testIsMatch();
    }
    static #testIsMatch() {
        console.assert(true === DateFormat.isMatch('2000-01-01'));
        console.assert(true === DateFormat.isMatch('2000-01-01 12:34:56'));
        console.assert(true === DateFormat.isMatch('2000-01-01 12:34:56.789'));
        console.assert(true === DateFormat.isMatch('2000-01-01T12:34:56Z'));
        console.assert(true === DateFormat.isMatch('2000-01-01T12:34:56Z'));
        console.assert(true === DateFormat.isMatch('2000-01-01T12:34:56+0900'));
        console.assert(true === DateFormat.isMatch('2000-01-01T12:34:56+09:00'));
        console.assert(true === DateFormat.isMatch('2000-01-01T12:34:56-1200'));
        console.assert(true === DateFormat.isMatch('2000-01-01T12:34:56-12:00'));
        console.assert(true === DateFormat.isMatch('12:34:56'));
    }
}
