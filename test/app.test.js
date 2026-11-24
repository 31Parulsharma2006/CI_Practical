const { test } = require('node:test');
const assert = require('node:assert');
const { greet, add } = require('../src/app');

test('greet should return a greeting', () => {
    assert.strictEqual(greet('Parul'), 'Hello, Parul!');
});

test('greet should return default greeting', () => {
    assert.strictEqual(greet(''), 'Hello, Guest!');
});

test('add should return the sum', () => {
    assert.strictEqual(add(5, 3), 8);
});