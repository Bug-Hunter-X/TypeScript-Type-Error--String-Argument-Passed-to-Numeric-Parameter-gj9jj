function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if(isNaN(numB)) {
      return a; //handle the invalid conversion
    }
    return a + numB;
  }
  return a + b; 
}

let result1 = addSafe(10, "20"); // returns 30
let result2 = addSafe(10, 20); // returns 30
let result3 = addSafe(10, "abc"); // returns 10