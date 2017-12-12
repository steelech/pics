const Albums = {
  create(name) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('name', name);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8888/albums', true);
      xhr.send(formData);

      xhr.onload = () => {
        resolve();
      };
    });
  },
  get(query) {
    const id = (query || {}).id;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const albumsQuery = id ? `?id=${id}` : '';
      xhr.open('GET', `http://localhost:8888/albums${albumsQuery}`, true);
      xhr.send();
      xhr.onload = function () {
        resolve(JSON.parse(this.response));
      };
    });
  },
  delete(query) {
    const id = (query || {}).albumId;
    const deletePics = (query || {}).deletePhotos;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      let queryString = '';
      if (id) queryString += `?id=${id}`;
      if (deletePics) {
        queryString += deletePics
          ? '&deletePics=true'
          : '?deletePics=true';
      }
      xhr.open('DELETE', `http://localhost:8888/albums${queryString}`);
      xhr.send();
      xhr.onload = function () {
        resolve(JSON.parse(this.response));
      };
    });
  },
};

export default Albums;
