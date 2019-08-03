/*
https://leetcode.com/problems/word-search-ii/
build a trie of all the words,
dfs on each cell of the graph
simultaneously traverse the trie

at each layer of the dfs, check if the simultaneous trie node is a whole word
if it is, push it into results

regardless, continue the search and mark the cells you've visited
unmark them before returning to the parent stack frame
*/

function findWords(board, words) {
  const root = buildTrie(words);
  let res = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      searchWord(root, i, j, board, res);
    }
  }

  return res;
}

function buildTrie(words) {
  let root = {};

  for (let word of words) {
    let node = root;

    word.split('').forEach(c => (node = node[c] ? node[c] : (node[c] = {})));
    node.word = word;
  }

  return root;
}

function searchWord(node, i, j, board, res) {
  if (node.word) {
    res.push(node.word);
    node.word = null;
  }

  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
  if (board[i][j] === '#' || !node[board[i][j]]) return;

  const c = board[i][j];

  board[i][j] = '#'; // mark visited

  searchWord(node[c], i + 1, j, board, res);
  searchWord(node[c], i - 1, j, board, res);
  searchWord(node[c], i, j + 1, board, res);
  searchWord(node[c], i, j - 1, board, res);

  board[i][j] = c; // reset
}
