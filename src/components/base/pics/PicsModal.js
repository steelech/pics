import Modal from 'components/ui/Modal';
import Pics from 'model/pics';
import Albums from 'model/albums';
import FileUpload from 'components/ui/FileUpload';

const PicsModalHeader = () => {
  const wrapper = document.createElement('div');
  wrapper.id = 'pics-modal-header';
  wrapper.classList.add('pics-modal-header');

  const headerText = document.createElement('h1');
  headerText.id = 'pics-modal-header-text';
  headerText.classList.add('pics-modal-header-text');
  headerText.appendChild(document.createTextNode('Add Pictures'));

  wrapper.appendChild(headerText);
  return wrapper;
};

FileList.prototype.toArray = function () {
  const files = [];
  for (let i = 0; i < this.length; i++) {
    files.push(this[i]);
  }
  return files;
};

const PicsModalContent = {
  handleFileChange(files) {
    console.log('files: ', files);
  },
  render({ albums }) {
    this.fileList = [];
    this.content = document.createElement('div');
    this.content.id = 'pics-modal-content';
    this.content.classList.add('pics-modal-content');

    const albumSelectWrapper = document.createElement('div');
    albumSelectWrapper.id = 'album-select-wrapper';
    albumSelectWrapper.classList.add('album-select-wrapper');

    const albumSelectText = document.createElement('div');
    albumSelectText.id = 'album-select-text';
    albumSelectText.classList.add('album-select-text');
    albumSelectText.appendChild(document.createTextNode('Album Select'));

    const albumSelectInput = document.createElement('select');
    albumSelectInput.id = 'album-select-input';
    albumSelectInput.classList.add('album-select-input');

    const defaultOption = document.createElement('option');
    defaultOption.selected = 'selected';
    defaultOption.appendChild(document.createTextNode('None'));
    defaultOption.value = null;
    albumSelectInput.appendChild(defaultOption);

    albums.map((album) => {
      const albumOption = document.createElement('option');
      albumOption.value = album._id;
      albumOption.appendChild(document.createTextNode(album.name));
      albumSelectInput.appendChild(albumOption);
    });

    albumSelectWrapper.appendChild(albumSelectText);
    albumSelectWrapper.appendChild(albumSelectInput);

    this.fileUploadWrapper = FileUpload.render({
      onFileChange: files => this.handleFileChange(files),
    });

    this.content.appendChild(albumSelectWrapper);
    this.content.appendChild(this.fileUploadWrapper);
    return this.content;
  },
};

const PicsModalFooter = () => {
  const footer = document.createElement('div');
  footer.id = 'pics-modal-footer';
  footer.classList.add('pics-modal-footer');

  const cancelButtonWrapper = document.createElement('div');
  cancelButtonWrapper.id = 'pics-modal-cancel-wrapper';
  cancelButtonWrapper.classList.add('pics-modal-cancel-wrapper');

  const cancelButton = document.createElement('div');
  cancelButton.id = 'pics-modal-cancel-button';
  cancelButton.classList.add('pics-modal-cancel-button');
  cancelButton.appendChild(document.createTextNode('Cancel'));
  cancelButtonWrapper.appendChild(cancelButton);

  const createButtonWrapper = document.createElement('div');
  createButtonWrapper.id = 'pics-modal-create-wrapper';
  createButtonWrapper.classList.add('pics-modal-create-wrapper');

  const createButton = document.createElement('div');
  createButton.id = 'pics-modal-create-button';
  createButton.classList.add('pics-modal-create-button');
  createButton.appendChild(document.createTextNode('Create'));
  createButtonWrapper.appendChild(createButton);

  footer.appendChild(cancelButtonWrapper);
  footer.appendChild(createButtonWrapper);
  return footer;
};

const PicsModal = {
  render(params) {
    Albums.get({}).then(albums => {
      this.fileList = [];
      const picsModal = document.createElement('div');
      picsModal.classList.add('pics-modal');
      picsModal.id = 'pics-modal';

      const header = PicsModalHeader();

      const content = PicsModalContent.render({ albums });

      const footer = PicsModalFooter();

      picsModal.appendChild(header);
      picsModal.appendChild(content);
      picsModal.appendChild(footer);
      Modal.render({ child: picsModal });
    });
  },
};

export default PicsModal;
