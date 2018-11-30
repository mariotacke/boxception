const assert = require('assert');
const boxception = require('./lib/boxception');

// this display helper provides a way for the assertion to show indented code
const displayHelper = (expectedOutput) => expectedOutput.replace(/^ +/gm, '');

describe('Boxception', () => {
  it('should properly calculate a single box', () => {
    assert.strictEqual(
      boxception(1),
      displayHelper(
        `+-+
         | |
         +-+`
      )
    );
  });

  it('should properly calculate nested boxes', () => {
    assert.strictEqual(
      boxception(2),
      displayHelper(
        `+---+
         |+-+|
         || ||
         |+-+|
         +---+`
      )
    );
  });

  it('should properly pad nested boxes', () => {
    assert.strictEqual(
      boxception(2, 1),
      displayHelper(
        `+-----+
         |     |
         | +-+ |
         | | | |
         | +-+ |
         |     |
         +-----+`
      )
    );
  });

  it('should properly pad nested boxes', () => {
    assert.strictEqual(
      boxception(2, 2),
      displayHelper(
        `+-------+
         |       |
         |       |
         |  +-+  |
         |  | |  |
         |  +-+  |
         |       |
         |       |
         +-------+`
      )
    );
  });
});
