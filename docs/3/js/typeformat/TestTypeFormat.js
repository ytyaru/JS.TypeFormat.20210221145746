class TestTypeFormat {
    static test() {
        TestNumber.test();
        TestBigInt.test();
        TestBase64.test();
        TestIntegerFormat.test();
        TestFloatFormat.test();
        TestDateFormat.test();
        this.#testLiteral();
        this.#testBoolean();
        this.#testInteger();
        this.#testBigInt();
        this.#testFloat();
//        this.#testNumber();
        this.#testDate();
        this.#testString();
        console.log('Finished assert !!');
    }
    static #testLiteral() {
        console.assert('undefined' === TypeFormat.typeof(undefined));
        console.assert('null' === TypeFormat.typeof(null));
        console.assert('NaN' === TypeFormat.typeof(NaN));
    }
    static #testBoolean() {
        console.assert('boolean' === TypeFormat.typeof('true'));
        console.assert('boolean' === TypeFormat.typeof('false'));
    }
    static #testInteger() {
        console.assert('integer' === TypeFormat.typeof('0'));
        console.assert('integer' === TypeFormat.typeof('123'));
        console.assert('integer' === TypeFormat.typeof('-1'));
//        console.assert('integer' === TypeFormat.typeof('0.0'));
//        console.assert('integer' === TypeFormat.typeof('-0.0'));
        console.assert('integer' === TypeFormat.typeof('0xFF'));
        console.assert('integer' === TypeFormat.typeof('0o777'));
        console.assert('integer' === TypeFormat.typeof('0b101'));
//        console.assert('integer' === TypeFormat.typeof('2e1')); // 2 * 10^1 = 20
//        console.assert('integer' === TypeFormat.typeof('NaN'));
//        console.assert('integer' === TypeFormat.typeof('Infinity'));
        console.assert('integer' === TypeFormat.typeof(Number.MAX_SAFE_INTEGER.toString()));
        console.assert('integer' === TypeFormat.typeof(Number.MIN_SAFE_INTEGER.toString()));
        console.assert('integer' === TypeFormat.typeof((2**53-1).toString()));
    }
    static #testBigInt() {
        console.assert('bigint' === TypeFormat.typeof((2**53).toString()));
        console.assert('bigint' === TypeFormat.typeof('9007199254740991n'));
        console.assert('bigint' === TypeFormat.typeof('0xFFn'));
        console.assert('bigint' === TypeFormat.typeof('0o777n'));
        console.assert('bigint' === TypeFormat.typeof('0b101n'));
        console.assert('bigint' === TypeFormat.typeof('0x1ffffffffffffff'));
    }
    static #testFloat() {
        console.assert('float' === TypeFormat.typeof('.0'));
        console.assert('float' === TypeFormat.typeof('0.0'));
        console.assert('float' === TypeFormat.typeof('-0.1'));
    }
    /*
    static #testNumber() {
        console.assert('number' === TypeFormat.typeof('0'));
        console.assert('number' === TypeFormat.typeof('123'));
        console.assert('number' === TypeFormat.typeof('-1'));
        console.assert('number' === TypeFormat.typeof('0.0'));
        console.assert('number' === TypeFormat.typeof('-0.0'));
        console.assert('number' === TypeFormat.typeof('0xFF'));
        console.assert('number' === TypeFormat.typeof('080'));
        console.assert('number' === TypeFormat.typeof('2e1')); // 2 * 10^1 = 20
        console.assert('number' === TypeFormat.typeof('NaN'));
        console.assert('number' === TypeFormat.typeof('Infinity'));
        console.assert('number' === TypeFormat.typeof(Number.MAX_SAFE_INTEGER.toString()));
        console.assert('number' === TypeFormat.typeof(Number.MIN_SAFE_INTEGER.toString()));
    }
    */
    static #testDate() {
        console.assert('date' === TypeFormat.typeof('2020-01-02'));
        console.assert('date' === TypeFormat.typeof('2020-01-02 12:34:56'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56Z'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56+0900'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56+09:00'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56-1200'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56-12:00'));
        console.assert('date' === TypeFormat.typeof('2020-01-02 12:34:56.789'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56.789Z'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56.789+0900'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56.789+09:00'));
        console.assert('date' === TypeFormat.typeof('2020-01-02T12:34:56.789-12:00'));
        console.assert('date' === TypeFormat.typeof('12:34:56'));
        console.assert('date' === TypeFormat.typeof('12:34:56.789'));
    }
    static #testString() {
        console.assert('string' === TypeFormat.typeof('2e1')); // 2 * 10^1 = 20
        console.assert('string' === TypeFormat.typeof('Infinity'));
        console.assert('string' === TypeFormat.typeof('123ABC'));
        console.assert('string' === TypeFormat.typeof('090-0000-0000'));
        console.assert('string' === TypeFormat.typeof('null'));
        console.assert('string' === TypeFormat.typeof('undefined'));
        console.assert('string' === TypeFormat.typeof(''));
        console.assert('string' === TypeFormat.typeof(' '));
        console.assert('string' === TypeFormat.typeof('\t'));
        console.assert('string' === TypeFormat.typeof('\n'));
        console.assert('string' === TypeFormat.typeof('True'));
        console.assert('string' === TypeFormat.typeof('False'));
        console.assert('string' === TypeFormat.typeof('abc'));
        console.assert('string' === TypeFormat.typeof('⚠'));
        console.assert('string' === TypeFormat.typeof('漢字'));
    }
}

