import { assert, expect } from 'chai';
import Trie from '../scripts/trie.js';
import Node from '../scripts/node.js';

describe('Trie', function() {
it('should be a function', function() {
  var trie = new Trie();
  assert.isFunction(Trie);
});

it('should have a function called insert', function() {
  var trie = new Trie(node);

  assert.isFunction(trie.insert);
});

it('insert should push in data', function() {
  var trie = new Trie();
  trie.insert('pizza')
  expect(trie.head.data).to.equal('pizza')
});

it('length should start at 0', function() {
  var trie = new Trie();
  expect(trie.length).to.equal(0);
})

it('should keep a count', function() {
  var trie = new Trie();
  trie.insert('pizza')
  trie.insert('hotdog')

  trie.count()
  console.log(trie)
  expect(trie.length).to.equal(2)
  console.log(JSON.stringify(trie, null, 4))
})
})
