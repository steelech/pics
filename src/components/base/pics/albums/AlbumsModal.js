import Modal from 'components/ui/modal';

const AlbumsModal = {
  drawHeader({ container }) {
    const wrapper = document.createElement('div');
    wrapper.id = 'albums-modal-header';
    wrapper.classList.add('albums-modal-header');

    const headerText = document.createElement('h1');
    headerText.id = 'albums-modal-header-text';
    headerText.classList.add('albums-modal-header-text');
    headerText.appendChild(document.createTextNode('New Album'));

    wrapper.appendChild(headerText);
    container.appendChild(wrapper);
  },
  drawAlbumNameInput({ wrapper }) {
    const albumNameInput = document.createElement('div');
    albumNameInput.id = 'album-name-input';
    albumNameInput.classList.add('album-name-input');

    const albumNameInputField = document.createElement('input');
    albumNameInputField.id = 'album-name-input-field';
    albumNameInputField.classList.add('album-name-input-field');
    albumNameInputField.placeholder = 'Album Name';
    albumNameInput.appendChild(albumNameInputField);

    wrapper.appendChild(albumNameInput);
  },
  drawSubmitButton({ wrapper }) {
    const albumSubmit = document.createElement('div');
    albumSubmit.id = 'album-submit';
    albumSubmit.classList.add('album-submit');

    const albumSubmitButton = document.createElement('div');
    albumSubmitButton.id = 'album-submit-button';
    albumSubmitButton.classList.add('album-submit-button');
    albumSubmitButton.appendChild(document.createTextNode('Submit'));
    albumSubmit.appendChild(albumSubmitButton);
    wrapper.appendChild(albumSubmit);
  },
  drawForm({ container }) {
    const wrapper = document.createElement('div');
    wrapper.id = 'albums-modal-form';
    wrapper.classList.add('albums-modal-form');
    this.drawAlbumNameInput({ wrapper });
    this.drawSubmitButton({ wrapper });
    container.appendChild(wrapper);
  },
  render() {
    const container = document.createElement('div');
    container.id = 'albums-modal';
    container.classList.add('albums-modal');
    this.drawHeader({ container });
    this.drawForm({ container });
    Modal.render(container);
  },
};

export default AlbumsModal;
