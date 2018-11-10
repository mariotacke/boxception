class SquareCanvas {
  constructor (length) {
    this.grid = Array.from({ length }, () => {
      return Array.from({ length }, () => ' ');
    });
  }

  draw (x1, y1, x2, y2) {
    // draw corners
    this.grid[y1][x1] = '+';
    this.grid[y1][x2] = '+';
    this.grid[y2][x1] = '+';
    this.grid[y2][x2] = '+';

    // draw verticals
    for (let y = y1 + 1; y < y2; y++) {
      this.grid[y][x1] = '|';
      this.grid[y][x2] = '|';
    }

    // draw horizontals
    for (let x = x1 + 1; x < x2; x++) {
      this.grid[y1][x] = '-';
      this.grid[y2][x] = '-';
    }
  }

  print () {
    return this.grid.map((row) => row.join('')).join('\n');
  }
}

module.exports = SquareCanvas;
