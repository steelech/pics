import Albums from 'model/albums';
import AlbumsRow from 'components/base/pics/albums/AlbumsRow';

const formatAlbums = (albums, numChunks) => {
  const albumList = [];
  for (let i = 0; i < numChunks; i += 1) {
    albumList.push(albums.slice(i * 4, i * 4 + 4));
  }
  return albumList;
};

const albumsIndex = {
  render() {
    Albums.get().then((response) => {
      const container = document.createElement('div');
      container.id = 'albums-index';
      container.classList.add('albums-index');

      // split them up into groups of 4, render a AlbumsRow for each
      const numChunks = Math.ceil(response.length / 4);
      const albumList = formatAlbums(response, numChunks);
      albumList.map((albums) => {
        const params = {
          albums,
          container,
        };
        AlbumsRow.render(params);
      });
      document.getElementById('pics-content').appendChild(container);
    });
  },
};

export default albumsIndex;
