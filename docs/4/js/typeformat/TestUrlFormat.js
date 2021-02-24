import UrlFormat from './UrlFormat.js';
export default class TestUrlFormat {
    static test() {
        this.#testIsMatch();
        this.#testToType();
    }
    static #testIsMatch() {
        console.assert(true === UrlFormat.isMatch('.0'));
        console.assert(true === UrlFormat.isMatch('0.0'));
        console.assert(true === UrlFormat.isMatch('12.34'));
        console.assert(true === UrlFormat.isMatch('-.5'));
        console.assert(true === UrlFormat.isMatch('-0.5'));
        console.assert(true === UrlFormat.isMatch('-12.34'));
    }
    static #assertIsMatch(value) {
        console.assert(true === UrlFormat.isMatch(value));
    }
    static #assertToType(value) {
        console.assert(new URL(value).toString() === UrlFormat.toType(value).toString());
    }
    static #assert(method, value) {
        console.assert(this.#getExpect(method) === method(value));
    }
    static #getExpect(method) {
        if (method === UrlFormat.isMatch) { return true; }
        else if (method === UrlFormat.toType) { return new URL(value).toString(); }
    }
    static #testToType() {
        for (const url of [
            ''
        ]) {
            
        }
        console.assert(0.0 === UrlFormat.toType('.0'));
        console.assert(0.0 === UrlFormat.toType('0.0'));
        console.assert(12.34 === UrlFormat.toType('12.34'));
        console.assert(-0.5 === UrlFormat.toType('-.5'));
        console.assert(-0.5 === UrlFormat.toType('-0.5'));
        console.assert(-12.34 === UrlFormat.toType('-12.34'));
    }
}
