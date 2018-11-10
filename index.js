const boxception = require('./lib/boxception');

const [input, padding] = process.argv.slice(2);

const box = boxception(parseInt(input), parseInt(padding) || 0);

console.log(box);
