import Albums from 'model/albums';
import AlbumsRow from 'components/base/pics/albums/AlbumsRow';
import Modal from 'components/ui/Modal';

const formatAlbums = (albums, numChunks) => {
  const albumList = [];
  for (let i = 0; i < numChunks; i += 1) {
    albumList.push(albums.slice(i * 4, i * 4 + 4));
  }
  return albumList;
};

const albumsIndex = {
  deleteAlbum(albumId, deletePhotos) {
    Albums.delete({ albumId, deletePhotos })
      .then((response) => {
        console.log('response: ', response);
        Modal.tearDown();
        this.render({ onAlbumSelect: this.onAlbumSelect });
      });
  },
  render({ onAlbumSelect }) {
    if (document.getElementById('albums-index')) {
      document.getElementById('pics-content').removeChild(document.getElementById('albums-index'));
    }
    this.onAlbumSelect = onAlbumSelect;
    Albums.get({}).then((response) => {
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
          onAlbumSelect,
          onAlbumDelete: ({ albumId, checked }) => this.deleteAlbum(albumId, checked),
        };
        AlbumsRow.render(params);
      });
      document.getElementById('pics-content').appendChild(container);
    });
  },
};

export default albumsIndex;
