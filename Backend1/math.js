const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;

const g = 9.8;
const pi = 3.14;

// view the object using 
console.log(math);

// 1st method to export
let obj = {
    sum: sum,
    mul: mul,
    sub: sub,
    g: g,
    pi: pi
};

module.exports = obj;

// 2nd method to export
module.exports = {
    sum: sum,
    mul: mul,
    sub: sub,
    g: g,
    pi: pi
};

//3rd method to export
module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.sub = (a, b) => a - b;

module.exports.g = 9.8;
module.exports.pi = 3.14;

//if you write only exports then it also fine but cannot be treated like an object , in some cases you might get error 
