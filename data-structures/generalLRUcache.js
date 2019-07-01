/**
 * more general LRU cache with better methods,
 * made for leetcode 146
 */

class LRUCache{
  constructor(cap){
    this.capacity = cap;
    this.size = 0;
    this.list = new DblLL();
    this.map = new Map();
  }

  get(key){
    const node = this.map.get(key);
    if (!node) return -1;

    this.list.use(node);
    return node.value;
  }

  put(key, value){
    let node = this.map.get(key);
    if (node){
      node.value = value;
      this.list.use(node);
    }else{
      if (this.isFull()){
        const evictedNode = this.list.evict();
        this.map.delete(evictedNode.key);
      }else{
        this.size += 1;
      }
      node = this.list.push(key, value);
    }
    this.map.set(key,node);
  }

  isFull(){
    return this.size === this.capacity;
  }
}

class Node{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DblLL{
  constructor(){
    const head = new Node(null, null);
    const tail = new Node(null, null);
    this.head = head;
    this.tail = tail;
    head.next = tail;
    tail.prev = head;
  }

  push(key, value, node){
    if (!node) node = new Node(key, value);
    const oldTop = this.head.next;

    this.head.next = node;
    oldTop.prev = node;
  
    node.prev = this.head;
    node.next = oldTop;

    return node;
  }

  use(node){
    this.remove(node);
    this.push(null, null, node);
  }

  remove(node){
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    return node;
  }

  evict(){
    const lruNode = this.tail.prev;
    this.remove(lruNode);    
    return lruNode;
  }
}