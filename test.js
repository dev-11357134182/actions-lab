const assert = require('assert');

// Test 1: addition
assert.strictEqual(2 + 2, 4, '2 + 2 should equal 4');
console.log('✓ addition test passed');

// Test 2: string
assert.strictEqual(typeof 'hello', 'string', 'hello should be a string');
console.log('✓ string test passed');

console.log('\nAll tests passed!');