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

const FileUpload = {
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

export default FileUpload;
