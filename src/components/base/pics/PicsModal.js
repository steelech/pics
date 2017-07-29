import Modal from 'components/ui/Modal';
import { Pic, Pics } from 'model/pics';

FileList.prototype.toArray = function() {
  const files = [];
  for (let i = 0; i < this.length; i++) {
    files.push(this[i]);
  }
  return files;
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
    console.log('submitting: ', this.fileList);
    Pics.send(this.fileList).then(message => {
      this.onSubmit();
    });
  },
  render(params) {
    console.log('rendering pics modal');
    this.onSubmit = params.onSubmit;
    const picsModal = document.createElement('div');
    picsModal.classList.add('pics-modal');
    picsModal.id = 'pics-modal';
    picsModal.ondragenter = function(event) {
      event.preventDefault();
      event.currentTarget.classList.add('drag-enter');
      console.log('drag enter');
    };
    picsModal.ondragleave = function(event) {
      event.preventDefault();
      event.currentTarget.classList.remove('drag-enter');
      console.log('drag leave');
    };
    picsModal.ondrop = e => this._handleFileDrop(e);

    picsModal.ondragover = function(event) {
      event.preventDefault();
    };
    const picsModalHeader = document.createElement('div');
    picsModalHeader.classList.add('pics-modal-header');
    picsModalHeader.id = 'pics-modal-header';
    const headerText = document.createElement('h1');
    headerText.classList.add('header-text');
    headerText.id = 'pics-modal-header-text';
    headerText.appendChild(document.createTextNode('Add Pics'));
    picsModalHeader.appendChild(headerText);

    const picsModalContent = document.createElement('div');
    picsModalContent.classList.add('pics-modal-content');
    picsModalContent.id = 'pics-modal-content';

    const fileUploadButton = document.createElement('input');
    fileUploadButton.type = 'file';
    fileUploadButton.accept = '.jpg, .png';
    fileUploadButton.classList.add('upload-file');
    fileUploadButton.id = 'upload-file';
    fileUploadButton.multiple = 'multiple';
    fileUploadButton.onchange = () => this._handleFileUpload();
    picsModalContent.appendChild(fileUploadButton);

    const fileUploadButtonLabel = document.createElement('label');
    fileUploadButtonLabel.classList.add('file-upload-button-label');
    fileUploadButtonLabel.id = 'file-upload-button-label';
    fileUploadButtonLabel.htmlFor = 'upload-file';
    fileUploadButtonLabel.appendChild(document.createTextNode('Browse Files'));
    picsModalContent.appendChild(fileUploadButtonLabel);

    const dragAndDrop = document.createElement('div');
    dragAndDrop.classList.add('pics-drag-and-drop');
    dragAndDrop.id = 'pics-drag-and-drop';
    dragAndDrop.appendChild(document.createTextNode('or Drag and Drop'));
    picsModalContent.appendChild(dragAndDrop);

    const submitButton = document.createElement('div');
    submitButton.classList.add('pics-modal-submit');
    submitButton.id = 'pics-modal-submit';
    submitButton.appendChild(document.createTextNode('Upload'));
    submitButton.onclick = () => this._handleSubmit();
    picsModalContent.appendChild(submitButton);

    picsModal.appendChild(picsModalHeader);
    picsModal.appendChild(picsModalContent);
    Modal.render(picsModal);
  },
};

export default PicsModal;
