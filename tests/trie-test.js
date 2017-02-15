import { assert, expect } from 'chai';
import Trie from '../scripts/trie.js';
import Node from '../scripts/node.js';
require ('locus')

describe('Trie', function() {
  it('should be a function', function() {
    var trie = new Trie();
    assert.isFunction(Trie);
  });

  it('should have a function called add', function() {
    let node = new Node()
    let trie = new Trie();
    assert.isFunction(trie.add);
  });

  it.only('add should push in data', function() {
    let node = new Node();
    let trie = new Trie
    trie.add(node,'pizza')
    eval(locus)
    assert.equal(trie.add(), 'pizza')
  });

  it.skip('length should start at 0', function() {
    var trie = new Trie();
    expect(trie.length).to.equal(0);
  });

  it.skip('should keep a count', function() {
    var node = new Node()
    var trie = new Trie();
    trie.count(node);
    console.log(trie.count)
    expect(trie.length).to.equal(2);
  });

  it('should have a suggest function', function() {
    let node = new Node()
    var trie = new Trie();
    assert.isFunction(trie.suggest);
  });

  it.skip('suggest function should return matches to partial words', function() {
    var trie = new Trie();
    trie.insert('pizza');
    trie.insert('hotdog');
    trie.insert('hog');

    expect(trie.suggest('ho')).to.equal(['hotdog', 'hog']);
  });
});
