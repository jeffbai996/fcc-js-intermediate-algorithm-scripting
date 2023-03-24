// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  // split each char
  const binaryArray = str.split(/\s+/);

  // map binary array items to text array and translate
  const textArray = binaryArray.map((binary) => {
    const base10 = parseInt(binary, 2);
    const char = String.fromCharCode(base10);
    return char;
  });
  // join text array chars
  return textArray.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");