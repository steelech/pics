const PicsHeader = {
  _drawHeader() {},
  _drawButtons() {},
  render(props) {
    this.container = props.container;

    const picsHeader = document.createElement('div');
    picsHeader.classList.add('pics-header');
    picsHeader.id = 'pics-header';
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    buttonsContainer.id = 'buttons-container';
    picsHeader.appendChild(buttonsContainer);
    const fileUploadButton = document.createElement('div');
    fileUploadButton.classList.add('file-upload-button');
    fileUploadButton.id = 'file-upload-button';
    fileUploadButton.appendChild(document.createTextNode('+Pictures'));
    fileUploadButton.addEventListener('click', props.handleUploadButtonClick);
    buttonsContainer.appendChild(fileUploadButton);
    const albumCreateButton = document.createElement('div');
    albumCreateButton.classList.add('add-album-button');
    albumCreateButton.id = 'add-album-button';
    albumCreateButton.appendChild(document.createTextNode('+Album'));
    albumCreateButton.addEventListener('click', props.handleUploadButtonClick);
    buttonsContainer.appendChild(albumCreateButton);
    picsHeader.appendChild(buttonsContainer);
    const picsHeaderText = document.createElement('div');
    picsHeaderText.classList.add('pics-header-text');
    picsHeaderText.id = 'pics-header-text';
    picsHeaderText.appendChild(document.createTextNode('Pictures'));
    picsHeader.appendChild(picsHeaderText);
    this.container.appendChild(picsHeader);
  },
};

export default PicsHeader;
