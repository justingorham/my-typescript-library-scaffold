import { Foo } from './foo';

test('foo class', () => {
  const foo = new Foo('bar');
  expect(foo.bar).toBe('bar');
});
