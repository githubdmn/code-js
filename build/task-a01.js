"use strict";
// a - palindrom 141, 535, 121, 993
// b - armstrong 153 = 1*1*1 + 5*5*5 + 3*3*3
Object.defineProperty(exports, "__esModule", { value: true });
function palindrom(n) {
    return n % 10 === Math.floor(n / 100);
}
function armstrong(n) {
    const a = Math.floor(n / 100);
    const b = Math.floor((n % 100) / 10);
    const c = n % 10;
    return n === a * a * a + b * b * b + c * c * c;
}
function run() {
    //console.log(palindrom(993));
    console.log(armstrong(153));
}
exports.default = run;
