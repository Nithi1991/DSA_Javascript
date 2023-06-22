class Hashtable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let allkeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allkeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allkeys
  }
  display() {
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        console.log(`Index ${i}: ${JSON.stringify(this.dataMap[i])}`);
      } else {
        console.log(`Index ${i}: Empty`);
      }
    }
  }

}
let myHashTable = new Hashtable();
myHashTable.set("bolt", 1000);
myHashTable.set("washer", 70);
myHashTable.set("screws", 170);

// console.log(myHashTable.get("washer"));
console.log(myHashTable.keys());
myHashTable.display()
