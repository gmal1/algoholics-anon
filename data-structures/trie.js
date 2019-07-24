class Trie {
  constructor(words) {
    this.root = {};
    words.forEach(word => {
      this.addWord(word);
    });
  }

  addWord(word) {
    let node = this.root;
    word.split('').forEach(char => {
      if (!node[char]) {
        node[char] = {};
      }
      node = nodeChar;
    });
    node.word = word;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) return false;
      node = node[char];
    }
    return node.word === word;
  }
}
