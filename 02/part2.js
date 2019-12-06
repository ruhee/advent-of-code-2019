const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(",")
  .map(i => parseInt(i, 10));

// NB: reinitialize program values before running operations

// Intcode program = program with lists of integers
// Opcode = beginning of instructions (in this case 1,2,99)
// Values after an opcode = instruction parameters
// Address of current instruction (index) = instruction pointer
// --- After an instruction finishes, the pointer INCREASES by the number of values in the instruction
// --- Currently this is always 4 (1 opcode and 3 parameters) for add and multiply

// Determine which pair of inputs produces the output 19690720 (🌚)

// In this program: value at address 1 is called `noun` and at address 2 is called `verb`
// Each of the 2 input values will be between 0 and 99 inclusive
// Once the program has halted its output is available at address 0
// Each time you try inputs, reset the memory to the values in the original input (don't reuse altered program)

// Find the input `noun` and `verb` which produce 19690720
// (Replace input[1] and input[2] with numbers that produce this final result)
// Final answer: (100 * noun) + verb
// (if noun=12 and verb=2, the answer is 1202).

// const program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const inputClone = [...input];
    inputClone[1] = noun;
    inputClone[2] = verb;
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

    walk(inputClone);
    if (inputClone[0] === 19690720) {
      console.log({ noun, verb });
      return;
    }
  }
}
