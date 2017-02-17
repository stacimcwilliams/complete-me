export default class Node {
  constructor(data) {
    this.data = data;
    this.isWord = false;
    this.children = {};
    this.selectedSubstring = false;
    this.priorityWeight = 0;
  }
}
