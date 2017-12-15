import Modal from 'components/ui/Modal';
import Pics from 'model/pics';
import Albums from 'model/albums';
import FileUpload from 'components/ui/FileUpload';


FileList.prototype.toArray = function () {
  const files = [];
  for (let i = 0; i < this.length; i++) {
    files.push(this[i]);
  }
  return files;
};

const tearDownLoader = () => {
  const wrapper = document.getElementById('modal');
  if (wrapper) {
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
  }
  document.body.removeChild(wrapper);
};

const renderLoader = () => {
  Modal.lock();
  const wrapper = document.getElementById('pics-modal');
  if (wrapper) {
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
  }
  const loadingSpinner = document.createElement('div');
  loadingSpinner.id = 'loading-spinner';
  loadingSpinner.classList.add('loading-spinner');

  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.classList.add('loader');
  loadingSpinner.appendChild(loader);
  wrapper.appendChild(loadingSpinner);
  const refreshWarning = document.createElement('div');
  refreshWarning.id = 'refresh-warning';
  refreshWarning.classList.add('refresh-warning');
  refreshWarning.appendChild(
    document.createTextNode('Processing pictures. Please do not refresh.'),
  );
  wrapper.appendChild(refreshWarning);
};

const PicsModal = {
  fileList: [],
  _handleFileDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.fileList = this.fileList.concat(files.toArray());
  },
  _handleFileUpload(event) {
    const files = document.getElementById('upload-file').files;
    this.fileList = this.fileList.concat(files.toArray());
  },
  _handleSubmit(event) {
    // tear down view, render loading spinner + message
    renderLoader();
    // send album as well as fileList
    Pics.send(this.fileList, this.albumid).then((message) => {
      tearDownLoader();
      this.onSubmit(this.albumid);
    });
  },
  render(params) {
    const picsModal = document.createElement('div');
    picsModal.classList.add('pics-modal');
    picsModal.id = 'pics-modal';

    const fileUpload = FileUpload.render({
      onFileChange: (files) => {
        console.log('new fileList: ', files);
      },
    });
    picsModal.appendChild(fileUpload);
    Modal.render({ child: picsModal });
    // // TODO: clean this up
    // Albums.get({}).then((albums) => {
    //   // this.albumid = albums.
    //   this.onSubmit = params.onSubmit;
    //   const picsModal = document.createElement('div');
    //   picsModal.classList.add('pics-modal');
    //   picsModal.id = 'pics-modal';
    //   picsModal.ondragenter = function (event) {
    //     event.preventDefault();
    //     event.currentTarget.classList.add('drag-enter');
    //   };
    //   picsModal.ondragleave = function (event) {
    //     event.preventDefault();
    //     event.currentTarget.classList.remove('drag-enter');
    //   };
    //   picsModal.ondrop = e => this._handleFileDrop(e);
    //
    //   picsModal.ondragover = function (event) {
    //     event.preventDefault();
    //   };
    //   const picsModalHeader = document.createElement('div');
    //   picsModalHeader.classList.add('pics-modal-header');
    //   picsModalHeader.id = 'pics-modal-header';
    //   const headerText = document.createElement('h1');
    //   headerText.classList.add('header-text');
    //   headerText.id = 'pics-modal-header-text';
    //   headerText.appendChild(document.createTextNode('Add Pics'));
    //   picsModalHeader.appendChild(headerText);
    //
    //   const picsModalContent = document.createElement('div');
    //   picsModalContent.classList.add('pics-modal-content');
    //   picsModalContent.id = 'pics-modal-content';
    //
    //   const fileUploadButton = document.createElement('input');
    //   fileUploadButton.type = 'file';
    //   fileUploadButton.accept = '.jpg, .png';
    //   fileUploadButton.classList.add('upload-file');
    //   fileUploadButton.id = 'upload-file';
    //   fileUploadButton.multiple = 'multiple';
    //   fileUploadButton.onchange = () => this._handleFileUpload();
    //   picsModalContent.appendChild(fileUploadButton);
    //
    //   const fileUploadButtonLabel = document.createElement('label');
    //   fileUploadButtonLabel.classList.add('file-upload-button-label');
    //   fileUploadButtonLabel.id = 'file-upload-button-label';
    //   fileUploadButtonLabel.htmlFor = 'upload-file';
    //   fileUploadButtonLabel.appendChild(document.createTextNode('Browse Files'));
    //   picsModalContent.appendChild(fileUploadButtonLabel);
    //
    //   const dragAndDrop = document.createElement('div');
    //   dragAndDrop.classList.add('pics-drag-and-drop');
    //   dragAndDrop.id = 'pics-drag-and-drop';
    //   dragAndDrop.appendChild(document.createTextNode('or Drag and Drop'));
    //   picsModalContent.appendChild(dragAndDrop);
    //
    //   const select = document.createElement('select');
    //   select.id = 'pics-album-select';
    //   select.classList.add('pics-album-select');
    //
    //   select.onchange = (event) => {
    //     this.albumid = event.srcElement.value;
    //   };
    //   const defaultOption = document.createElement('option');
    //   defaultOption.selected = 'selected';
    //   defaultOption.appendChild(document.createTextNode('None'));
    //   defaultOption.value = null;
    //   select.appendChild(defaultOption);
    //   albums.map((album) => {
    //     const albumOption = document.createElement('option');
    //     albumOption.value = album._id;
    //     albumOption.appendChild(document.createTextNode(album.name));
    //     select.appendChild(albumOption);
    //   });
    //   picsModalContent.appendChild(select);
    //
    //   const submitButton = document.createElement('div');
    //   submitButton.classList.add('pics-modal-submit');
    //   submitButton.id = 'pics-modal-submit';
    //   submitButton.appendChild(document.createTextNode('Upload'));
    //   submitButton.onclick = () => this._handleSubmit();
    //   picsModalContent.appendChild(submitButton);
    //
    //   picsModal.appendChild(picsModalHeader);
    //   picsModal.appendChild(picsModalContent);
    //   Modal.render({ child: picsModal });
    // });
  },
};

export default PicsModal;
