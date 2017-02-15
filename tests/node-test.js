import { assert, expect } from 'chai';
import Node from '../scripts/node.js';

describe('Node', function() {
it('should have a data property', function() {
  var node = new Node();
  expect(node).to.have.property('data');
});
it('should be a function', function() {
  assert.isFunction(Node);
});
it('should have data', function() {
  var node = new Node('info');
  assert.equal(node.data, 'info');
})
// it('should have a default empty nextNode', function() {
//   var node = new Node('pizza');
//   expect(node.next).to.eq(null);
// })

});
