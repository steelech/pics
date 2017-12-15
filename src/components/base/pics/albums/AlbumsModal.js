import Modal from 'components/ui/modal';
import Albums from 'model/albums';
import Pics from 'model/pics';
import AlbumsModalLoader from 'components/base/pics/albums/AlbumsModalLoader';
import FileUpload from 'components/ui/FileUpload';

const createAlbum = (albumName, files) => {
  return new Promise((resolve, reject) => {
    Albums.create(albumName)
      .then((response) => {
        if (files.length) {
          Pics.send(files, response.albumId)
            .then(() => resolve({
              albumId: response.albumId,
            }));
        } else {
          resolve({
            albumId: response.albumId,
          });
        }
      });
  });
};

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
  handleFileChange(files) {
    this.fileList = files;
    this.onFileChange(this.fileList);
  },
  render({ handleFileChange, handleAlbumNameChange }) {
    this.onFileChange = handleFileChange;
    this.fileList = [];
    this.content = document.createElement('div');
    this.content.id = 'albums-modal-content';
    this.content.classList.add('albums-modal-content');

    const textFieldWrapper = document.createElement('div');
    textFieldWrapper.id = 'albums-modal-textfield-wrapper';
    textFieldWrapper.classList.add('albums-modal-textfield-wrapper');

    const textFieldLabel = document.createElement('div');
    textFieldLabel.id = 'albums-modal-textfield-label';
    textFieldLabel.classList.add('albums-modal-textfield-label');
    textFieldLabel.appendChild(document.createTextNode('Album name: '));

    const textFieldInput = document.createElement('input');
    textFieldInput.id = 'albums-modal-textfield-input';
    textFieldInput.classList.add('albums-modal-textfield-input');
    textFieldInput.type = 'text';
    textFieldInput.autofocus = 'autofocus';
    textFieldInput.placeholder = 'Enter album name';
    textFieldInput.addEventListener('keyup', e => handleAlbumNameChange(e.target.value));

    const textFieldRequired = document.createElement('div');
    textFieldRequired.id = 'album-name-required';
    textFieldRequired.classList.add('album-name-required');

    const requiredIcon = document.createElement('i');
    requiredIcon.id = 'album-name-required-icon';
    requiredIcon.classList.add('album-name-required-icon');
    requiredIcon.classList.add('fa');
    requiredIcon.classList.add('fa-asterisk');
    textFieldRequired.appendChild(requiredIcon);

    textFieldWrapper.appendChild(textFieldLabel);
    textFieldWrapper.appendChild(textFieldInput);
    textFieldWrapper.appendChild(textFieldRequired);

    this.fileUploadWrapper = FileUpload.render({
      onFileChange: files => this.handleFileChange(files),
    });

    this.content.appendChild(textFieldWrapper);
    this.content.appendChild(this.fileUploadWrapper);
    return this.content;
  },
};

const AlbumsModalFooter = ({ handleSubmit, handleCancel, disableClick }) => {
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
  cancelButton.onclick = () => handleCancel();
  cancelButtonWrapper.appendChild(cancelButton);

  const createButtonWrapper = document.createElement('div');
  createButtonWrapper.id = 'albums-modal-create-wrapper';
  createButtonWrapper.classList.add('albums-modal-create-wrapper');

  const createButton = document.createElement('div');
  createButton.id = 'albums-modal-create-button';
  createButton.classList.add('albums-modal-create-button');
  if (disableClick) createButton.classList.add('disable-submit');
  createButton.appendChild(document.createTextNode('Create'));
  createButton.onclick = () => handleSubmit();
  createButtonWrapper.appendChild(createButton);

  footer.appendChild(cancelButtonWrapper);
  footer.appendChild(createButtonWrapper);
  return footer;
};

const AlbumsModal = {
  tearDown() {
    document.body.removeChild(document.getElementById('modal'));
  },
  handleAlbumNameChange(albumName) {
    let reRender = false;
    let disable = false;
    if (this.albumName === '' && albumName !== '') {
      reRender = true;
    }
    if (this.albumName !== '' && albumName === '') {
      reRender = true;
      disable = true;
    }
    this.albumName = albumName;
    this.disableSubmit = disable;
    if (reRender) {
      this.reRenderFooter(disable);
    }
  },
  handleSubmit() {
    if (!(this.albumName === '')) {
      AlbumsModalLoader.render({
        wrapper: this.container,
      });
      createAlbum(this.albumName, this.fileList)
        .then((response) => {
          AlbumsModalLoader.tearDown();
          console.log('response: ', response);
          this.onSubmit(response.albumId);
        });
    }
  },
  handleCancel() {
    console.log('handling cancel');
  },
  handleFileChange(files) {
    this.fileList = files;
  },
  reRenderFooter(disable) {
    this.container.removeChild(this.footer);
    this.footer = AlbumsModalFooter({
      handleSubmit: () => this.handleSubmit(),
      handleCancel: () => this.handleCancel(),
      disableClick: disable,
    });
    this.container.appendChild(this.footer);
  },
  render({ onSubmit }) {
    this.fileList = [];
    this.albumName = '';
    this.disableSubmit = true;
    this.onSubmit = onSubmit;
    this.container = document.createElement('div');
    this.container.id = 'albums-modal';
    this.container.classList.add('albums-modal');

    const header = AlbumsModalHeader();
    const content = AlbumsModalContent.render({
      handleFileChange: files => this.handleFileChange(files),
      handleAlbumNameChange: albumName => this.handleAlbumNameChange(albumName),
    });
    this.footer = AlbumsModalFooter({
      handleSubmit: () => this.handleSubmit(),
      handleCancel: () => this.handleCancel(),
      disableClick: true,
    });

    this.container.appendChild(header);
    this.container.appendChild(content);
    this.container.appendChild(this.footer);

    Modal.render({ child: this.container });
  },
};

export default AlbumsModal;
