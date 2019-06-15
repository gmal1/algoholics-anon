/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * given a string:
 * return the size of the longest substring that doesnt have repeat chars
 */
/**
 * important ideas:
 * ask interviewer if we can assume only lower case letters, only ASCII, etc.
 * if bounded to only 26 lowercase, we can use a 26 entry map and argue that it is constant space (independent of string size)
 *
 * brute force would be quadratic
 *
 * sliding window problem category
 * -expand the window when you can, keep track of "most recent" (rightmost) instance of each character in window
 * -when condition is broken (repeat character) contract window as far right as is needed
 */
function longest(str) {
    var max = 0;
    var map = new Map();
    var left = 0;
    for (var right = 0; right < str.length; right++) {
        var cand = str[right];
        var previousIdx = map.get(cand);
        left = previousIdx >= left ? previousIdx + 1 : left;
        max = Math.max(max, right - left + 1);
        map.set(cand, right);
    }
    return max;
}
