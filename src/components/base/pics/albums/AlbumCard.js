const AlbumCard = {
  render({ album, albumsRow, onClick }) {
    const albumCard = document.createElement('div');
    albumCard.id = 'album-card';
    albumCard.classList.add('album-card');

    const icon = document.createElement('i');
    icon.className = 'fa fa-folder';
    albumCard.appendChild(icon);
    albumsRow.appendChild(albumCard);
    debugger
  },
};
export default AlbumCard;
