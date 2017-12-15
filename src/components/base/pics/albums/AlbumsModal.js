import Modal from 'components/ui/modal';
import Albums from 'model/albums';

FileList.prototype.toArray = function () {
  const files = [];
  for (let i = 0; i < this.length; i++) {
    files.push(this[i]);
  }
  return files;
};

const fileList = {
  handleFileRemove(file) {
    this.onFileRemove(file);
  },
  render({ files, onFileRemove }) {
    this.onFileRemove = onFileRemove;
    if (!files.length) {
      const placeholder = document.createElement('div');
      placeholder.id = 'empty-filelist-placeholder';
      placeholder.classList.add('empty-filelist-placeholder');
      placeholder.appendChild(document.createTextNode('Add images now, or wait until later'));
      return placeholder;
    }
    const listWrapper = document.createElement('div');
    listWrapper.id = 'file-list';
    listWrapper.classList.add('file-list');
    files.map((file) => {
      const listEntry = document.createElement('div');
      listEntry.id = 'file-list-entry';
      listEntry.classList.add('file-list-entry');

      const listEntryFilename = document.createElement('div');
      listEntryFilename.id = 'file-list-entry-filename';
      listEntryFilename.classList.add('file-list-entry-filename');
      listEntryFilename.appendChild(document.createTextNode(file.name));
      listEntry.appendChild(listEntryFilename);

      const listEntryDelete = document.createElement('div');
      listEntryDelete.id = 'file-list-entry-delete';
      listEntryDelete.classList.add('file-list-entry-delete');

      const deleteIcon = document.createElement('i');
      deleteIcon.id = 'file-delete-icon';
      deleteIcon.classList.add('fa');
      deleteIcon.classList.add('fa-close');
      deleteIcon.classList.add('file-delete-icon');
      deleteIcon.addEventListener('click', () => this.handleFileRemove(file));
      listEntryDelete.appendChild(deleteIcon);
      listEntry.appendChild(listEntryDelete);

      listWrapper.appendChild(listEntry);
    });
    return listWrapper;
  },
};

const FileListWrapper = {
  handleFileRemove(file) {
    this.onFileRemove(file);
  },
  render({ files, onFileRemove }) {
    this.onFileRemove = onFileRemove;
    const fileListWrapper = document.createElement('div');
    fileListWrapper.id = 'file-list-wrapper';
    fileListWrapper.classList.add('file-list-wrapper');
    const fileListHeader = document.createElement('div');
    fileListHeader.id = 'file-list-header';
    fileListHeader.classList.add('file-list-header');

    const fileListNumFiles = document.createElement('div');
    fileListNumFiles.id = 'file-list-num-files';
    fileListNumFiles.classList.add('file-list-num-files');
    fileListNumFiles.appendChild(document.createTextNode(`${files.length}`));

    const fileListHeaderText = document.createElement('div');
    fileListHeaderText.id = 'file-list-header-text';
    fileListHeaderText.classList.add('file-list-header-text');
    fileListHeaderText.appendChild(document.createTextNode('file(s) to be added:'));

    const list = fileList.render({
      files,
      onFileRemove: file => this.handleFileRemove(file),
    });

    fileListHeader.appendChild(fileListNumFiles);
    fileListHeader.appendChild(fileListHeaderText);
    fileListWrapper.appendChild(fileListHeader);
    fileListWrapper.appendChild(list);
    if (files.length) {
      const fileListRemoveAll = document.createElement('div');
      fileListRemoveAll.id = 'file-list-remove-all';
      fileListRemoveAll.classList.add('file-list-remove-all');

      const fileListRemoveAllText = document.createElement('div');
      fileListRemoveAllText.id = 'file-list-remove-all-text';
      fileListRemoveAllText.classList.add('file-list-remove-all-text');
      fileListRemoveAllText.appendChild(document.createTextNode('Remove all images'));
      fileListRemoveAll.appendChild(fileListRemoveAllText);

      const deleteIcon = document.createElement('i');
      deleteIcon.id = 'remove-all-delete-icon';
      deleteIcon.classList.add('remove-all-delete-icon');
      deleteIcon.classList.add('fa');
      deleteIcon.classList.add('fa-close');
      fileListRemoveAll.appendChild(deleteIcon);
      fileListRemoveAll.addEventListener('click', () => this.handleFileRemove());
      fileListWrapper.appendChild(fileListRemoveAll);
    }

    return fileListWrapper;
  },
};

const fileUpload = {
  handleFileRemove(file) {
    if (!file) {
      this.files = [];
      this.rerenderFileList();
      this.onFileChange(this.files);
    } else {
      this.files.splice(this.files.indexOf(file), 1);
      this.rerenderFileList();
      this.onFileChange(this.files);
    }
  },
  rerenderFileList() {
    this.fileUploadWrapper.removeChild(this.fileListWrapper);
    this.fileListWrapper = FileListWrapper.render({
      files: this.files,
      onFileRemove: file => this.handleFileRemove(file),
    });
    this.fileUploadWrapper.appendChild(this.fileListWrapper);
  },
  handleFileSelect(e) {
    this.files = this.files.concat(e.target.files.toArray());
    this.rerenderFileList();
    this.onFileChange(this.files);
  },
  handleDrop(e) {
    e.preventDefault();
    this.files = this.files.concat(e.dataTransfer.files.toArray());
    this.dragAndDropZone.style.background = 'lightgrey';
    this.rerenderFileList();
    this.onFileChange(this.files);
  },
  handleDragEnter(e) {
    this.dragAndDropZone.style.background = '#b9dacb';
    e.preventDefault();
  },
  handleDragLeave() {
    this.dragAndDropZone.style.background = 'lightgrey';
  },
  render({ onFileChange }) {
    // this.dropZone = dropZone;
    this.onFileChange = onFileChange;
    this.files = [];
    this.fileUploadWrapper = document.createElement('div');
    this.fileUploadWrapper.id = 'file-upload-wrapper';
    this.fileUploadWrapper.classList.add('file-upload-wrapper');

    const fileInputWrapper = document.createElement('div');
    fileInputWrapper.id = 'file-input-wrapper';
    fileInputWrapper.classList.add('file-input-wrapper');

    this.dragAndDropZone = document.createElement('div');
    this.dragAndDropZone.id = 'drag-and-drop-zone';
    this.dragAndDropZone.classList.add('drag-and-drop-zone');
    this.dragAndDropZone.addEventListener('dragover', (e) => this.handleDragEnter(e));
    this.dragAndDropZone.addEventListener('dragleave', () => this.handleDragLeave());
    this.dragAndDropZone.addEventListener('drop', e => this.handleDrop(e));

    const dragAndDropTextWrapper = document.createElement('div');
    dragAndDropTextWrapper.id = 'drag-and-drop-text-wrapper';
    dragAndDropTextWrapper.classList.add('drag-and-drop-text-wrapper');

    const dragAndDropText = document.createElement('div');
    dragAndDropText.id = 'drag-and-drop-text';
    dragAndDropText.classList.add('drag-and-drop-text');
    dragAndDropText.appendChild(document.createTextNode('Drag and drop to add images'));

    const dragAndDropOr = document.createElement('div');
    dragAndDropOr.id = 'drag-and-drop-or';
    dragAndDropOr.classList.add('drag-and-drop-or');
    dragAndDropOr.appendChild(document.createTextNode('OR'));

    const fileSelectWrapper = document.createElement('div');
    fileSelectWrapper.id = 'file-select-wrapper';
    fileSelectWrapper.classList.add('file-select-wrapper');

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
    fileInputLabel.appendChild(document.createTextNode('Select files'));

    fileSelectWrapper.appendChild(fileInput);
    fileSelectWrapper.appendChild(fileInputLabel);

    dragAndDropTextWrapper.appendChild(dragAndDropText);
    dragAndDropTextWrapper.appendChild(dragAndDropOr);
    dragAndDropTextWrapper.appendChild(fileSelectWrapper);

    this.dragAndDropZone.appendChild(dragAndDropTextWrapper);
    fileInputWrapper.appendChild(this.dragAndDropZone);

    this.fileListWrapper = FileListWrapper.render({
      files: this.files,
      onFileRemove: file => this.handleFileRemove(file),
    });

    this.fileUploadWrapper.appendChild(fileInputWrapper);
    this.fileUploadWrapper.appendChild(this.fileListWrapper);

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
    textFieldInput.addEventListener('change', e => handleAlbumNameChange(e.target.value));

    textFieldWrapper.appendChild(textFieldLabel);
    textFieldWrapper.appendChild(textFieldInput);

    this.fileUploadWrapper = fileUpload.render({
      onFileChange: files => this.handleFileChange(files),
    });

    this.content.appendChild(textFieldWrapper);
    this.content.appendChild(this.fileUploadWrapper);
    return this.content;
  },
};

const AlbumsModalFooter = ({ handleSubmit, handleCancel }) => {
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
    this.albumName = albumName;
  },
  handleSubmit() {
    console.log('handling submit');
    console.log('fileList: ', this.fileList);
    console.log('albumName: ', this.albumName);
  },
  handleCancel() {
    console.log('handling cancel');
  },
  handleFileChange(files) {
    this.fileList = files;
  },
  render({ onSubmit }) {
    this.fileList = [];
    this.albumName = '';
    this.onSubmit = () => onSubmit();
    const container = document.createElement('div');
    container.id = 'albums-modal';
    container.classList.add('albums-modal');

    const header = AlbumsModalHeader();
    const content = AlbumsModalContent.render({
      handleFileChange: files => this.handleFileChange(files),
      handleAlbumNameChange: albumName => this.handleAlbumNameChange(albumName),
    });
    const footer = AlbumsModalFooter({
      handleSubmit: () => this.handleSubmit(),
      handleCancel: () => this.handleCancel(),
    });

    container.appendChild(header);
    container.appendChild(content);
    container.appendChild(footer);

    Modal.render({ child: container });
  },
};

export default AlbumsModal;
