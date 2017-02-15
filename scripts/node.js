
export default class Node {
  constructor(data) {
    this.data = data;
    // this.next = next;
    this.isWord = false;
    this.children = {};
    this.prefixes = 0;
  }
}
