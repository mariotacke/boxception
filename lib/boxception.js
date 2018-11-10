const SquareCanvas = require('./square-canvas');

const boxception = (layers, padding = 0) => {
  // calculate maximum length of resulting square including padding
  const length = 3 + (layers - 1) * (2 + padding * 2);

  const canvas = new SquareCanvas(length);

  // draw squares onto canvas
  for (let y = 0; y < layers * (padding + 1); y += padding + 1) {
    canvas.draw(y, y, length - 1 - y, length - 1 - y);
  }

  return canvas.print();
};

module.exports = boxception;
