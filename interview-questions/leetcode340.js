/*
longest-substring-with-at-most-k-distinct-characters
leetcode 340:
https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

ex:
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.

Three solutions below
 -2 with LRU cache (one w/ fancy hashmap + linkedlist, the other with simple array)
 -1 with simple iteratively contracting window
 
all three use a sliding window
    -expand the window by one on the right side every iteration
    -if the newest character won't cause the window to have > k distinct characters, don't move left pointer
    -if would cause the window to have > k distinct chacters, contract the left side of the window until the window only has k distinct characters again
    
    
but how can we know how far to contract the left side of the window?    
    two approaches highlighted here:
    naive approach (not necessarily slower in reality, though):
    (see commented out section below)
    -the idea is to keep a hash map for each character with an associated value representing the number of times that character appears in the window
    -increment the left pointer and decrement the value associated with the previous character,
    -when the result of decrementing that char's map value is zero we know we have decreased the number of distinct characters and we can stop

    the uncommented code implements an LRU cache to speed up the "how far to contract?" question
    -the idea:
    -the character that the right pointer has least recently seen is the character that will be entirely removed from the window first in the above process
    -therefore, if we knew the right-most index (that we have seen so far) of that character, we could simply set the left pointer to 1+ that position
    -what's a good way to implement an LRU cache?
    -one option would be to simply use a simple queue with size k
    -whenever the queue is full and a new item is added, simply pop the LRU item and get its index
    -but what if an item already in the queue is seen again? Its position in the LRU cache needs to be updated! In order to update it we need to find it, and for a simple queue that is a O(n) process
    -to speed that searching process up, add a hash map to the sauce!
    -if all the nodes of the queue (implemented as a doubly-linked list for good time complexity of insertions and deletions, at the cost of more CPU cache misses) are referenced thru a hash map then searching will be O(1)
    
    That's it! The actual implementation of the dblLinkedList + hashmap is a bit of code, and doesn't actually help the runtime for these test cases.
    
    for small values of k it is definitely better in reality to use a simpler data structure with worse time complexities but better cache locality

*/

var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (k === 0) return 0;
  // now for the more optimal approach, implementing an LRU cache
  const windowChars = new LRU(k);
  const cache = windowChars.cache;
  const map = windowChars.map;

  let max = 0;
  let left = 0;

  // expand window if the cache is not full
  // otherwise, contract the window to 1+ the least recently used char's rightmost idx
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const evictedNode = windowChars.addElement(char, right);
    if (evictedNode) {
      left = evictedNode.idx + 1;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

class LRU {
  // the list will have cap # of elements
  // each item in the list will have a position in the list and an index in the input string
  constructor(cap) {
    this.capacity = cap;
    this.size = 0;
    this.cache = new DblLinkedList();
    this.map = new Map();
  }

  addElement(char, idx) {
    // if adding an element would result in an eviction from the cache, return the evicted node
    let evictedNode = null;

    // if the char is in the cache, just update its location in the list and its node's idx
    if (this.map.has(char)) {
      const charNode = this.map.get(char);
      this.cache.use(charNode, idx);
    } else {
      // if the cache is at capacity, evict the LRU node and push the new node
      if (this.isFull()) {
        evictedNode = this.cache.evict();
        this.map.delete(evictedNode.char);
      } else {
        this.size += 1;
      }
      const node = this.cache.push(char, idx);
      this.map.set(char, node);
    }
    return evictedNode;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

class Node {
  constructor(char, idx) {
    this.char = char;
    this.idx = idx;
    this.next = null;
    this.prev = null;
  }
}

class DblLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // tail node will be the least recently used
  // new nodes go to the head
  // return the node so a reference can be added to the map
  push(char, idx, node) {
    if (!node) node = new Node(char, idx);

    const oldHead = this.head.next;
    node.next = oldHead;
    node.prev = this.head;

    this.head.next = node;
    oldHead.prev = node;

    return node;
  }

  // move node to the head
  use(node, newIdx) {
    node.idx = newIdx;
    this.remove(node);
    this.push(null, null, node);
  }

  // remove the node from the LL
  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    return node;
  }

  getLeastRecentlyUsed() {
    return this.tail.prev;
  }

  // evict the LRU node
  evict() {
    const node = this.getLeastRecentlyUsed();

    this.remove(node);
    return node;
  }
}

// // Below is an LRU implementation with a simple array
// // it ends up being not much slower than the fancy LRU for these cases
// var lengthOfLongestSubstringKDistinct = function(s, k) {
//     if (k === 0) return 0;
//     // LRU cache but with a simple array instead of map + LL
//     const windowChars = new simplerLRU(k);
//     const cache = windowChars.arr;

//     let max = 0;
//     let left = 0;

//     // expand window if the cache is not full
//     // otherwise, contract the window to 1+ the least recently used char's rightmost idx
//     for (let right = 0; right < s.length; right++){
//         const char = s[right];
//         const evictedNode = windowChars.push(char, right);
//         if (evictedNode){
//           left = evictedNode.idx + 1;
//         }
//         max = Math.max(max, right - left + 1);
//     }
//     return max;
// }

// class simplerLRU{
//     constructor(cap){
//         this.capacity = cap;
//         this.arr = [];
//     }

//     push(char, idx) {
//         let evictedNode = null;
//         const currentPos = this.findIndex(char);
//         if(currentPos !== -1){
//             this.arr.splice(currentPos, 1);
//         }else if (this.arr.length === this.capacity){
//             evictedNode = this.shift();
//         }
//         this.arr.push({char: char, idx: idx});
//         return evictedNode;
//     }

//     shift(){
//         const output = this.arr.shift();
//         return output;
//     }

//     findIndex(char){
//         return this.arr.findIndex(el => el.char === char);
//     }
// }

// // SIMPLE SLIDING WINDOW IMPLEMENTATION, NO LRU
// function lengthOfLongestSubtringKDistinct(s, k){
//     // less cool solution, using incrementing sliding window
//     if (k === 0) return 0;
//     if (s < k) return 0;
//     let max = 0;
//     let uniqCount = 0;
//     let left = 0;

//     // taking simpler approach here, so map will keep the count of each char in the window
//     const map = new Map();

//     // contract window one unit at a time until count drops below k

//     for (let right = 0; right < s.length; right++){
//         const char = s[right];
//         const charCount = map.get(char);
//         // check if the char is within the window
//         // if it isn't, increment the uniqCount
//         if (!charCount){
//             uniqCount += 1;

//             // contract the window if necessary
//             while(uniqCount > k){
//                 const leftChar = s[left];
//                 const leftCharCount = map.get(leftChar);
//                 map.set(leftChar, leftCharCount - 1)
//                 if (leftCharCount === 1) uniqCount -= 1;
//                 left += 1;
//             }
//         }

//         map.set(char, charCount + 1 || 1);
//         max = Math.max(max, right - left + 1);
//     }

//     return max;
// }
