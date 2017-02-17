import { assert, expect } from 'chai';
import Trie from '../scripts/trie.js';
import Node from '../scripts/node.js';
const fs = require('fs');


describe('Trie', function() {

  let trie;

  beforeEach(() => {
    trie = new Trie ();
  })

  it('should be a function',() => {
    assert.isFunction(Trie);
  });

  it('should have a function called insert', () => {
    assert.isFunction(trie.insert);
  });

  it('insert should push in data', () => {
    trie.insert('pizza');
    trie.insert('peter');
    assert.equal(trie.length,2);
  });

  it('length should start at 0', () => {
    expect(trie.length).to.equal(0);
  });

  it('should keep a count', () => {
    var node = new Node();
    trie.count(node);
    trie.insert('pizza');
    trie.insert('peter');
    expect(trie.length).to.equal(2);
  });

  it('should have a suggest function',() => {
    assert.isFunction(trie.suggest);
  });

  it('suggest function should return matches to partial words',() => {
    trie.insert('pizza');
    trie.insert('hotdog');
    trie.suggest('hot');
    assert.deepEqual(trie.suggestions,['hotdog']);
  });

  it('should be able to check if property to exist on root',() => {
    trie.insert('bananas');
    expect(trie.root.children).to.have.property('b');
  });

  it('should check properties on child notes', () => {
    trie.insert('bananas');
    expect(trie.root.children.b.children.a.children).to.have.property('n');
  });

  it('suggest should not return anything if the partial word does not match', () => {
    trie.insert('hello');
    trie.suggest('la');
    assert.deepEqual(trie.suggestions, []);
  });

  it('should have a function called populate', () => {
    assert.isFunction(trie.populate);
  });

  it('populate function contain 235886 words', () => {
    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    trie.populate(dictionary);
    assert.equal(trie.count(), 235886);
  });

  it('suggest should return an empty array if there are no matching word', () => {
    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    trie.populate(dictionary);
    trie.suggest('td');
    assert.deepEqual(trie.suggestions, []);
  });

  it('should return some words in the suggestions array', () => {
    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    trie.populate(dictionary);
    trie.suggest('piz');
    assert.deepEqual(trie.suggestions, ['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
  });

  it('should return matching words in the suggestions array', () => {
    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    trie.populate(dictionary);
    trie.suggest('heade');
    assert.deepEqual(trie.suggestions, [ 'headed', 'headender', 'header' ]);
  });

  it('should let select determine the importance in the array', () => {
    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    trie.populate(dictionary);
    trie.suggest('piz');
    trie.select('piz','pizzeria');
    assert.deepEqual(trie.suggestions, ['pizzeria', 'pize', 'pizza', 'pizzicato','pizzle' ]);
  });
});
