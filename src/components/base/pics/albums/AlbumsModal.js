import Modal from 'components/ui/modal';

const AlbumsModal = {
  render({ container }) {
    console.log('rendering albums modal');
    const albumsModal = document.createElement('div');
    albumsModal.id = 'albums-modal';
    albumsModal.classList.add('albums-modal');
    albumsModal.appendChild(document.createTextNode('Albums Modal'));
    Modal.render(albumsModal);
  },
};

export default AlbumsModal;
