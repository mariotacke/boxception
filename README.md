# Boxception

Write a program that outputs a nested box ASCII art (like russian dolls).
Program should read an integer input, which is between 1 and 20.

For example { input: 2 }

```
+---+
|+-+|
|| ||
|+-+|
+---+
```

Or { input: 3 }

```
+-----+
|+---+|
||+-+||
||| |||
||+-+||
|+---+|
+-----+
```

Later we want to introduce a padding of variable spaces, for example:
{ input: 3, padding: 1 }

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

## Tooling
- [Node.js 10](https://nodejs.org/en/)
