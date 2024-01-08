export const getAlbums = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch(console.error);
};
