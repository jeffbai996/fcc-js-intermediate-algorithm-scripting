// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const words = str.toLowerCase().split(" ");

  const pigLatinWords = words.map(word => {
    let firstVowelIndex = word.length;

    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        firstVowelIndex = i;
        break;
      }
    }

    if (firstVowelIndex === 0) {
      return word + "way";
    } else {
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
    }
  });

  return pigLatinWords.join(" ");
}

translatePigLatin("consonant");