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
  delete(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          this.dataMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
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
myHashTable.delete("bolt");
myHashTable.display();

// console.log(myHashTable.get('washer'))
