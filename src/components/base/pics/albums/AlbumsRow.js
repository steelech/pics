import AlbumCard from 'components/base/pics/albums/AlbumCard';

const AlbumsRow = {
  render({ albums, container }) {
    debugger
    const albumsRow = document.createElement('div');
    albumsRow.id = 'albums-row';
    albumsRow.classList.add('albums-row');
    albums.map(album => AlbumCard.render({ album, albumsRow }));
    return container.appendChild(albumsRow);
  },
};

export default AlbumsRow;
