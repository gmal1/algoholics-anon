function isInterleave(s1, s2, t) {
  const memo = {};
  function helper(s1ptr, s2ptr, tptr) {
    const s1Sub = s1.slice(s1ptr);
    const s2Sub = s2.slice(s2ptr);
    // const tSub = t.slice(tptr);

    if (memo[s1Sub + '.' + s2Sub]) return memo[s1Sub + '.' + s2Sub];
    if (s1ptr === s1.length - 1 && s2ptr === s2.length - 1 && tptr === t.length) return true;

    const tCand = t[tptr];
    const s1Cand = s1[s1ptr];
    const s2Cand = s2[s2ptr];

    if (s1Cand === tCand && s2Cand === tCand) {
      return (memo[s1Sub + '.' + s2Sub] = helper(s1ptr + 1, s2ptr, tptr + 1) || helper(s1ptr, s2ptr + 1, tptr + 1));
    }
    if (s1Cand === tCand) return (memo[s1Sub + '.' + s2Sub] = helper(s1ptr + 1, s2ptr, tptr + 1));
    if (s2Cand === tCand) return (memo[s1Sub + '.' + s2Sub] = helper(s1ptr, s2ptr + 1, tptr + 1));
  }
  helper(0, 0, 0);
  return memo[s1 + '.' + s2];
}
