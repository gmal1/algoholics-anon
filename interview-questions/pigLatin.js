// write a function that will convert a string to pig latin
// punctuation and capitalization must be preserved

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1);
}

function pigLatin(s) {
  const translated = [];
  let tempLetters = [];
  let tempNonLetters = [];
  const arr = s.split("");

  for (let i = 0; i < arr.length; i += 1) {
    const char = arr[i];
    // non-word characters
    if (char.match(/\w/g) === null) {
      // if there's nothing in the temp array, the string started with a non-word character
      if (!tempLetters.length) {
        translated.push(char);
      } else {
        // otherwise we put the character in a temp array to append to the end of the word once we're done pig latin-ifying the string
        tempNonLetters.push(char);

        let word;
        let capitalized;

        // set the capitalized flag to true if the word was capitalized
        tempLetters[0].match(/[A-Z]/) !== null ? capitalized = true : capitalized = false;

        // if first character is a vowel
        if (tempLetters[0].match(/[A-Ea-e]/) !== null) {
          word = tempLetters.slice(1).concat(`${tempLetters[0]}way`).join("").toLowerCase();
        } else {
          // the first character is a consonant
          word = tempLetters.slice(1).concat(`${tempLetters[0]}ay`).join("").toLowerCase();
        }

        // if the word was originally capitalized, capitalize it
        capitalized ? word = capitalize(word) : word;
        // if there are non-letter characters to add to the end of the word, add them; otherwise do nothing
        tempNonLetters.length ? word = word.concat(tempNonLetters.join("")) : word;

        translated.push(word);

        // reset all temporary arrays and the capitalized flag
        tempLetters = [];
        tempNonLetters = [];
        capitalized = false;
      }
    } else {
      // accumulate letters to a temp array until we encounter a non-word character
      // which indicates that we're at the end of a word
      tempLetters.push(char)
    }
  }
  return translated.join("")
}
