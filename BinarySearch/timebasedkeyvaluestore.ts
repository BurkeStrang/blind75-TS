// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
//
// Implement the TimeMap class:
//
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
//
//
// Example 1:
//
// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]
//
// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         return "bar"
// timeMap.get("foo", 3);         return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         return "bar2"
// timeMap.get("foo", 5);         return "bar2"
//use an hashmap for keys, then each key will have an array (increasing order because of problem rules) of timestamps with values
//(represented as javascript objects {key, value})

interface HashStructure {
    [key: string]: { timestamp: number; value: string }[]; // Modify 'any' to the appropriate type
}

class TimeMap {
    public hash: HashStructure = {}; // Initialize the object with the defined interface

    constructor() {
        this.hash = {};
    }

    set(key: string, value: string, timestamp: number): void {
        if (key in this.hash) {
            this.hash[key].push({ timestamp, value });
        } else this.hash[key] = [{ timestamp, value }];
    }

    get(key: string, timestamp: number): string {
        //if key is not in the hashmap there are no timestamps nor values, return ""
        if (!(key in this.hash)) return "";
        let timestamps = this.hash[key];
        //if there are no timestamps or the first timestamp is already bigger than target timestamp(they are sorted so all next ones will big too), return ""
        if (timestamps.length === 0 || timestamps[0].timestamp > timestamp) return "";

        //starts from the first timestamp as closest
        let closest = timestamps[0];

        let [l, r] = [0, timestamps.length - 1];

        //binary search, but
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (timestamps[mid].timestamp === timestamp) return timestamps[mid].value;
            //update closest if mid element's timestamp is still less than target timestamp
            if (timestamps[mid].timestamp < timestamp) closest = timestamps[mid];

            if (timestamps[mid].timestamp < timestamp) l = mid + 1;
            if (timestamps[mid].timestamp > timestamp) r = mid - 1;
        }

        return closest.value;
    }
}

export { TimeMap };
