import AlbumCard from 'components/base/pics/albums/AlbumCard';

const AlbumsRow = {
  render({ albums, container, onAlbumSelect, onAlbumDelete }) {
    const albumsRow = document.createElement('div');
    albumsRow.id = 'albums-row';
    albumsRow.classList.add('albums-row');
    albums.map(album =>
      AlbumCard.render({
        album,
        albumsRow,
        onClick: () => {
          onAlbumSelect(album._id);
        },
        onAlbumDelete: checked => onAlbumDelete({ albumId: album._id, checked }),
      }),
    );
    return container.appendChild(albumsRow);
  },
};

export default AlbumsRow;
