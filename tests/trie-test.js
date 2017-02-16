import { assert, expect } from 'chai';
import Trie from '../scripts/trie.js';
import Node from '../scripts/node.js';
require ('locus')

describe('Trie', function() {
  it('should be a function', function() {
    var trie = new Trie();
    assert.isFunction(Trie);
  });

  it('should have a function called insert', function() {
    let node = new Node()
    let trie = new Trie();
    assert.isFunction(trie.insert);
  });

  it('insert should push in data', function() {
    // let node = new Node();
    let trie = new Trie()
    trie.insert('pizza')
    trie.insert('peter')
    assert.equal(trie.length,2)
  });

  it('length should start at 0', function() {
    var trie = new Trie();
    expect(trie.length).to.equal(0);
  });

  it('should keep a count', function() {
    var node = new Node()
    var trie = new Trie();
    trie.count(node);
    trie.insert('pizza')
    trie.insert('peter')
    // console.log(trie.count)
    expect(trie.length).to.equal(2);
  });

  it('should have a suggest function', function() {
    let node = new Node()
    var trie = new Trie();
    assert.isFunction(trie.suggest);
  });

    it('suggest function should return matches to partial words', function() {
      var trie = new Trie();
      trie.insert('pizza');
      trie.insert('hotdog');
      // trie.insert('hog');
      // console.log(JSON.stringify(trie.root, null, 4));

      trie.suggest('hot')
      // console.log(JSON.stringify(trie.root, null, 4));

      assert.deepEqual(trie.suggestions,['hotdog']);
    });

  it('should be able to check if property to exist on root', function() {
    var trie = new Trie();
    trie.insert('bananas');
    expect(trie.root.children).to.have.property('b');
  });

  it('should check properties on child notes', function() {
    var trie = new Trie()
    trie.insert('bananas')
    expect(trie.root.children.b.children.a.children).to.have.property('n')
  })
});
