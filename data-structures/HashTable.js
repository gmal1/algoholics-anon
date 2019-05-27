// naive hash function
function hashFunc(string, size) {
  let hash = 0;
  if (string.length === 0) return hash;

  for (let i = 0; i < string.length; i += 1) {
    const letter = string.charCodeAt(i);
    hash = (hash << 5) - hash + letter;
    hash &= hash; // Convert to 32bit integer
  }

  return Math.abs(hash) % size;
}

class HashTable {
  constructor() {
    this.SIZE = 16;
    this.storage = new Array(this.SIZE);
    this.numberOfItems = 0;
  }

  /**
   * set - Adds given value to the hash table with specified key.
   *
   * - If the provided key has already been used to store another value, simply overwrite
   *   the existing value with the new value.
   * - If the hashed address already contains another key/value pair, you must handle
   *   the collision appropriately.
   *
   * @param {string} key - key to be used to create hashed address
   * @param {string|number|boolean} value - value to be stored in hash table
   * @return {number} The new number of items stored in the hash table
   */

  set(key, value) {
    const hashIndex = hashFunc(key, this.SIZE);
    if (!this.storage[hashIndex]) {
      this.storage[hashIndex] = {};
    }

    this.storage[hashIndex][key] = value;
    this.numberOfItems += 1;
    return this.numberOfItems;
  }

  /**
   * get - Retrieves a value stored in the hash table with a specified key
   *
   * - If more than one value is stored at the key's hashed address, retrieve
   *   the correct value that was originally stored with the provided key
   *
   * @param {string} key - key to lookup in hash table
   * @return {string} The value stored with the specifed key in the hash table
   */

  get(key) {
    const hashIndex = hashFunc(key, this.SIZE);

    if (this.storage[hashIndex][key]) {
      return this.storage[hashIndex][key];
    }
    return 'item not found';
  }

  /**
   * remove - delete a key/value pair from the hash table
   *
   * - If the key does not exist, return undefined
   *
   * @param {string} key - key to be found and deleted in hash table
   * @return {string|number|boolean} The value deleted from the hash table
   */
  remove(key) {
    const hashIndex = hashFunc(key, this.SIZE);
    if (this.get(key)) {
      // save entry before deleting
      const toDelete = this.storage[hashIndex][key];
      delete this.storage[hashIndex][key];
      this.numberOfItems -= 1;
      return toDelete;
    }
    return undefined;
  }
}
