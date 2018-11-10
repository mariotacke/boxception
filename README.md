# Boxception

This module prints out nested box ASCII art to the console. It accepts two
inputs, the **number of boxes** and **padding** between them.

Example: `node index.js 2`
```
+---+
|+-+|
|| ||
|+-+|
+---+
```

Example: `node index.js 3`
```
+-----+
|+---+|
||+-+||
||| |||
||+-+||
|+---+|
+-----+
```

Example: `node index.js 3 1`
```
+---------+
|         |
| +-----+ |
| |     | |
| | +-+ | |
| | | | | |
| | +-+ | |
| |     | |
| +-----+ |
|         |
+---------+
```

## Usage
```
node index.js <boxes> <padding>
```

- `<boxes>` defines the number of nested boxes to create
- `<padding>` defines the number of spaces used for padding, default `0`

## Tests
```
npm install
npm test
```

## Tooling
- [Node.js 10](https://nodejs.org/en/)
