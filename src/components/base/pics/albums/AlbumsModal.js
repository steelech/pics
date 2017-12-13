import Modal from 'components/ui/modal';
import Albums from 'model/albums';

const AlbumsModalHeader = () => {
  const wrapper = document.createElement('div');
  wrapper.id = 'albums-modal-header';
  wrapper.classList.add('albums-modal-header');

  const headerText = document.createElement('h1');
  headerText.id = 'albums-modal-header-text';
  headerText.classList.add('albums-modal-header-text');
  headerText.appendChild(document.createTextNode('New Album'));

  wrapper.appendChild(headerText);
  return wrapper;
};

const AlbumsModalContent = {
  render() {
    const content = document.createElement('div');
    content.id = 'albums-modal-content';
    content.classList.add('albums-modal-content');
    content.appendChild(document.createTextNode('Content'));

    return content;
  },
};

const AlbumsModalFooter = () => {
  const footer = document.createElement('div');
  footer.id = 'albums-modal-footer';
  footer.classList.add('albums-modal-footer');

  const cancelButtonWrapper = document.createElement('div');
  cancelButtonWrapper.id = 'albums-modal-cancel-wrapper';
  cancelButtonWrapper.classList.add('albums-modal-cancel-wrapper');

  const cancelButton = document.createElement('div');
  cancelButton.id = 'albums-modal-cancel-button';
  cancelButton.classList.add('albums-modal-cancel-button');
  cancelButton.appendChild(document.createTextNode('Cancel'));
  cancelButtonWrapper.appendChild(cancelButton);

  const createButtonWrapper = document.createElement('div');
  createButtonWrapper.id = 'albums-modal-create-wrapper';
  createButtonWrapper.classList.add('albums-modal-create-wrapper');

  const createButton = document.createElement('div');
  createButton.id = 'albums-modal-create-button';
  createButton.classList.add('albums-modal-create-button');
  createButton.appendChild(document.createTextNode('Create'));
  createButtonWrapper.appendChild(createButton);

  footer.appendChild(cancelButtonWrapper);
  footer.appendChild(createButtonWrapper);
  return footer;
};

const AlbumsModal = {
  tearDown() {
    document.body.removeChild(document.getElementById('modal'));
  },
  handleSubmit() {
    const albumName = document.getElementById('album-name-input-field').value;
    Albums.create(albumName).then(this.onSubmit);
    this.tearDown();
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
  drawPicCreateCheckbox({ wrapper }) {
    const picCreateCheckboxWrapper = document.createElement('div');
    picCreateCheckboxWrapper.id = 'pic-create-checkbox-wrapper';
    picCreateCheckboxWrapper.classList.add('pic-create-checkbox-wrapper');

    const addPicsCheckbox = document.createElement('input');
    addPicsCheckbox.id = 'add-pics-checkbox';
    addPicsCheckbox.classList.add('add-pics-checkbox');
    addPicsCheckbox.type = 'checkbox';

    const addPicsLabel = document.createElement('div');
    addPicsLabel.id = 'add-pics-label';
    addPicsLabel.classList.add('add-pics-label');
    addPicsLabel.appendChild(document.createTextNode('Add images now'));

    picCreateCheckboxWrapper.appendChild(addPicsCheckbox);
    picCreateCheckboxWrapper.appendChild(addPicsLabel);
    wrapper.appendChild(picCreateCheckboxWrapper);
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
    this.drawPicCreateCheckbox({ wrapper });
    this.drawSubmitButton({ wrapper });
    container.appendChild(wrapper);
  },
  render({ onSubmit }) {
    this.onSubmit = () => onSubmit();
    const container = document.createElement('div');
    container.id = 'albums-modal';
    container.classList.add('albums-modal');

    const header = AlbumsModalHeader();
    const content = AlbumsModalContent.render();
    const footer = AlbumsModalFooter();

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    Modal.render({ child: container });
  },
};

export default AlbumsModal;
