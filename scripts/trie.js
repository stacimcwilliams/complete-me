import Node from './node.js';

export default class Trie {
  constructor() {
    this.root = new Node('');
    this.length = 0;
    this.suggestions = []
  }

  populate(dictionary) {
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n')
    dictionary.forEach((word) => {
      this.insert(word)
      console.log('hi')
    }

  }

  insert(word) {
    let wordArr = word.split('');
    let current = this.root

    wordArr.forEach((letter,index) => {
      if(current.children[letter]) {
        current = current.children[letter]
      } else {
        current.children[letter] = new Node(letter)
        current = current.children[letter]
      }
    })
    current.isWord = true;
    this.length++;
  }

  count() {
    return this.length;
  }

  suggest(string) {
    let currentNode = this.root;
    let letters = string.split('');

    letters.forEach((letter) => {
      if (currentNode.children[letter]) {
        currentNode = currentNode.children[letter]
      } else {
        return null
      }
    })

    this.words(currentNode, string)
  }

  words(node, string) {
    if (node.isWord) {
      this.suggestions.push(string)
    }

    let nodeKeys = Object.keys(node.children)

    nodeKeys.forEach((letter) => {
      let nextNode = node.children[letter]
      this.words(nextNode, string + letter);
    })
  }
}
// words(node,string) {

// }
// addNode(node, word) {
//   if(!node || !word) {
//     return null
//   }
//   node.prefixes++;
//   let letter = word.charAt(0);
//   let child = node.children[letter];
//   if(!child) {
//     child = new Node(letter);
//     node.children[letter] = child;
//   }
//   var remainder = word.substring(1);
//   if(!remainder) {
//     child.isWord = true;
//   }
//   // console.log(JSON.stringify(trie, null, 4))
//   this.addNode(child,remainder);
// }
//
// add(node, word) {
//   if(!this.root) {
//     return null;
//   }
//   this.addNode(this.root, word);
// }


// suggest(node, word) {
//   if(!this.root) {
//     return false;
//   }
//   return this.contains(this.root, word);
// }
//
// contains(node, word) {
//   if(!node || !word){
//   return false;
// }
// var letter = word.charAt(0);
// var child = node.children[letter]
// if(child) {
//   var remainder = word.substring(1);
//   if(!remainer && child.isWord) {
//     return true;
//   } else {
//     return this.contains(child, remainder);
//   }
// } else {
//   return false;
// }
// }
//
// count(node) {
//   if(!this.root) {
//     return console.log('No root node found')
//   }
//   let chain = [this.root];
//   let counter = 0;
//   while(chain.length) {
//     var node = chain.shift();
//     if(node.isWord) {
//       counter++;
//     }
//     for(var child in node.children) {
//       if(node.children.hasOwnProperty(child)) {
//         chain.push(node.children[child])
//       }
//     }
//   }
//   return counter;
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



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

// count() {
//   return this.length;
// }
// suggest(fragment) {
//receive a string with a partial word in it
// need to return the matched full word in our trie

// use forEach and for as a last option
//filter,map and reduce
//push into child nodes array and then compare
//dont rely on the array of child nodes to heavily
//retreive node array
