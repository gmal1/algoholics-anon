/**
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

Input:
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.
 */
/**
make a map of the banned words
make a maxWord var
iterate thru the paragraph, assembling a map as you go
if the word isn't banned, incrememnt its map value
if incrementing the value puts it past the maxNum, it becomes the maxWord
 */
function mostCommonWord(para, banned) {
    // assemble banned map
    var bannedMap = new Map();
    banned.forEach(function (el) { return bannedMap.set(el.toLowerCase(), 1); });
    var maxWord;
    var paraMap = new Map();
    var paraArr = para.toLowerCase().split(/\W+/);
    for (var _i = 0, paraArr_1 = paraArr; _i < paraArr_1.length; _i++) {
        var word = paraArr_1[_i];
        if (!bannedMap.has(word)) {
            paraMap.set(word, paraMap.get(word) ? paraMap.get(word) + 1 : 1);
            if (paraMap.get(word) > maxWord.length) {
                maxWord = word;
            }
        }
    }
    return maxWord;
}
