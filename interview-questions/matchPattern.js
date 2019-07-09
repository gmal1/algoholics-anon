// given an array of words and a pattern string output all words that match that string
// e.g. given words = ['cat', 'aba', 'aaa', 'bbb', 'fml'] and pattern 'bye', the matches are
// 'cat' and 'fml'

const patternMatch = (arrOfWords, pattern) => {
  const matches = [];

  arrOfWords.forEach(word => {
    // create a two-way dictionary mapping characters in each word to their
    // counterparts in the pattern string, resetting them for each word
    const wordToPatternDictionary = {};
    const patternToWordDictionary = {};

    const shouldBeIncluded = word.split('').every((char, i) => {
      // if neither the current character in the word nor the character at the ith index
      // in the pattern string have been seen before, add them to the respective dictionaries
      if (
        !wordToPatternDictionary[char] &&
        !patternToWordDictionary[pattern[i]]
      ) {
        wordToPatternDictionary[char] = pattern[i];
        patternToWordDictionary[pattern[i]] = char;
      }
      // otherwise, we've encountered these characters previously so we need to
      // make sure they are mapped to correct letters in both dictionaries
      return (
        wordToPatternDictionary[char] === pattern[i] &&
        patternToWordDictionary[pattern[i]] === char
      );
    });

    // if pattern isn't broken the word is valid and can be added to the matches array
    if (shouldBeIncluded) matches.push(word);
  });

  return matches;
};

console.log(patternMatch(['abc', 'cat', 'aaa', 'bbb', 'fml'], 'bye'));
