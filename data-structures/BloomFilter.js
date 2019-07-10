export default class BloomFilter {
  constructor(size = 100) {
    // Bloom filter size directly affects the likelihood of false positives.
    // The bigger the size the lower the likelihood of false positives.
    this.size = size;
    this.storage = this.createStore(size);
  }

  insert(item) {
    const hashValues = this.getHashValues(item);

    // Set each hashValue index to true.
    hashValues.forEach(val => this.storage.setValue(val));
  }

  mayContain(item) {
    const hashValues = this.getHashValues(item);

    for (let hashVal of hashValues) {
      if (!this.storage.getValue(hashVal)) {
        // We know that the item was definitely not inserted.
        return false;
      }
    }

    // The item may or may not have been inserted.
    return true;
  }

  /**
   * Creates the data store for our filter.
   * We use this method to generate the store in order to
   * encapsulate the data itself and only provide access
   * to the necessary methods.
   */
  createStore(size) {
    // Initialize all indexes to false
    const storage = Array(size).fill(false);

    const storageInterface = {
      getValue(index) {
        return storage[index];
      },
      setValue(index) {
        storage[index] = true;
      },
    };

    return storageInterface;
  }

  //Runs all 3 hash functions on the input and returns an array of results.
  getHashValues(item) {
    return [this.hash1(item), this.hash2(item), this.hash3(item)];
  }

  hash1(item) {
    let hash = 0;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char;
      hash &= hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }

    return hash % this.size;
  }

  hash2(item) {
    let hash = 5381;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) + hash + char; /* hash * 33 + c */
    }

    return Math.abs(hash % this.size);
  }

  hash3(item) {
    let hash = 0;

    for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
      const char = item.charCodeAt(charIndex);
      hash = (hash << 5) - hash;
      hash += char;
      hash &= hash; // Convert to 32bit integer
    }

    return Math.abs(hash % this.size);
  }
}
