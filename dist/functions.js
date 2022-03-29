"use strict";
// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }
// function printResult(num: number): void {
//     console.log("Result: " + num);
// }
// Function Types and CallBack
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// addAndHandle(5,10, (result) => {
//     console.log(result);
// });
