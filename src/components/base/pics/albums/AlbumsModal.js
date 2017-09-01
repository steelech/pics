import Modal from 'components/ui/modal';
import Albums from 'model/albums';

const AlbumsModal = {
  tearDown() {
    document.body.removeChild(document.getElementById('modal'));
  },
  handleSubmit() {
    const albumName = document.getElementById('album-name-input-field').value;
    Albums.create(albumName).then(this.onSubmit);
    this.tearDown();
  },
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
    albumNameInputField.autofocus = true;
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

    albumSubmitButton.addEventListener('click', () => this.handleSubmit());
    albumSubmitButton.addEventListener('mousedown', () => {
      document.getElementById('album-submit-button').classList.add('clicked');
    });
    albumSubmitButton.addEventListener('mouseup', () => {
      document.getElementById('album-submit-button').classList.remove('clicked');
    });

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
  render({ onSubmit }) {
    this.onSubmit = () => onSubmit();
    const container = document.createElement('div');
    container.id = 'albums-modal';
    container.classList.add('albums-modal');
    this.drawHeader({ container });
    this.drawForm({ container });
    Modal.render(container);
  },
};

export default AlbumsModal;
