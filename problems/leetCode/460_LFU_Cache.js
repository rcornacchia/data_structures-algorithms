// Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and set.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// set(key, value) - Set or insert the value if the key is not already present.
// When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item.
// For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency),
// the least recently used key would be evicted.

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.stack = [];
    }

    get(key) {

    }

    set(key, value) {
        if (this.stack.length < capacity) {
            this.stack.push()
        }
    }
}

const cache = new LFUCache(2);

// cache.set(1, 1);
// cache.set(2, 2);
// cache.get(1);       // returns 1
// cache.set(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.get(3);       // returns 3.
// cache.set(4, 4);    // evicts key 1.
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
