// design a time-based key-value data structure that can store multiple values for the same
// key at different time stamps and retrieve the key's value at a certain timestamp

// init data structure
 var TimeMap = function() {
  this.values = {};
};

// O(1)
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.values[key]) this.values[key] = {};

  this.values[key][timestamp] = value;
};

// O(t)   t = length of timestamp
TimeMap.prototype.get = function(key, timestamp) {
  const getPrevTimestampValue = (targetKey, ts) => {
      let currTs = ts - 1;

      while (currTs > 0) {
          if (this.values[targetKey][currTs]) return this.values[targetKey][currTs];

          currTs -= 1;
      }

      return '';
  };

  // if key does not exist
  if (!this.values[key]) return '';

  // if key exists, but timestamp does not, return last added value of given key
  if (!this.values[key][timestamp]) {
      return getPrevTimestampValue(key, timestamp);
  }
  // key and timestamp exist, so return its corresponding value
  return this.values[key][timestamp];
};

//todo: improve .get() so n = number of timestamps associated with key


/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// ["TimeMap","set","set","get","get","get","get","get"]
// [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
// ===> [null,null,null,"","high","high","low","low"]

// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// ===> [null, null, "bar", "bar", null, "bar2", "bar2"]