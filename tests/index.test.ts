// describe('Tests', () => {
//   it.todo('Add your test');
// });

const getUsers = require('../src/data/getUsers');
// import { getUsers } from './data/getUsers';

test('fetch users from json server ', async () => {
  const data = await getUsers();
  expect(data).not.toBe(null);
});

test('fetch contain 10 users', async () => {
  const data = await getUsers();
  await expect(data).toHaveLength(10);
});
