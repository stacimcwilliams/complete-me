import Node from './node.js'

export default class Trie {
  constructor() {
    this.length = 0;
    this.head = null;
    this.children = []
  }
  insert(data) {
    this.head = new Node(data, this.head)
    this.length++;
  }
  count() {
    return this.length;
  }
}















// var newNode = new Node(data, this.head),
// currentNode = this.head;
// if(!currentNode) {
//   this.head = newNode;
//   this.count++;
//   return newNode
// }
// while(currentNode.next) {
//   currentNode = currentNode.next;
//   this.count++;
//   return newNode;
// }
