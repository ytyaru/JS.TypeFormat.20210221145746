class DateFormat {
    static #timeZone = 'Z'
    static #formatDate = '\\d{4,}[\-/]\\d{2}[\-/]\\d{2}';
    static #formatTime = '\\d{2}:\\d{2}:\\d{2}(\.\\d+)?';
    static #formatTimeZone = '(Z|[+\-]\\d{4}|[+\-]\\d{2}:\\d{2})';
    static #formatDateTime = `${this.#formatDate}[ T]${this.#formatTime}${this.#formatTimeZone}?`;
    static #regexpDate = new RegExp(`^${this.#formatDate}$`);
    static #regexpTime = new RegExp(`^${this.#formatTime}$`);
    static #regexpDateTime = new RegExp(`^${this.#formatDateTime}$`);
    static #regexpTimeZone = new RegExp(`${this.#formatTimeZone}$`);
    static isMatch(value) { // value:string
        return (value.match(this.#regexpDate) 
             || value.match(this.#regexpTime) 
             || value.match(this.#regexpDateTime)) ? true : false;
    }
    static convert(value) { // value:string
        if (value.match(this.#formatDateTime)) {
            if (this.#hasTimeZone(value)) { return new Date(Date.parse(value)); }
            else { return new Date(Date.parse(value + this.#timeZone)); }
        }
        else if (value.match(this.#formatDate)) {
            return new Date(Date.parse(value + '00:00:00' + this.#timeZone));
        }
        else if (value.match(this.#formatTime)) {
            throw new Error(`00:00:00書式は非対応です。: ${value}`);
//            const now = new Date(); // 現在日時
            // #timeZone === 'Z' のときは UTC日付
            // #timeZone === '+0900' 等のときは Locale日付
            // それらタイムゾーンごとの日付文字列を取得する方法がわからない
//            return new Date(Date.parse(現在日yyyy-mm-dd + value + this.#timeZone));
        }
        throw new Error(`非対応の書式です。: ${value}`);
    }
    static #hasTimeZone(value) {
        if (value.match(this.#regexpTimeZone)) { return true; }
        return false;
    }
}
