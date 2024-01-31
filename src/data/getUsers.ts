export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch(console.error);
};

module.exports = getUsers;
