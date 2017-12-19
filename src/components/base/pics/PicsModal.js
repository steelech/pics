import Modal from 'components/ui/Modal';
import Pics from 'model/pics';
import Albums from 'model/albums';
import FileUpload from 'components/ui/FileUpload';
import AlbumsModalLoader from 'components/base/pics/albums/AlbumsModalLoader';


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
  onSelectChange(e) {
    this.handleSelectChange(e);
    const albumName = e.target.options[e.target.selectedIndex].text;
    const album = this.albums.filter((thisAlbum) => {
      return thisAlbum.name === albumName;
    })[0];
    this.handleSelectChange((album));
  },
  render({ albums, handleFileChange, handleSelectChange }) {
    this.albums = albums;
    this.handleFileChange = handleFileChange;
    this.handleSelectChange = handleSelectChange;
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
    albumSelectInput.onchange = (e) => this.onSelectChange(e);

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

const PicsModalFooter = ({ disable, handleSubmit }) => {
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
  createButton.onclick = () => handleSubmit();
  createButtonWrapper.appendChild(createButton);
  if (disable) createButton.classList.add('disable-submit');

  footer.appendChild(cancelButtonWrapper);
  footer.appendChild(createButtonWrapper);
  return footer;
};

const PicsModal = {
  handleSubmit() {
    if (this.fileList.length) {
      AlbumsModalLoader.render({
        wrapper: this.container,
      });
      const _id = (this.album || {})._id;
      Pics.send(this.fileList, _id)
        .then(() => {
          AlbumsModalLoader.tearDown();
          this.onSubmit(_id);
        });
    }
  },
  handleFileChange(files) {
    let disable = false;
    let reRender = false;
    if (!files.length) {
      disable = true;
      if (this.fileList.length) {
        reRender = true;
      }
    } else {
      if (!this.fileList.length) {
        reRender = true;
      }
    }
    if (reRender) this.reRenderFooter(disable);
    this.fileList = files;
  },
  handleSelectChange(album) {
    this.album = album;
  },
  reRenderFooter(disable) {
    this.container.removeChild(this.footer);
    this.footer = PicsModalFooter({
      disable,
      handleSubmit: () => this.handleSubmit(),
    });
    this.container.appendChild(this.footer);
  },
  render({ onSubmit }) {
    this.onSubmit = onSubmit;
    this.album = null;
    this.fileList = [];
    this.container = document.createElement('div');
    this.container.classList.add('pics-modal');
    this.container.id = 'pics-modal';
    Albums.get({}).then((albums) => {
      const header = PicsModalHeader();

      const content = PicsModalContent.render({
        albums,
        handleFileChange: files => this.handleFileChange(files),
        handleSelectChange: e => this.handleSelectChange(e),
      });

      this.footer = PicsModalFooter({
        disable: true,
        handleSubmit: () => this.handleSubmit(),
      });

      this.container.appendChild(header);
      this.container.appendChild(content);
      this.container.appendChild(this.footer);
      Modal.render({ child: this.container });
    });
  },
};

export default PicsModal;
