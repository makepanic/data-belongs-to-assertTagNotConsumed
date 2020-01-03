export default function(server) {
  const bar = server.create('bar', { name: 'Bar' });
  const foo = server.create('foo', { bar, name: 'Foo' });
  server.create('base', { foo });
}
