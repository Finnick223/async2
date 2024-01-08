import { getUsers } from './data/getUsers';
import { getAlbums } from './data/getAlbums';

const getContainer = () => {
  const container = document.querySelector<HTMLDivElement>('.container');
  if (!container) throw new Error('container doesnt exist');

  const loader = document.querySelector<HTMLDivElement>('.loader');
  return {
    container,
    loader,
  };
};

const renderUser = (
  id: number,
  username: string,
  userphone: string,
  useremail: string,
) => {
  const user = document.createElement('div');
  user.id = String(id);
  user.classList.add('user');

  const name = document.createElement('h2');
  name.textContent = username;
  name.classList.add('username');

  const address = document.createElement('div');
  const userInfo = document.createElement('span');
  userInfo.innerText = `Phone: ${userphone}
  E-mail: ${useremail}`;
  address.appendChild(userInfo);

  const btn = document.createElement('button');
  btn.classList.add('showPosts');
  btn.textContent = 'show posts';

  const posts = document.createElement('ul');
  posts.classList.add(`userposts`);
  posts.id = `userposts${String(id)}`;

  const { container } = getContainer();
  container.appendChild(user);
  user.appendChild(name);
  user.appendChild(address);
  user.appendChild(btn);
  user.appendChild(posts);
};

const renderAlbums = (id: string, title: string) => {
  const li = document.createElement('li');
  li.classList.add('posts');

  const h3 = document.createElement('h4');
  h3.classList.add('posttitle');
  h3.textContent = title;

  const userposts = document.getElementById(`userposts${String(id)}`);
  userposts?.appendChild(li);
  li.appendChild(h3);
};

const clearAlbums = (id: string) => {
  const userposts = document.getElementById(`userposts${String(id)}`);
  if (!userposts) throw new Error('nie ma postow do wyczyszczenia');
  userposts.innerHTML = '';
};

//! INITTTTTT

const init = async () => {
  try {
    const data = await getUsers();
    // console.log(data[0]);
    // console.log(data[0].id);
    // console.log(data[0].name);
    // console.log(data[0].username);
    // await sleep(2000);
    // console.log('data', data);
    for (const i in data) {
      renderUser(data[i].id, data[i].username, data[i].phone, data[i].email);
    }
  } catch (e) {
    console.log(e);
  }

  const buttons = document.querySelectorAll('.showPosts');
  buttons.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const user = e.target as HTMLDivElement;
      const userid = String((user?.parentNode as HTMLDivElement).id);

      if (button.id === 'showed') {
        clearAlbums(userid);
        button.removeAttribute('id');
        button.textContent = 'show posts';
        return;
      }

      const albums = await getAlbums(userid);
      console.log(albums);
      for (const i in albums) {
        renderAlbums(userid, albums[i].title);
      }
      button.id = 'showed';
      button.textContent = 'hide posts';
    });
  });
};

init();
