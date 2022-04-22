let isLoading = false;

const button = document.getElementById('load_users');
button.onclick = function () {
  if (!isLoading) {
    isLoading = true;
    const img = document.createElement('img');
    img.setAttribute(
      'src',
      'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif',
    );
    document.body.append(img);
    fetch(
      `https://jsonplaceholder.typicode.com/users?id=${Math.floor(
        Math.random() * 9 + 1,
      )}`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Не получилось получить пользователя');
      })
      .then((json) => {
        notie.alert({ text: 'Пользователь загружен!', time: 1 });
        isLoading = false;
        img.remove();
        const p = document.createElement('p');
        p.setAttribute('style', 'color: white;');
        p.appendChild(document.createTextNode(`name: ${json[0].name}`));
        p.appendChild(document.createElement('br'));
        p.appendChild(document.createTextNode(`username: ${json[0].username}`));
        p.appendChild(document.createElement('br'));
        p.appendChild(document.createTextNode(`email: ${json[0].email}`));
        document.body.append(p);
        console.log(json[0]);
      })
      .catch((error) => {
        img.remove();
        alert(error);
      });
  }
};
