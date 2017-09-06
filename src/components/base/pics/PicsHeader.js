import AlbumHeader from 'components/base/pics/albums/AlbumHeader';

const drawUploadButton = ({ buttonsContainer, handleUploadButtonClick }) => {
  const fileUploadButton = document.createElement('div');
  fileUploadButton.classList.add('file-upload-button');
  fileUploadButton.id = 'file-upload-button';
  fileUploadButton.appendChild(document.createTextNode('+Pictures'));
  fileUploadButton.addEventListener('click', handleUploadButtonClick);
  buttonsContainer.appendChild(fileUploadButton);
};

const drawAlbumCreateButton = ({ buttonsContainer, handleAlbumCreateClick }) => {
  const albumCreateButton = document.createElement('div');
  albumCreateButton.classList.add('add-album-button');
  albumCreateButton.id = 'add-album-button';
  albumCreateButton.appendChild(document.createTextNode('+Album'));
  albumCreateButton.addEventListener('click', handleAlbumCreateClick);
  buttonsContainer.appendChild(albumCreateButton);
};

const drawButtons = ({ container, handleUploadButtonClick, handleAlbumCreateClick }) => {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  buttonsContainer.id = 'buttons-container';
  drawUploadButton({ buttonsContainer, handleUploadButtonClick });
  drawAlbumCreateButton({ buttonsContainer, handleAlbumCreateClick });
  container.appendChild(buttonsContainer);
};

const drawHeaderText = ({ container, albums, albumName }) => {
  // if albumsName, draw AlbumHeader, else :
  if (albumName) {
    debugger
    AlbumHeader.render({ container, albumName });

  } else {
    const picsHeaderText = document.createElement('div');
    picsHeaderText.classList.add('pics-header-text');
    picsHeaderText.id = 'pics-header-text';

    const headerText = albums ? 'Albums' : 'Pictures';
    picsHeaderText.appendChild(document.createTextNode(headerText));
    container.appendChild(picsHeaderText);
  }
};

const PicsHeader = {
  render(props) {
    const { handleUploadButtonClick, handleAlbumCreateClick, albums, albumName } = props;
    this.container = props.container;

    const container = document.createElement('div');
    container.classList.add('pics-header');
    container.id = 'pics-header';
    drawButtons({ container, handleUploadButtonClick, handleAlbumCreateClick });
    drawHeaderText({ container, albums, albumName });
    this.container.appendChild(container);
  },
};

export default PicsHeader;
