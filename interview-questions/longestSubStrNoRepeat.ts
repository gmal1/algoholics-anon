/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * given a string:
 * return the size of the longest substring that doesn't have repeat chars
 */

/*
 * important ideas:
 * ask interviewer if we can assume only lower case letters, only ASCII, etc.
 * if bounded to only 26 lowercase, we can use a 26 entry map and argue that it is constant space (independent of string size)
 *
 * brute force would be quadratic time, also constant space
 *
 * sliding window problem category
 * -linear time, right side of window never stops moving until the end, never backtracks
 * -expand the window when you can, keep track of "most recent" (rightmost) instance of each character seen so far
 * -when condition is broken (repeat character) contract window as far right as needed
 */

function longest(str: string): number {
  const map = new Map();
  let max = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    const cand = str[right];
    const previousIdx = map.get(cand);

    // if previousIdx is defined and is within the window (window = right - left)
    // contract the window  past the previous idx of this character
    left = previousIdx >= left ? previousIdx + 1 : left;

    // set the new rightmost idx of this character and update max if window is bigger
    map.set(cand, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
