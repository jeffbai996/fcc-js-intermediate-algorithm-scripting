// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // replace all '&' with '&amp;'
  str = str.replace(/&/g, '&amp;');
  // replace all '<' with '&lt;'
  str = str.replace(/</g, '&lt;');
  // replace all '>' with '&gt;'
  str = str.replace(/>/g, '&gt;');
  return str;
}

convertHTML("Dolce & Gabbana");