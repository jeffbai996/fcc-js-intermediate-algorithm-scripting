// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  // store result
  let result = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        result.push(["A", "T"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      case "C":
        result.push(["C", "G"]);
        break;
      case "G":
        result.push(["G", "C"]);
        break;
      default:
        console.log("Invalid input");
    }
  }
  return result;
}

pairElement("GCG");