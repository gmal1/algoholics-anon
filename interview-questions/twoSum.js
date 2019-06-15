/**
 * https://leetcode.com/problems/two-sum/
 * given an array of nums and a target,
 * return the indexes of the elements that add up to the target
 * (or false if no such pair exists)
 * */
function twoSum(arr, target) {
    var complements = new Map([]);
    for (var i = 0; i < arr.length; i++) {
        var cand = arr[i];
        var compl = target - cand;
        if (complements.has(compl)) {
            return [complements.get(compl), i];
        }
        complements.set(cand, i);
    }
    return false;
}
