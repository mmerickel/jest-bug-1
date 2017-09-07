const {Record} = require('immutable');

test('equals', () => {
  const TestRecord = Record({'a': undefined});
  const a = new TestRecord({a: 1});
  const b = new TestRecord({a: 2});
  expect(a).not.toEqual(b);
});
