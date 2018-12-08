'use strict';
const assert = require('chai').assert;
const add = require('../lib');

describe('test', function() {
  it('adds', function() {
    assert.equal(
      add(1, 2),
      3
    );
  });
});
