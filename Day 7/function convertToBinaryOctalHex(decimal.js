function convertToBinaryOctalHex(decimalNumber) {
  let binary = decimalNumber.toString(2);

let octal = decimalNumber.toString(8);

let hexadecimal = decimalNumber.toString(16).toUpperCase();

  return {
    binary: binary,
    octal: octal,
    hexadecimal: hexadecimal,
  };
}

const decimalNumber = 42; 
const result = convertToBinaryOctalHex(decimalNumber);

console.log(`Decimal: ${decimalNumber}`);
console.log(`Binary: ${result.binary}`);
console.log(`Octal: ${result.octal}`);
console.log(`Hexadecimal: ${result.hexadecimal}`);
