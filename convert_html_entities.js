// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // replace all '&' with '&amp;'
  str = str.replace(/&/g, '&amp;');
  // replace all '<' with '&lt;'
  str = str.replace(/</g, '&lt;');
  // replace all '>' with '&gt;'
  str = str.replace(/>/g, '&gt;');
  // replace all '"' with '&quot;'
  str = str.replace(/"/g, '&quot;');
  // replace all "'" with '&apos;'
  str = str.replace(/'/g, '&apos;');

  // return modified string
  return str;
}

convertHTML("Dolce & Gabbana");