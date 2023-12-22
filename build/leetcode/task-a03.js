"use strict";
// 6! = 6 * 5 * 4 * 3 * 2 * 1
Object.defineProperty(exports, "__esModule", { value: true });
function fact(n) {
    let p = 1;
    for (let i = 1; i <= n; i++) {
        p *= i;
    }
    return p;
}
function factRecursive(n) {
    //if (n == 1 || n == 0) return 1;
    //else return n * factRecursive(n - 1);
    return n == 1 || n == 0 ? 1 : n * factRecursive(n - 1);
}
// f1 = 1, f2 = 1, f3 = f1 + f2, f4 = f3 + f2, ....
function fibonacci(n) {
    let f1 = 1;
    let f2 = 1;
    let fn = 0;
    for (let i = 0; i < n; i++) {
        fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }
    return fn;
}
function fibonacciRec(n) {
    if (n < 2)
        return n;
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}
function run() {
    console.log('Task a03');
    console.time('Fibonacci');
    console.log(fibonacci(5));
    console.timeEnd('Fibonacci');
    console.time('Fib REC');
    console.log(fibonacciRec(7));
    console.timeEnd('Fib REC');
}
exports.default = run;
