class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize;

    this.cache = new Map(maxSize);
  }

  get(key) {
    const val = this.cache.get(key);

    if (val) {
      this.cache.delete(key);

      this.cache.set(key, val);
    }

    return val;
  }

  set(key, val) {
    if (this.cache.has(key)) {
    } else if (this.cache.size === this.maxSize) {
      const first = this.cache.keys().next().value;
      this.cache.delete(first);
    }

    this.cache.set(key, val);
  }
}
