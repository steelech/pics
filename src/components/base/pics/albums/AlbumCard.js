import Modal from 'components/ui/Modal';

const AlbumDeleteHeader = {
  render() {
    const header = document.createElement('h1');
    header.id = 'album-delete-header';
    header.classList.add('album-delete-header');
    header.appendChild(document.createTextNode('Delete Album'));
    return header;
  },
};

const AlbumDeleteContent = {
  render({ albumName, onCheck }) {
    const content = document.createElement('div');
    content.id = 'album-delete-content';
    content.classList.add('album-delete-content');

    const confirmText = document.createElement('div');
    confirmText.id = 'album-delete-content-text';
    confirmText.classList.add('album-delete-content-text');
    confirmText.appendChild(document.createTextNode(`Are you sure you want to delete the album, ${albumName}?`));

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.id = 'delete-album-content-checkbox';
    checkboxWrapper.classList.add('delete-album-content-checkbox');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = e => onCheck(e.target.checked);
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(document.createTextNode('Delete all pictures associated with this album'));

    content.appendChild(confirmText);
    content.appendChild(checkboxWrapper);
    return content;
  },
};

const AlbumDeleteFooter = {
  render({ onCancel, onDelete }) {
    const footer = document.createElement('div');
    footer.id = 'album-delete-footer';
    footer.classList.add('album-delete-footer');

    const cancelButtonWrapper = document.createElement('div');
    cancelButtonWrapper.id = 'album-delete-cancel';
    cancelButtonWrapper.classList.add('album-delete-cancel');

    const cancelButton = document.createElement('div');
    cancelButton.id = 'album-delete-cancel-button';
    cancelButton.classList.add('album-delete-cancel-button');
    cancelButton.appendChild(document.createTextNode('Cancel'));
    cancelButton.addEventListener('click', onCancel);
    cancelButtonWrapper.appendChild(cancelButton);

    const confirmButtonWrapper = document.createElement('div');
    confirmButtonWrapper.id = 'album-delete-confirm';
    confirmButtonWrapper.classList.add('album-delete-confirm');

    const confirmButton = document.createElement('div');
    confirmButton.id = 'album-delete-confirm-button';
    confirmButton.classList.add('album-delete-confirm-button');
    confirmButton.appendChild(document.createTextNode('Delete'));
    confirmButton.addEventListener('click', onDelete);
    confirmButtonWrapper.appendChild(confirmButton);

    footer.appendChild(cancelButtonWrapper);
    footer.appendChild(confirmButtonWrapper);

    return footer;
  },
};

const AlbumDeleteModal = {
  tearDown() {
    Modal.tearDown();
  },
  render({ albumName, onDelete }) {
    this.checked = false;
    const container = document.createElement('div');
    container.id = 'album-delete-container';
    container.classList.add('album-delete-container');

    const header = AlbumDeleteHeader.render();

    const content = AlbumDeleteContent.render({
      albumName,
      onCheck: (checked) => {
        this.checked = checked;
      },
    });

    const footer = AlbumDeleteFooter.render({
      onCancel: () => this.tearDown(),
      onDelete: () => {
        onDelete(this.checked);
        this.tearDown();
      },
    });

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);
    Modal.render({ child: container });
  },
};

const AlbumCard = {
  render({ album, albumsRow, onClick, onAlbumDelete }) {
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

    trashIcon.onclick = (e) => AlbumDeleteModal.render({
      albumName: album.name,
      onDelete: checked => onAlbumDelete(checked),
    });

    albumCard.appendChild(icon);
    albumCard.appendChild(cardText);
    wrapper.appendChild(trashIcon);
    wrapper.appendChild(albumCard);
    albumsRow.appendChild(wrapper);
  },
};
export default AlbumCard;
