const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(",")
  .map(i => parseInt(i, 10));

// Opcode 1: adds together numbers from two positions and stores the result in a third position
// Opcode 2: multiplies the inputs instead of adding (and stores in a third position)
// Opcode 99: Immediate exit
// To read the next instruction, move forward 4 positions

// The three integers immediately after the opcode tell you the *positions* to read the values from or write values to.
// e.g. 1, 10, 20, 30
// Opcode 1, add together values from positions 10 and 20, and store them at position 30.

// const program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
input[1] = 12;
input[2] = 2;
let currentPosition = 0;

function walk(program) {
  let opcode = program[currentPosition];
  if (opcode === 1 || opcode === 2) {
    const positions = [
      program[currentPosition + 1],
      program[currentPosition + 2]
    ];
    finalVal =
      opcode === 1
        ? program[positions[0]] + program[positions[1]]
        : program[positions[0]] * program[positions[1]];
    const idx = program[currentPosition + 3];
    program[idx] = finalVal;
  }
  if (opcode === 99) {
    return;
  }
  currentPosition = currentPosition + 4;
  walk(program);
}

walk(input);
console.log(input[0]);
