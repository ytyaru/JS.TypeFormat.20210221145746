import UrlFormat from './UrlFormat.js';
export default class TestUrlFormat {
    static test() {
//        this.#testIsMatch();
//        this.#testToType();
        for (const protocol of ['http', 'https']) {
            for (const url of [
                `${protocol}://abc.com`,
                `${protocol}://abc.com/`,
                `${protocol}://abc.com/index.html`,
                `${protocol}://abc.com/index.html#anchor`,
                `${protocol}://abc.com/index.html?q=key%20word&key=value`
            ]) {
                console.log(url)
                this.#assert(UrlFormat.isMatch, url);
                this.#assert(UrlFormat.toType, url);
            }
        }
    }
    static #assert(method, value) {
        console.log(method, value, this.#getExpect(method), method(value))
        console.assert(this.#getExpect(method, value) === method(value));
    }
    static #getExpect(method, value) {
//        console.log(value);
        if (method === UrlFormat.isMatch) { return true; }
        else if (method === UrlFormat.toType) { return new URL(value).toString(); }
    }
    /*
    static #assertIsMatch(value) {
        console.assert(true === UrlFormat.isMatch(value));
    }
    static #assertToType(value) {
        console.assert(new URL(value).toString() === UrlFormat.toType(value).toString());
    }
    static #testIsMatch() {
        console.assert(true === UrlFormat.isMatch('.0'));
        console.assert(true === UrlFormat.isMatch('0.0'));
        console.assert(true === UrlFormat.isMatch('12.34'));
        console.assert(true === UrlFormat.isMatch('-.5'));
        console.assert(true === UrlFormat.isMatch('-0.5'));
        console.assert(true === UrlFormat.isMatch('-12.34'));
    }
    static #testToType() {
        for (const protocol of ['http', 'https']) {
            for (const url of [
                `${protocol}://abc.com`,
                `${protocol}://abc.com/`,
                `${protocol}://abc.com/index.html`,
                `${protocol}://abc.com/index.html#anchor`,
                `${protocol}://abc.com/index.html?q=key%20word&key=value`,
            ]) {
            this.#assert(UrlFormat.isMatch, url);
            this.#assert(UrlFormat.isType, url);
        }
    }
    */
}
