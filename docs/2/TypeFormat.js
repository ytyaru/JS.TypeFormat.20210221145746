class TypeFormat {
    static #formatDate = '\\d{4,}[\-/]\\d{2}[\-/]\\d{2}';
    static #formatTime = '\\d{2}:\\d{2}:\\d{2}(\.\\d+)?';
    static #formatDateTime = `${this.#formatDate}[ T]${this.#formatTime}(Z|[+-]\\d{4}|[+-]\\d{2}:\\d{2})?`;
    static #regexpDate = new RegExp(`^${this.#formatDate}$`);
    static #regexpTime = new RegExp(`^${this.#formatTime}$`);
    static #regexpDateTime = new RegExp(`^${this.#formatDateTime}$`);
    static #formatNumber = '[+\-]?([0-9]{1}|[1-9][0-9]+)'
    static #formatIntBase10 = '[+\-]?([0-9]{1}|[1-9][0-9]+)'
    static #formatIntBase8 = '0o[0-7]+'
    static #formatIntBase2 = '0b[01]+'
    static #formatIntBase16 = '0x[0-9a-fA-F]+'
    static #formatIntBase32 = '0v[0-9a-vA-V]+'
    static #formatIntBase36 = '0z[0-9a-zA-Z]+'
    static #formatBase64 = '0=[0-9a-zA-Z+/=]+' // image/png;base64,xxxxxxx のようにMIMEタイプを入れるべき？
    /*
    static #formatBase64 = '(application|font|image|audio|video)()[0-9a-zA-Z+/=]+'
    static #formatMimeType = '(application|font|image|audio|video|model|text|message|multipart)'
    static #formatMimeTypeApplication = '(javascript|ecmascript)'
    static #formatMimeTypeText = '(tsv|csv|json|xml|yaml|yml|toml|ini|txt|md|ad|javascript|ecmascript)'
    static #formatMimeTypeImage = '(apng|bmp|gif|x-icon|jpeg|png|svg+xml|tiff|webp)'
    static #formatMimeTypeAudio = '(wav|wave|ogg|mpeg|aac|midi|x-flac)'
    static #formatMimeTypeVideo = '(webm|ogg|mp4|mpeg|quicktime|x-msvideo)'
    */
    static #formatFloat = `${this.#formatIntBase10}?\\.[0-9]+`
    static #formatBigInt = '[0-9]+n'
    static #regexpIntBase10 = new RegExp(`^${this.#formatIntBase10}$`);
    static #regexpIntBase2 = new RegExp(`^${this.#formatIntBase2}$`);
    static #regexpIntBase8 = new RegExp(`^${this.#formatIntBase8}$`);
    static #regexpIntBase16 = new RegExp(`^${this.#formatIntBase16}$`);
    static #regexpIntBase32 = new RegExp(`^${this.#formatIntBase32}$`);
    static #regexpIntBase36 = new RegExp(`^${this.#formatIntBase36}$`);
    static #regexpBase64 = new RegExp(`^${this.#formatBase64}$`);
    static #regexpFloat = new RegExp(`^${this.#formatFloat}$`);
    static #regexpBigInt = new RegExp(`^${this.#formatBigInt}$`);
    // Infinity, NaN, 2e1 等はいらない
    static typeof(value) {
//        console.log(value);
        if (undefined === value) { return 'undefined'; }
        else if (null === value) { return 'null'; }
        else if (Number.isNaN(value)) { return 'NaN'; }
        else if ('true' === value || 'false' === value) { return 'boolean'; }
//        else if (isNaN(value)) { return 'NaN'; }
        else if (DateFormat.isMatch(value)) { return 'date'; }
//        else if (value.match(this.#regexpDate) || value.match(this.#regexpTime) || value.match(this.#regexpDateTime) ) { return 'date'; }
        else if (IntegerFormat.isMatch(value)) {
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; }
            return 'bigint';
        }
        else if (FloatFormat.isMatch(value)) { return 'float'; }
        /*
        else if (IntegerFormat.isMatch(value)) {
            if (Number.isSafeInteger(parseInt(value))) { return 'number'; }
            return 'bigint';
        }
        else if (FloatFormat.isMatch(value)) { return 'number'; }
        */
        /*
        else if (value.match(this.#regexpIntBase10)) {
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; } // 実際はNumber型
            else { return 'bigint'; }
        }
        else if (value.match(this.#regexpBigInt)) { return 'bigint'; }
        else if (value.match(this.#regexpFloat)) { return 'float'; } // 実際はNumber型
        else if (value.match(this.#regexpIntBase2)
              || value.match(this.#regexpIntBase8)
              || value.match(this.#regexpIntBase16)
              || value.match(this.#regexpIntBase32)
              || value.match(this.#regexpIntBase36)) {
//            return 'integer'; // 実際はNumber型。isSafeInteger()判定しても超過していたときはどうしようもない。BigIntは基数表現できないから。
            if (Number.isSafeInteger(parseInt(value))) { return 'integer'; } // 実際はNumber型
            else { return 'bigint'; }

        }
        */
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
