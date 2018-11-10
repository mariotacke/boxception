const boxception = require('./lib/boxception');

const [input, padding] = process.argv.slice(2);

const box = boxception(input, padding);

console.log(box);
