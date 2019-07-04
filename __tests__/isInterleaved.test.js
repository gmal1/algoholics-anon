const isInterleaved = require('../interview-questions/isInterleaved');

console.log(isInterleaved('abc', 'def', 'adebcf'));
console.log(isInterleaved('aaa', 'bbc', 'abacba'));

describe('isInterleaved tests', () => {
  it('returns true if the third string is interleaving of the first two', () => {
    expect(isInterleaved('abc', 'def', 'adebcf')).toEqual(true);
  });

  it('returns false if the third string is not interleaving of the first two', () => {
    expect(isInterleaved('aaa', 'bbc', 'abacba')).toEqual(false);
  });

  it('returns false for three empty strings', () => {
    expect(isInterleaved('', '', '')).toEqual(false);
  });

  it('returns false if the third string is longer than the sum of first two', () => {
    expect(isInterleaved('abc', 'def', 'abcdefg')).toEqual(false);
  });
});
