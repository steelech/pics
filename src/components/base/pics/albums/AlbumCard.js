const AlbumCard = {
  render({ album, albumsRow, onClick }) {
    const wrapper = document.createElement('div');
    wrapper.id = 'album-card-container';
    wrapper.classList.add('album-card-container');

    const albumCard = document.createElement('div');
    albumCard.id = 'album-card';
    albumCard.classList.add('album-card');
    albumCard.addEventListener('click', id => onClick());

    const trashIcon = document.createElement('i');
    trashIcon.className = 'fa fa-trash-o';

    const icon = document.createElement('i');
    icon.className = 'fa fa-folder';

    const cardText = document.createElement('div');
    cardText.classList.add('album-card-text');
    cardText.appendChild(document.createTextNode(album.name));

    albumCard.appendChild(icon);
    albumCard.appendChild(cardText);
    wrapper.appendChild(trashIcon);
    wrapper.appendChild(albumCard);
    albumsRow.appendChild(wrapper);
  },
};
export default AlbumCard;
