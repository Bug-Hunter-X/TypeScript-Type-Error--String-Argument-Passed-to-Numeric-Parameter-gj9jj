# TypeScript Type Error: String Argument Passed to Numeric Parameter

This repository demonstrates a common type error in TypeScript where a string is passed as an argument to a function expecting a number.

## Bug

The `bug.ts` file contains a function `add` that takes two numeric arguments and returns their sum. However, when calling this function, a string is passed as the second argument. This results in a TypeScript compiler error because the types don't match.

## Solution

The `bugSolution.ts` file shows how to solve this error by explicitly type-checking the input before performing the operation or by using type guards and union types.