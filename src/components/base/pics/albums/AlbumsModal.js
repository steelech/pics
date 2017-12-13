import Modal from 'components/ui/modal';
import Albums from 'model/albums';

FileList.prototype.toArray = function () {
  const files = [];
  for (let i = 0; i < this.length; i++) {
    files.push(this[i]);
  }
  return files;
};

const fileUpload = {
  handleFileSelect(e) {
    this.files = this.files.concat(e.target.files.toArray());
    this.onFileChange(this.files);
  },
  handleDrop(e) {
    e.preventDefault();
    if (this.fileUploadWrapper.style.visibility !== 'hidden') {
      this.files = this.files.concat(e.dataTransfer.files.toArray());
      this.dropZone.style.background = 'white';
      this.onFileChange(this.files);
    }
  },
  handleDragEnter(e) {
    e.preventDefault();
    if (this.fileUploadWrapper.style.visibility !== 'hidden') {
      this.dropZone.style.background = 'lightgrey';
    }
  },
  handleDragLeave() {
    if (this.fileUploadWrapper.style.visibility !== 'hidden') {
      this.dropZone.style.background = 'white';
    }
  },
  render({ dropZone, onFileChange }) {
    this.dropZone = dropZone;
    this.onFileChange = onFileChange;
    this.files = [];
    dropZone.addEventListener('dragover', (e) => this.handleDragEnter(e));
    dropZone.addEventListener('dragleave', () => this.handleDragLeave());
    dropZone.addEventListener('drop', e => this.handleDrop(e));
    this.fileUploadWrapper = document.createElement('div');
    this.fileUploadWrapper.id = 'file-upload-wrapper';
    this.fileUploadWrapper.classList.add('file-upload-wrapper');

    const fileInput = document.createElement('input');
    fileInput.id = 'file-input';
    fileInput.classList.add('file-input');
    fileInput.type = 'file';
    fileInput.multiple = 'multiple';
    fileInput.addEventListener('change', e => this.handleFileSelect(e));

    const fileInputLabel = document.createElement('label');
    fileInputLabel.id = 'file-input-label';
    fileInputLabel.classList.add('file-input-label');
    fileInputLabel.htmlFor = 'file-input';
    fileInputLabel.appendChild(document.createTextNode('Browse'));

    const dragAndDropText = document.createElement('div');
    dragAndDropText.id = 'drag-and-drop-text';
    dragAndDropText.classList.add('drag-and-drop-text');
    dragAndDropText.appendChild(document.createTextNode('or Drag and drop'));

    this.fileUploadWrapper.appendChild(fileInput);
    this.fileUploadWrapper.appendChild(fileInputLabel);
    this.fileUploadWrapper.appendChild(dragAndDropText);
    return this.fileUploadWrapper;
  },
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
  toggleFileInput(checked) {
    if (checked) {
      this.fileUploadWrapper.style.visibility = '';
    } else {
      this.fileUploadWrapper.style.visibility = 'hidden';
    }
  },
  handleFileChange(files) {
    console.log('Files added, new files: ', files);
  },
  render({ dropZone }) {
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

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.id = 'albums-modal-checkbox-wrapper';
    checkboxWrapper.classList.add('albums-modal-checkbox-wrapper');

    const checkbox = document.createElement('input');
    checkbox.id = 'albums-modal-checkbox';
    checkbox.classList.add('albums-modal-checkbox');
    checkbox.type = 'checkbox';
    checkbox.onchange = e => this.toggleFileInput(e.target.checked);

    const checkboxLabel = document.createElement('div');
    checkboxLabel.id = 'albums-modal-checkbox-label';
    checkboxLabel.classList.add('albums-modal-checkbox-label');
    checkboxLabel.appendChild(document.createTextNode('Add images now'));

    textFieldWrapper.appendChild(textFieldLabel);
    textFieldWrapper.appendChild(textFieldInput);

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(checkboxLabel);

    this.fileUploadWrapper = fileUpload.render({
      dropZone,
      onFileChange: files => this.handleFileChange(files),
    });
    this.fileUploadWrapper.style.visibility = 'hidden';

    this.content.appendChild(textFieldWrapper);
    this.content.appendChild(checkboxWrapper);
    this.content.appendChild(this.fileUploadWrapper);
    return this.content;
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
  render({ onSubmit }) {
    this.onSubmit = () => onSubmit();
    const container = document.createElement('div');
    container.id = 'albums-modal';
    container.classList.add('albums-modal');

    const header = AlbumsModalHeader();
    const content = AlbumsModalContent.render({ dropZone: container });
    const footer = AlbumsModalFooter();

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    Modal.render({ child: container });
  },
};

export default AlbumsModal;
