/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      – Addition: returns the sum of two numbers
 *   subtract – Subtraction: subtracts the second number from the first
 *   multiply – Multiplication: returns the product of two numbers
 *   divide   – Division: divides the first number by the second (throws on division by zero)
 *
 * Usage:
 *   node calculator.js add      <a> <b>
 *   node calculator.js subtract <a> <b>
 *   node calculator.js multiply <a> <b>
 *   node calculator.js divide   <a> <b>
 */

// Addition: returns a + b
function add(a, b) {
  return a + b;
}

// Subtraction: returns a - b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns a * b
function multiply(a, b) {
  return a * b;
}

// Division: returns a / b; throws an error if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , operation, rawA, rawB] = process.argv;
  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (!operation || isNaN(a) || isNaN(b)) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <a> <b>');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':      result = add(a, b);      break;
      case 'subtract': result = subtract(a, b); break;
      case 'multiply': result = multiply(a, b); break;
      case 'divide':   result = divide(a, b);   break;
      default:
        console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, or divide.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
