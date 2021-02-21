# JSの数値型はDouble型のみである

　JSでもちいる数値型は[Number][]である。これはIEEE754倍精度浮動小数点数だ。他のプログラミング言語では`double`型として表現される。

　IEEE754由来による不具合が多数ある。たとえば丸め誤差。`console.assert(0.3 === 0.1 + 0.2)`。等しくならない。また、オーバーフローもある。53ビットを超えると下の桁から削られていく。`console.assert(2 ** 53 !== 2 ** 53 + 1);`。同じと判断されてしまう。`Number.isSafeInteger()`なら2^53-1以内か否か判定してくれる。`console.assert(true === Number.isSafeInteger(2**53-1));`、`console.assert(false === Number.isSafeInteger(2**53));`

[Number]:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number

　ただしBigIntを除く。

## 情報源

* https://qiita.com/uhyo/items/f9abb94bcc0374d7ed23

## parseInt, parseFloat

```javascript
parseInt('20px') // 20
```

　なんと不正な文字があっても数値化できる部分があれば正常終了してしまう。

