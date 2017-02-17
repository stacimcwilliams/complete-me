import Node from './node.js';

export default class Trie {
  constructor() {
    this.root = new Node('');
    this.length = 0;
    this.suggestions = [];
    this.suggestionsObj = {};
  }

  populate(array) {
    array.forEach((word) => {
      this.insert(word);
    });
  }

  insert(word) {
    let wordArr = word.split('');
    let current = this.root;

    wordArr.forEach(letter => {
      if (current.children[letter]) {
        current = current.children[letter];

      } else {
        current.children[letter] = new Node(letter);
        current = current.children[letter];
      }
    });
    current.isWord = true;
    this.length++;
  }

  suggest(string) {
    let currentNode = this.root;
    let letters = string.split('');

    for (var i = 0; i < letters.length; i++) {

      if (currentNode.children[letters[i]]) {
        currentNode = currentNode.children[letters[i]];
      } else {
        return null;
      }
    }

    return this.words(currentNode, string);
  }

  count() {
    let currentNode = this.root;

    if (currentNode.children) {
      currentNode = currentNode.children;
    } if (currentNode.isWord === true) {
      this.length ++;
    }
    return this.length;
  }
  
  words(current, string) {

    if (current.isWord) {
      this.suggestions.push(string);
    }

    let nodeKeys = Object.keys(current.children);

    nodeKeys.forEach((letter) => {
      let nextNode = current.children[letter];
      this.words(nextNode, string + letter);
    });
    return this.suggestions;
  }

  select(substring, suggestion){
    let currentIndex = this.suggestions.indexOf(suggestion);
    let targetWord = this.suggestions.splice(currentIndex,1);

    this.suggestions.unshift(targetWord[0]);
    this.suggestionsObj[substring] = this.suggestions;
  }
}
